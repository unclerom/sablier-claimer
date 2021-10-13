import {
  Box,
  Button,
  Center,
  CircularProgress,
  Container,
  Flex,
  Link,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'
import { useWallet } from 'components/WalletProvider'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useWithdraw } from 'hooks/useWithdraw'
import { WithdrawModal } from 'components/WithdrawModal'
import { bn, fromBaseUnit, toBaseUnit, toDisplayAmount } from 'utils/math'
import { StreamProgress } from 'components/StreamProgress'
import { getEtherscanLink } from 'utils/helpers'
import dayjs from 'dayjs'
import { useUserSingleStreamQuery } from 'apollo/generated/graphql'
import { commify } from '@ethersproject/units'

export const StreamPage = (): JSX.Element => {
  const { id }: Record<string, string> = useParams()
  const { state: wallet } = useWallet()
  const track = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const tickerBg = useColorModeValue('white', 'whiteAlpha.200')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [withdrawAmount, setWithdrawAmount] = useState<string | null>(null)
  const [now, setNow] = useState<number>(Math.floor(Date.now() / 1000))
  const { data, loading } = useUserSingleStreamQuery({
    pollInterval: 10000,
    skip: !id,
    variables: {
      id
    }
  })
  const stream = data && data.stream

  const total = bn(stream?.stopTime).minus(bn(stream?.startTime))
  // const possibleCancelNow = stream?.cancellation?.timestamp ? stream.cancellation.timestamp : now
  // const possibleCancelStoptime = stream?.cancellation?.timestamp
  //   ? stream.cancellation.timestamp
  //   : stream?.stopTime
  const timeUsed = bn(now).minus(bn(stream?.startTime))
  const percentStreamed = bn(now).gte(bn(stream?.stopTime))
    ? 100
    : timeUsed.div(total).times('100').toNumber()
  const totalWithdrawn = stream?.withdrawals?.reduce((acc, current) => {
    return bn(acc).plus(bn(current.amount)).toString()
  }, '0')

  const totalStreamed = bn(now).gte(bn(stream?.stopTime))
    ? bn(stream?.deposit)
    : timeUsed.times(bn(stream?.ratePerSecond))

  const availableAmount = totalStreamed.minus(bn(totalWithdrawn ?? '0'))
  const percentWithdrawn = bn(totalWithdrawn ?? '0')
    .div(bn(stream?.deposit))
    .times('100')

  const withdraw = useWithdraw(
    id,
    toBaseUnit(
      withdrawAmount && bn(withdrawAmount).gt(0) ? withdrawAmount : '0',
      stream?.token?.decimals as number
    ).toString(),
    availableAmount,
    !!data?.streamToSalary?.salaryId
  )

  useEffect(() => {
    const id = setTimeout(() => {
      setNow(Math.floor(Date.now() / 1000))
    }, 2000)

    return () => {
      clearTimeout(id)
    }
  })

  const sortedTxs = Object.values(stream?.txs ?? {}).sort((a, b) => {
    return Number(b.timestamp) - Number(a.timestamp)
  })

  if (!data && loading) return <Spinner />

  return (
    <Container maxW='xl'>
      <Center position='relative' minHeight='500px'>
        <CircularProgress
          size='420px'
          value={percentStreamed}
          thickness='1.4px'
          position='absolute'
          zIndex={-1}
          trackColor={track}
        />
        <CircularProgress
          size='360px'
          color='orange.500'
          value={Number(percentWithdrawn)}
          thickness='1px'
          position='absolute'
          zIndex={-1}
          trackColor={track}
        />
        <Box shadow='lg' textAlign='center' p={5} w='80%' bg={tickerBg}>
          <Text fontWeight='bold' fontSize='xl'>
            {commify(fromBaseUnit(totalStreamed.toString(), stream?.token?.decimals as number))}
          </Text>
          <Text textAlign='center'>
            of{' '}
            {commify(
              toDisplayAmount(
                fromBaseUnit(stream?.deposit, stream?.token?.decimals as number),
                stream?.token?.decimals as number
              )
            )}{' '}
            {stream?.token?.symbol}
          </Text>
        </Box>
      </Center>
      <Box
        border='1px'
        borderColor='blackAlpha.200'
        bg='whiteAlpha.200'
        borderRadius={12}
        p={2}
        w='full'
        textAlign='center'
      >
        <Text fontWeight='semibold'>Stream End Time</Text>
        <Text>{dayjs.unix(stream?.stopTime).format('MMM D, YYYY @ h:mm a')}</Text>
      </Box>
      <StreamProgress title='Streamed:' percent={percentStreamed} color='blue' />
      <StreamProgress title='Withdrawn:' percent={Number(percentWithdrawn)} color='orange' />
      {stream?.recipient?.toLowerCase() === wallet.account?.toLowerCase() && (
        <Button w='full' mt={6} colorScheme='blue' variant='solid' onClick={() => onOpen()}>
          Withdraw
        </Button>
      )}
      <Stack
        border='1px'
        borderColor='blackAlpha.200'
        bg='whiteAlpha.200'
        shadow='md'
        borderRadius={6}
        my={10}
        spacing={2}
      >
        <Text
          textAlign='center'
          fontWeight='semibold'
          borderBottom='1px'
          borderBottomColor='blackAlpha.200'
          p={2}
        >
          Stream transactions
        </Text>
        {sortedTxs ? (
          sortedTxs.map(tx => (
            <Flex
              justifyContent='space-between'
              key={tx.txhash}
              borderBottom='1px'
              borderBottomColor='blackAlpha.200'
              p={2}
            >
              <Text fontSize='sm'>{dayjs.unix(tx.timestamp).format('MMM D, YYYY @ h:mm a')}</Text>
              <Text fontSize='sm'>{tx.event}</Text>
              <Link
                colorScheme='blue'
                fontSize='sm'
                onClick={() => window.open(getEtherscanLink(tx.txhash, 'transaction'), '_blank')}
              >
                View on explorer
              </Link>
            </Flex>
          ))
        ) : (
          <Text>No Transactions Found...</Text>
        )}
      </Stack>
      <WithdrawModal
        setAmount={setWithdrawAmount}
        withdraw={withdraw}
        isOpen={isOpen}
        onClose={onClose}
        amount={withdrawAmount ?? '0'}
        streamed={totalStreamed}
        available={availableAmount}
        withdrawn={totalWithdrawn}
        token={stream?.token}
      />
    </Container>
  )
}
