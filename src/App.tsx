import React from 'react'
import { Box } from "@chakra-ui/react"
import Header from "@/components/Header"
import Superiority from "@/components/Superiority"
import Hero from "@/components/Hero"
const App: React.FC = () => {
  return (
  <Box  bg='#1C1C1E' w={'100%'} h={'100%'} >
    <Header />  
    <Superiority />
<Hero />
  </Box>
  )
}

export default App