import React from 'react'
import { Avatar, Box, Image, Stack, Text, VStack } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} color={'whiteAlpha.700'} minH={'48'} px={'16'} py={['16', '8']}>



      <Stack direction={['column', 'row']} h={'full'} alignItems={'center'}>

        <VStack w={'full'} alignItems={['center', 'flex-start']}>
          <Text fontWeight={'bold'} color={'whiteAlpha.900'} fontSize={'xl'} fontFamily={'sans-serif'}>About Us</Text>
          <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center', 'left']} color={'whiteAlpha.800'} fontFamily={'sans-serif'}>We are the best crypto trading app in India, We provide our guidence at very good price.</Text>

        </VStack>

        <VStack>
          <Image src='https://yourcabuddy.com/wp-content/uploads/2022/11/shubham-CA-white.png' />

          <Text fontSize={'xl'} color={'whiteAlpha.900'} fontFamily={'sans-serif'}>Our Founder : Vicky</Text>

        </VStack>

      </Stack>



    </Box>

  )
}

export default Footer