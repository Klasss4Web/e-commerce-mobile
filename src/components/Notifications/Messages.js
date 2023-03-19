
import { Center, Text } from 'native-base'
import React from 'react'

const Messages = ({ bg, color, children, size, bold }) => {
  return (
    <Center bg={bg} rounded={5} p={3}>
        <Text color={color} fontSize={size} bold={bold}>{children}</Text>
    </Center>
  )
}

export default Messages