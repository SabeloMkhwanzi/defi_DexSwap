import React from 'react'

//Chakra-UI import
import { HStack, Button, Menu, MenuButton, MenuList, MenuItem, Container } from '@chakra-ui/react'
import { AiOutlineEllipsis } from "react-icons/ai";

//Components imports

import Connect from './connect';
import Logout from './logout';



const InfoButton = () => {
    return (
      <HStack pl="3" pr="3" paddingTop="3" float="right" bg="gray.800"
       >
      {/* //   <Button
      //     disabled
      //     borderWidth={1}
      //     textColor="white"
      //     bg="gray.900"

      //   >Polygon Test</Button> */}
        

        {/* Authenticate Metamask wallet using Moralis API */}
        <Connect />
        {/* Information Section */}
        <Menu>
          <MenuButton
            bg='gray.600'
            as={Button}
            maxW="12"
            paddingRight="6"
            rightIcon={<AiOutlineEllipsis color="white" size="40px" />}>
                </MenuButton>
                <MenuList bg="gray.600" borderColor="gray.600" >
                    <MenuItem color="black" fontWeight="bold">About</MenuItem>
                    <MenuItem color="black" fontWeight="bold">Docs</MenuItem>
                    <MenuItem color="black" fontWeight="bold">Code</MenuItem>
                    <MenuItem color="black" fontWeight="bold">Twitter</MenuItem>
                    <MenuItem color="black" fontWeight="bold">Github</MenuItem>
                    {/* <MenuItem>Light Theme</MenuItem> */}
                    <MenuItem><Logout /></MenuItem>
                </MenuList>
        </Menu>
      </HStack>
    )
}

export default InfoButton
