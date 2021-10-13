import { useUserStreamsQuery } from 'apollo/generated/graphql'
import React from 'react'
import { SABLIER_PROXY_ADDRESS } from 'utils/constants'
import { useContract } from './useContract'
import SablierAbi from 'abi/SablierProxyAbi.json'
import { Interface } from '@ethersproject/abi'
import { Web3Provider } from '@ethersproject/providers'
import create from 'zustand/vanilla'

const SablierInterface = new Interface(SablierAbi)

export const useUserStreams = (
  account: string | null,
  provider: Web3Provider
) => {
  const sablierProxy = useContract(
    provider,
    account,
    SABLIER_PROXY_ADDRESS,
    SablierInterface
  )
  const { data: userStreams, loading: userStreamsLoading } =
    useUserStreamsQuery({
      skip: !account,
      variables: {
        account
      }
    })
}

export const useUserStreamState = create((set) => ({
  streams: []
}))
