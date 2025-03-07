import { Box, Text, Image } from '@chakra-ui/react'
import React from 'react'

const Hero = () => {
  return (
    <>
    <Box ml='134px'  bg='#1C1C1E' w={'100%'} h={'100%'} > 
    <Box display='flex' >
        <Text fontSize='16px' mt='34px'  color='#5E5CE6' fontWeight='700px'>DASHBOARD</Text>
        <Image mt='37px' ml='10px' w='16px' h='16px' src='./src/assets/imgs/arrow.svg' alt="" />
        <Text fontSize='16px' mt='34px' ml='10px' color='gray'  >BITFOREX.COM</Text>
    </Box>

    <Box display='flex' >
        <Image w='45px' h='45px' mt='35px' fontWeight='700' src='./src/assets/imgs/moon.svg' ></Image>
        <Text fontSize='26px' mt='34px' ml='10px' color='gray' >wubin.design</Text>
        <Image  w='45px' h='45px' mt='35px' ml='10px'  src='./src/assets/imgs/plus.svg' ></Image>
    </Box>

<Box display='flex' mt='25px' >
        <Text  color="#ffff" fontSize='20px' >Total Visits</Text>
        <Image mt='9px' ml='10px' w='18px' h='18px'  src='./src/assets/imgs/i.svg' alt="" ></Image>
        <Text mt='9px' ml='590px' color="gray" fontSize='20px' >Provisions Month</Text>
    <Text  ml='10px'  display='flex' fontSize='20px' mt='5px' >March 2020 <Image w='14px' h='14px' mt='10px' ml='5px' src='./src/assets/imgs/calendar.svg' ></Image></Text>
    <Image src='./src/assets/imgs/....svg'  w='40px' h='40px' ml='10px' borderRadius='10px' ></Image>
 </Box>
</Box>
<Box>
<Image ml='154px' src='./src/assets/imgs/hero.svg'  ></Image>
</Box>
<Box  >
    <Box display='flex' ml='134px'  >

<Text  color="#ffff"  fontSize='20px' >Perpetual</Text>
<Image mt='9px' ml='10px' w='18px' h='18px'  src='./src/assets/imgs/i.svg' alt="" ></Image>
<Box ml='378px'  display='flex' >
    <Text  color="#ffff" fontSize='20px' >Active Percentage</Text>
    <Image mt='9px' ml='10px' w='18px' h='18px'  src='./src/assets/imgs/i.svg' alt="" ></Image>
    </Box>
    </Box>
    </Box>
 <Box   display='flex' mt='20px' >
    <Image w='200px' h='200px' ml='134px'   src='./src/assets/imgs/label.svg' ></Image>
    <Box ml='50px' >
        <Box>
            <Text color='gray' fontSize='20px' >Google.com .Inc</Text>
            <Text fontSize='20px' >3,124,213 users</Text>
        </Box>
        <Box mt='28px' >
            <Text color='gray' fontSize='20px' >Recommended flow</Text>
            <Text fontSize='20px' >1,523,151 users</Text>
        </Box>
        <Box mt='28px' >
            <Text color='gray' fontSize='20px' >Other</Text>
            <Text fontSize='20px' >948,213 users</Text>
        </Box>
        
    </Box>
<Box >
    <Box  display='flex' >

<Text fontSize='30px' ml='60px' fontWeight='700' >594</Text>
<Text fontSize='16px' ml='10px' color='gray' mt='10px' >Total</Text>
    </Box>
<Box ml='60px' mt='20px' >
    <Image src='./src/assets/imgs/progres.svg' ></Image>
</Box>
<Box mt='20px' display='flex' >
    <Box> 
         <Box display='flex' >

        <Image ml='60px'  src='./src/assets/imgs/line5.svg' ></Image>
<Text  ml='15px'  color='#EBEBF54D' > Online</Text>
         </Box>
<Text ml='105px' >179 users</Text>
    </Box>


<Box>
    <Box display='flex' >
    <Image ml='60px'  src='./src/assets/imgs/line6.svg' ></Image>
<Text  ml='15px'  color='#EBEBF54D' > Offline</Text>
         </Box>
<Text ml='105px' >394 users</Text>


</Box>
<Box>
</Box>
</Box>
</Box>  


 </Box>
</>



  
  )
}

export default Hero