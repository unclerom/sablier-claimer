import React from 'react'
import { ColorModeSwitcher } from 'components/ColorModeSwitcher'
import { WalletButton } from './WalletButton'
import { Flex, useDisclosure } from '@chakra-ui/react'
import { AccountModal } from './AccountModal'

export const Header = (): JSX.Element => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <>
      <Flex p={4} justifyContent='space-between' mx='auto' maxW='90%'>
        <ColorModeSwitcher justifySelf='flex-end' />
        <WalletButton onOpen={onOpen} />
      </Flex>
      <AccountModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}
