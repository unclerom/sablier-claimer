import React from 'react'
import { Image, Button, ButtonProps } from '@chakra-ui/react'
import { useWallet } from 'components/WalletProvider'
import { shortenAddress } from 'utils/helpers'

type TWalletButton = ButtonProps & {
  onOpen: () => void
}

export const WalletButton = ({ onOpen, ...props }: TWalletButton): JSX.Element => {
  const { state, connect } = useWallet()
  const { isConnected, wallet, account } = state

  return (
    <Button
      rightIcon={
        isConnected && account ? (
          <Image
            maxW='24px'
            maxH='24px'
            ml={2}
            src={
              wallet?.icons?.svg
                ? `data:image/svg+xml;base64,${btoa(wallet.icons.svg)}`
                : wallet?.icons?.iconSrc
            }
          />
        ) : undefined
      }
      onClick={() => (isConnected && account ? onOpen() : connect())}
      {...props}
    >
      {isConnected && account ? shortenAddress(account, 4) : 'Connect Wallet'}
    </Button>
  )
}
