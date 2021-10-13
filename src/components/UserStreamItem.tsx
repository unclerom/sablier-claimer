import React from 'react'
import { Box, BoxProps, HStack, Text } from '@chakra-ui/react'
import { Stream } from 'apollo/generated/graphql'
import { commify } from 'ethers/lib/utils'
import { bn, formatBaseAmount } from 'utils/math'
import dayjs from 'dayjs'
import { StreamProgress } from './StreamProgress'

export type StreamItemProps = BoxProps & {
  stream: Partial<Stream>
}

export const UserStreamItem = ({ stream, ...rest }: StreamItemProps): JSX.Element => {
  const total = bn(stream.stopTime).minus(bn(stream.startTime))
  const timeUsed = bn(new Date().getTime() / 1000).minus(bn(stream.startTime))
  const percentStreamed = bn(new Date().getTime() / 1000).gte(bn(stream.stopTime))
    ? 100
    : timeUsed.div(total).times(100).toNumber()
  const totalWithdrawn = stream.withdrawals?.reduce((acc, current) => {
    return bn(acc).plus(bn(current.amount)).toString()
  }, '0')
  const percentWithdrawn = bn(totalWithdrawn ?? '0')
    .div(bn(stream.deposit))
    .times('100')
    .toFixed(2)

  return (
    <Box
      p={5}
      shadow='md'
      bg='whiteAlpha.200'
      borderRadius={12}
      _hover={{ shadow: 'lg', cursor: 'pointer' }}
      {...rest}
    >
      <HStack justifyContent='space-between' py={4} px={2}>
        <Text>ID: {stream.id}</Text>
        <Text>
          {commify(
            formatBaseAmount(stream.deposit ?? '0', stream.token?.decimals as number) ?? '0'
          )}{' '}
          {stream.token?.symbol}
        </Text>
      </HStack>
      <HStack w='full' mt={2}>
        <Box
          border='1px'
          borderColor='blackAlpha.200'
          bg='whiteAlpha.200'
          borderRadius={6}
          p={2}
          w='full'
        >
          <Text fontWeight='semibold'>Stream Start</Text>
          <Text>{dayjs.unix(stream.startTime).format('MMM D, YYYY @ h:mm a')}</Text>
        </Box>
        <Box
          border='1px'
          borderColor='blackAlpha.200'
          bg='whiteAlpha.200'
          borderRadius={12}
          p={2}
          w='full'
        >
          <Text fontWeight='semibold'>Stream End</Text>
          <Text>{dayjs.unix(stream.stopTime).format('MMM D, YYYY @ h:mm a')}</Text>
        </Box>
      </HStack>
      <StreamProgress title='Streamed:' percent={percentStreamed} color='blue' />
      <StreamProgress title='Withdrawn:' percent={Number(percentWithdrawn)} color='orange' />
    </Box>
  )
}
