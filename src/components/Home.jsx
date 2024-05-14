// import React from 'react'
// import { Box, Image, Text } from "@chakra-ui/react"
// import btcSrc from "../assets/btc.png";

// const Home = () => {
//   return (
    
//     <Box bgColor={'blackAlpha.900'} w={'full'} h={'85vh'}>

//    <Image w={'full'} h={'full'} objectFit={'contain'} src={btcSrc} filter={'grayscale(1)'} css={{
//     animation: 'rotate 10s linear infinite'
//    }} />



//   <Text fontSize={'6xl'} textAlign={'center'} fontWeight={'thin'} color={'whiteAlpha.700'} marginTop={'-20'}>Xcrypto</Text>



//     </Box>
//   )
// }

// export default Home


import React from 'react'
import { Box, Image, Text } from "@chakra-ui/react"
import btcSrc from "../assets/btc.png";

const Home = () => {
  return (
    <>
      <style>
        {`
          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <Box bgColor={'blackAlpha.900'} w={'full'} h={'85vh'} overflow={'hidden'} position={'relative'}>
        <Image
          w={'full'}
          h={'80vh'}
          objectFit={'contain'}
          src={btcSrc}
          filter={'grayscale(1)'}
          css={{
            animation: 'rotate 10s linear infinite',
            transformOrigin: 'center'
          }}
        />
        <Text fontSize={'6xl'} textAlign={'center'} fontWeight={'thin'} color={'whiteAlpha.700'} marginTop={'-20'}>Xcrypto</Text>
      </Box>
    </>
  )
}

export default Home;
