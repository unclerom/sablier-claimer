import React from 'react'
import { Container, Text, Center, Button } from '@chakra-ui/react'
import { useWallet } from 'components/WalletProvider'
import { UserStreams } from 'components/UserStreams'

export const HomePage = (): JSX.Element => {
  const { state: wallet, connect } = useWallet()

  return (
    <Container maxW='xl'>
      <Center display='flex' flexDirection='column' mt={6} p={8} minHeight='60vh'>
        {!wallet.isConnected ? (
          <>
            <Text textAlign='center' fontWeight='semibold' fontSize='large'>
              Your incoming streams will show up here after you sign in to your Ethereum wallet
            </Text>
            <Button onClick={() => connect()} mt={5} colorScheme='blue' variant='solid'>
              Connect Wallet
            </Button>
          </>
        ) : (
          <UserStreams account={wallet.account} />
        )}
      </Center>
    </Container>
  )
}
