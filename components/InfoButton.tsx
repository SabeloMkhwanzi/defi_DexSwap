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
            bg='gray.900'
            as={Button}
            maxW="12"
            paddingRight="6"
            rightIcon={<AiOutlineEllipsis size="40px" />}>
                </MenuButton>
                <MenuList>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Docs</MenuItem>
                    <MenuItem>Code</MenuItem>
                    <MenuItem>Twitter</MenuItem>
                    <MenuItem>Github</MenuItem>
                    {/* <MenuItem>Light Theme</MenuItem> */}
                    <MenuItem><Logout /></MenuItem>
                </MenuList>
        </Menu>
      </HStack>
    )
}

export default InfoButton
