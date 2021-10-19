import React from 'react'
//Chakra-UI import
import { Stack, Container, HStack, Button } from '@chakra-ui/react';

const Navbar = () => {
    return (
      <Stack paddingTop="3" pl="4"  float="left" bg='gray.800'>
          <Container
              maxW="200"  
              borderWidth={1}
              borderRadius={20}
              paddingBlock={2}
          bgColor='gray.900'
          borderColor="purple.500"
          >
          <HStack bg='gray.800' spacing={2}> 
          <Button isActive maxW="20" >Swap</Button>
          <Button maxW="20">Charts</Button>
          </HStack>
      </Container>       
      </Stack>
        
    )
}

export default Navbar
