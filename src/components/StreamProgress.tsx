import React from 'react'
import { Box, Flex, Progress, Text } from '@chakra-ui/react'

export const StreamProgress = ({
  percent,
  title,
  color
}: {
  percent: number
  title: string
  color: string
}): JSX.Element => (
  <Box
    border='1px'
    borderColor='blackAlpha.100'
    bg='whiteAlpha.200'
    borderRadius={6}
    p={2}
    my={1}
  >
    <Flex justifyContent='space-between'>
      <Text>{title}</Text>
      <Text>{percent.toFixed(2)}%</Text>
    </Flex>
    <Progress
      colorScheme={color}
      mt={2}
      borderRadius={20}
      size='sm'
      value={percent}
    />
  </Box>
)
