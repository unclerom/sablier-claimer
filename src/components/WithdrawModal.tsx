import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  Input,
  Text,
  Alert,
  AlertIcon,
  Link,
  InputGroup,
  HStack,
  Box
} from '@chakra-ui/react'
import { IuseWithdraw } from 'hooks/useWithdraw'
import { BN, bn, formatBaseAmount, fromBaseUnit, toBaseUnit, toDisplayAmount } from 'utils/math'
import { useWallet } from './WalletProvider'
import { TxStatus, usePendingTx } from 'hooks/usePendingTx'
import { getEtherscanLink } from 'utils/helpers'
import { Token } from 'apollo/generated/graphql'
import { useCoinCapPrice } from 'hooks/useCoinCapPrice'

const WithdrawModalItem = ({
  title,
  text,
  value
}: {
  title: string
  text: string
  value?: string
}) => {
  return (
    <HStack
      flexWrap='wrap'
      justifyContent='space-between'
      bg='whiteAlpha.100'
      borderRadius={6}
      border='1px'
      borderColor='blackAlpha.100'
      my={0}
      px={2}
      py={3}
    >
      <Text fontWeight='semibold'>{title}</Text>
      <Box>
        <Text>{text}</Text>
        {value && <Text fontWeight='semibold'>${value}</Text>}
      </Box>
    </HStack>
  )
}

type ModalProps = {
  amount: string | null
  streamed: BN
  withdrawn: string | undefined
  available: BN
  isOpen: boolean
  onClose: () => void
  setAmount: React.Dispatch<React.SetStateAction<string | null>>
  withdraw: IuseWithdraw
  token: Token | undefined | null
}

export const WithdrawModal = ({
  streamed,
  withdrawn,
  available,
  isOpen,
  onClose,
  setAmount,
  withdraw,
  amount,
  token
}: ModalProps): JSX.Element => {
  const { state: wallet } = useWallet()
  const pendingTx = usePendingTx(withdraw.txHash)
  const formattedAmount = toBaseUnit(amount ?? '0', token?.decimals as number)
  const ethPrice = useCoinCapPrice('ethereum')
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Withdraw From Stream</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={1}>
            <WithdrawModalItem
              title='Amount streamed to date: '
              text={`${fromBaseUnit(streamed, token?.decimals as number)} ${token?.symbol}`}
            ></WithdrawModalItem>
            <WithdrawModalItem
              title='Amount withdrawn to date: '
              text={`${fromBaseUnit(withdrawn ?? '0', token?.decimals as number)} ${token?.symbol}`}
            ></WithdrawModalItem>
            <WithdrawModalItem
              title='Amount available to claim: '
              text={`${fromBaseUnit(available, token?.decimals as number)} ${token?.symbol}`}
            ></WithdrawModalItem>
            <WithdrawModalItem
              title='Estimated Fee: '
              text={`${formatBaseAmount(withdraw.estimatedFee ?? '0', 18)} ETH`}
              value={toDisplayAmount(
                bn(formatBaseAmount(withdraw.estimatedFee ?? '0', 18) ?? '0')
                  .times(ethPrice ?? '0')
                  .toFixed(),
                18
              )}
            ></WithdrawModalItem>
          </Stack>
          <InputGroup mt={4}>
            <Input
              value={amount as string}
              type='number'
              inputMode='decimal'
              placeholder='Enter amount to withdraw'
              borderTopRightRadius={0}
              borderBottomRightRadius={0}
              isInvalid={
                bn(formattedAmount ?? '0').gt(bn(available)) && !bn(formattedAmount ?? '0').eq(0)
              }
              onChange={e => setAmount(e.target.value)}
            />
            <Button
              borderTopLeftRadius={0}
              borderBottomLeftRadius={0}
              onClick={() => setAmount(fromBaseUnit(available, token?.decimals as number))}
            >
              MAX
            </Button>
          </InputGroup>
          {withdraw.error && (
            <Alert status='error' borderRadius={6} mt={6}>
              <AlertIcon />
              {withdraw?.error?.message
                ? withdraw.error.message
                : typeof withdraw.error === 'string'
                ? withdraw.error
                : 'Something went wrong. Please try again'}
            </Alert>
          )}
          {pendingTx === TxStatus.UNKNOWN && withdraw.txHash && (
            <Alert status='success' borderRadius={6} mt={6}>
              <AlertIcon />
              Transaction Submitted
              <Link
                ml={2}
                color='green'
                onClick={() =>
                  window.open(getEtherscanLink(withdraw.txHash as string, 'transaction'), '_blank')
                }
              >
                View On Chain
              </Link>
            </Alert>
          )}
        </ModalBody>
        <ModalFooter>
          <Button
            w='full'
            isDisabled={
              bn(available).lt(formattedAmount ?? '0') || !bn(formattedAmount ?? '0').gt(0)
            }
            isLoading={withdraw.confirming || !!(pendingTx === TxStatus.UNKNOWN && withdraw.txHash)}
            loadingText={
              withdraw.confirming ? `Confirm on ${wallet.wallet?.name}` : 'Completing Transaction'
            }
            onClick={() => withdraw.withdrawFromStream()}
          >
            {!bn(formattedAmount ?? '0').gt(0)
              ? 'Enter an amount'
              : bn(available).gte(formattedAmount ?? '0')
              ? 'Confirm Transaction'
              : 'Not enough to withdraw'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
