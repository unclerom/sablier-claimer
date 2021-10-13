import React from 'react'
import { Spinner, Stack, StackProps, Text } from '@chakra-ui/react'
import { Stream } from 'apollo/generated/graphql'
import { UserStreamItem } from './UserStreamItem'
import { useUserStreamsQuery } from 'apollo/generated/graphql'
import { useHistory } from 'react-router-dom'

export const UserStreams = ({
  account,
  ...rest
}: {
  account: string | null
} & StackProps): JSX.Element => {
  const history = useHistory()
  const { data: userStreams, loading: userStreamsLoading } = useUserStreamsQuery({
    skip: !account,
    variables: {
      account: account
    }
  })
  if (userStreamsLoading) return <Spinner />
  return (
    <Stack w='full' spacing={8} {...rest}>
      {userStreams?.streams.length ? (
        userStreams?.streams.map(stream => (
          <UserStreamItem
            key={stream.id}
            stream={stream as Stream}
            onClick={() => history.push(`/stream/${stream.id}`)}
          />
        ))
      ) : (
        <Text textAlign='center'>No Streams Found</Text>
      )}
    </Stack>
  )
}
