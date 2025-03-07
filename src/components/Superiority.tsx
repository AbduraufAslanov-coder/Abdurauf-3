import { Box ,Text ,Image } from '@chakra-ui/react'
import React from 'react'

const Superiority = () => {
  return (
    <Box display="flex" pt='100px'  >
    <Box position="fixed" width="350px"   top='84px' right='0' height="100%" bg="black" />
    <Box flex="1"  position="fixed">
      <Box  ml={'1300px'} p="4">
        <Box  display='flex' >

     <Text  color="#ffff" fontSize='20px' >Superiority</Text>
    <Image mt='9px' ml='10px'  src='./src/assets/imgs/i.svg' alt="" ></Image>
        </Box>
        <Box>
          <Image  mt='22px' borderRadius='10px' src='./src/assets/imgs/s.svg' alt="" ></Image>
          <Box display='flex' >
          <Image  mt='22px'  src='./src/assets/imgs/feather.svg' alt="" ></Image>
          <Text  mt='15px' ml='10px' color="#5E5CE6" fontSize='20px' >Social Trading Platform</Text>
          </Box>
          <Box>
          <Box bg="#2C2C2E"  borderRadius='10px' mt='10px'w='250px' h='275px' >



            <Box  display='flex' >

          <Image src='./src/assets/imgs/google.svg' mt='10px' w='48px' h='48px'  pt='10px' pl='10px' alt="" ></Image>
        <Box>

         <Text   mt='10px' ml='10px' color="gray" fontSize='20px' >Stock trading</Text>
         <Text   ml='10px'  fontSize='20px' >Google</Text>
         <Image src='./src/assets/imgs/line3.svg' mt='10px' ml='10px' alt=""></Image>
        </Box>
            </Box>


            <Box  display='flex' >

<Image src='./src/assets/imgs/foursquare.svg' mt='10px'  w='48px' h='48px'  pt='10px' pl='10px' alt="" ></Image>
<Box>

<Text   mt='10px' ml='10px' color="gray" fontSize='20px' >Stock trading</Text>
<Text    ml='10px'  fontSize='20px' >Foursquare</Text>
<Image src='./src/assets/imgs/line3.svg' mt='10px' ml='10px' alt=""></Image>
</Box>
  </Box>



  <Box  display='flex' >

<Image src='./src/assets/imgs/kickstarter.svg' mt='10px'  w='48px' h='48px'  pt='10px' pl='10px' alt="" ></Image>
<Box>

<Text   mt='10px' ml='10px' color="gray" fontSize='20px' >Stock trading</Text>
<Text    ml='10px'  fontSize='20px' >Kickstarter</Text>
<Image src='./src/assets/imgs/line3.svg' mt='10px' ml='10px' alt=""></Image>
</Box>
  </Box>
          </Box>
          </Box>
        </Box>
        <Box display='flex'> 
     <Text  color="#ffff" fontSize='20px' >My Income</Text>
    <Image  ml='10px' src='./src/assets/imgs/i.svg' alt="" />
         


        </Box>
<Box display='flex' direction='column' >
 <Image w='250px' h='62px'  src='./src/assets/imgs/MY.svg' alt=""  ></Image>
</Box>
      </Box>
    </Box>

  </Box>
  )
}

export default Superiority