import { useCallback, useEffect } from 'react'
import { useState } from 'react'
import { BN, bn, bufferGas } from 'utils/math'
import { toHexString } from 'utils/helpers'
import { useWallet } from 'components/WalletProvider'
import { useContract } from './useContract'
import { GAS_LIMIT, SABLIER_PAYROLL_PROXY_ADDRESS, SABLIER_PROXY_ADDRESS } from 'utils/constants'
import SablierAbi from 'abi/SablierProxyAbi.json'
import SablierPayrollProxyAbi from 'abi/SablierPayrollProxyAbi.json'
import { BigNumber } from '@ethersproject/bignumber'

export interface IuseWithdraw {
  withdrawFromStream: () => Promise<void>
  txHash: string | null
  error: Error | null
  confirming: boolean
  estimatedFee: string | null
}

export const useWithdraw = (
  streamId: string,
  amount: string | BN | null,
  available: string | BN,
  isPayroll: boolean
): IuseWithdraw => {
  const { state: wallet } = useWallet()
  const [confirming, setConfirming] = useState<boolean>(false)
  const [txHash, setTxHash] = useState<string | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [estimatedFee, setEstimatedFee] = useState<string | null>(null)
  const sablierProxyContract = useContract(
    wallet?.provider ?? null,
    wallet?.account ?? null,
    SABLIER_PROXY_ADDRESS,
    SablierAbi
  )
  const sablierPayrollProxyContract = useContract(
    wallet?.provider ?? null,
    wallet?.account ?? null,
    SABLIER_PAYROLL_PROXY_ADDRESS,
    SablierPayrollProxyAbi
  )
  const contract = isPayroll ? sablierPayrollProxyContract : sablierProxyContract
  const withdrawMethod = isPayroll ? 'withdrawFromSalary' : 'withdrawFromStream'

  const fetchGas = useCallback(async () => {
    if (contract && wallet.account && streamId && wallet.blockNumber) {
      try {
        const gasPrice = await wallet?.provider?.getGasPrice()
        const bufferedGasPrice = bufferGas(gasPrice?.toString() ?? '0')
        const estimateFees = bn(bufferedGasPrice ?? '0')
          .times(bn(GAS_LIMIT))
          .toFixed()
        setEstimatedFee(estimateFees)
      } catch (error) {
        setEstimatedFee('0')
        console.warn(error)
      }
    }
  }, [contract, streamId, wallet.account, wallet.blockNumber, wallet?.provider])

  const withdrawFromStream = useCallback(async () => {
    setConfirming(true)
    try {
      if (!wallet.provider || !wallet.account) {
        throw Error('Missing wallet address or provider')
      }
      if (amount && bn(available).lt(bn(amount))) {
        throw Error('Insufficient stream balance to withdraw')
      }
      const data = contract?.interface.encodeFunctionData(withdrawMethod, [streamId, amount])
      if (!contract?.address) {
        throw Error('Missing contract address')
      }
      const tx = {
        to: contract.address,
        data,
        value: toHexString('0')
      }
      if (tx) {
        const rawGasPrice = await wallet.provider.getGasPrice()
        const gasPrice = bufferGas(rawGasPrice.toString())
        const gasLimit = GAS_LIMIT
        if (gasLimit && gasPrice) {
          const ethBalance = await wallet.provider?.getBalance(wallet.account)
          if (bn(ethBalance.toString()).lt(bn(gasLimit).times(gasPrice.toString()).toFixed())) {
            throw Error('Not enough ETH for gas')
          }
          const nonce = await wallet.provider?.getSigner().getTransactionCount()
          const withdrawTx = await wallet.provider?.getSigner().sendTransaction({
            to: tx.to,
            data: tx.data,
            value: tx.value,
            gasLimit: toHexString(gasLimit),
            gasPrice: toHexString(gasPrice),
            nonce: nonce
          })

          if (withdrawTx) {
            setConfirming(false)
            setTxHash(withdrawTx.hash)
          }
        } else {
          throw Error('Problem fetching gas')
        }
      }
    } catch (error) {
      setError(error)
      setConfirming(false)
    }
  }, [
    wallet.provider,
    wallet.account,
    amount,
    available,
    contract?.interface,
    contract?.address,
    withdrawMethod,
    streamId
  ])

  useEffect(() => {
    if (contract && wallet.account && streamId && wallet.blockNumber) {
      fetchGas()
    }
  }, [contract, fetchGas, streamId, wallet.account, wallet.blockNumber])

  useEffect(() => {
    const errorTimeout = setTimeout(() => {
      if (error) {
        setError(null)
      }
    }, 8000)
    return () => {
      clearTimeout(errorTimeout)
    }
  }, [error])

  return { withdrawFromStream, txHash, error, confirming, estimatedFee }
}
