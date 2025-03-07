"use client"
import { Heading, Text, Image, Box } from '@chakra-ui/react'
import React from 'react'
import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react"
import { useColorMode } from "@/components/ui/color-mode"
import { LuMoon, LuSun } from "react-icons/lu"



const Header = () => {
    const { toggleColorMode, colorMode } = useColorMode()
  return (
    <>
<Heading display='flex'  position="fixed"  fontSize='16px' gap='10px' p={4} borderBottom="3px solid black" background=' #1C1C1E  ' >
        <Box display="flex"></Box>
        
      <Box position="fixed" width="100px" top='0' left='0' height="100%" bg="#1C1C1E" borderRight="3px solid black" /> {/* Sidebar */}
      <Box position="fixed" direction={"column"}>
<Image ml='20px' src="./src/assets/imgs/menu.svg" alt="" />
<Image ml='11px' mt='45px' src="./src/assets/imgs/line2.svg" alt=""></Image>
<Image ml='11px' mt='26px'  src="./src/assets/imgs/B.svg" alt=""></Image>
<Image ml='11px' mt='26px'  src="./src/assets/imgs/blue.svg" alt=""></Image>
<Image ml='11px' mt='26px'  src="./src/assets/imgs/red.svg" alt=""></Image>
<Image ml='5px' mt='26px'  src="./src/assets/imgs/ferame.svg" alt=""></Image>
<Image ml='5px' mt='100px'  src="./src/assets/imgs/line2.svg" alt=""></Image>
<Image ml='5px' mt='26px'  src="./src/assets/imgs/chat.svg" alt=""></Image>
    </Box>

<Text mt='6px' ml='90px' >Dashboard</Text>
<Text mt='6px' color='#EBEBF599'  >Advanced Quarry</Text>
<Text mt='6px' color='#EBEBF599'  >Events</Text>
<Image mt='6px' ml='20px' src='./src/assets/imgs/line.svg' alt="" ></Image>
<img src="./src/assets/imgs/search.svg" alt="" />

<Box display='flex'>
<Text mt='6px' ml='860px'>Bessie Cooper</Text>
<Image ml='20px' src='./src/assets/imgs/Cooper.svg' alt='' ></Image>
<ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton onClick={toggleColorMode}  mt='6px' ml='5px' variant="outline" size="sm">
        {colorMode === "light" ? <LuSun /> : <LuMoon />}
      </IconButton>
    </ClientOnly>

</Box>
    </Heading>
    </>
  )
}

export default Header