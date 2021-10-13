import React from 'react'
import {
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Image,
  useColorModeValue,
  HStack,
  Button,
  useClipboard
} from '@chakra-ui/react'
import { getEtherscanLink, shortenAddress } from 'utils/helpers'
import { useWallet } from './WalletProvider'

export const AccountModal = ({
  isOpen,
  onClose
}: {
  isOpen: boolean
  onClose: () => void
}): JSX.Element | null => {
  const { state: wallet, connect, disconnect } = useWallet()
  const accent = useColorModeValue('gray.100', 'whiteAlpha.200')
  const { hasCopied, onCopy } = useClipboard(wallet?.account ?? '')

  if (!wallet.isConnected) return null
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Stack spacing={2}>
            <Box bg={accent} borderRadius={6} p={3}>
              <Flex justifyContent='center'>
                <Image
                  maxW='24px'
                  maxH='24px'
                  ml={2}
                  src={
                    wallet.wallet?.icons?.svg
                      ? `data:image/svg+xml;base64,${btoa(wallet.wallet.icons.svg)}`
                      : wallet.wallet?.icons?.iconSrc
                  }
                />
                <Text ml={2} fontWeight='semibold'>
                  {wallet.wallet?.name}
                </Text>
              </Flex>
              <Text mt={2} textAlign='center' fontSize='xl' fontWeight='semibold'>
                {shortenAddress(wallet?.account ?? '', 9)}
              </Text>
            </Box>
            <HStack>
              <Button onClick={() => onCopy()}>{hasCopied ? 'Copied' : 'Copy Address'}</Button>
              <Button
                onClick={() => {
                  onClose()
                  connect()
                }}
              >
                Switch
              </Button>
              <Button
                onClick={() => window.open(getEtherscanLink(wallet?.account ?? '', 'address'))}
              >
                Etherscan
              </Button>
              <Button
                onClick={() => {
                  onClose()
                  disconnect()
                }}
              >
                Disconnect
              </Button>
            </HStack>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
