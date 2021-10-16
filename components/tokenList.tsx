import React from 'react'
import { Image, Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuIcon, MenuCommand, MenuDivider, Button } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons';


const tokenList = props => {
    return (
        <div>
            <Menu>
          <MenuButton
            borderRadius={10}
            as={Button}
            rightIcon={<ChevronDownIcon />}
            bgColor="gray.900"
            borderWidth={1}
            borderColor="purple.500"
          >
              DEXT Token
            </MenuButton>
            <MenuList>
              <MenuItem minH="50px">
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://ethereum.org/static/a183661dd70e0e5c70689a0ec95ef0ba/31987/eth-diamond-purple.png"
                  alt="Eth"
                  mr="12px"
                />
                <span>Fluffybuns the Destroyer</span>
              </MenuItem>
              <MenuItem minH="40px">
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://ethereum.org/static/a183661dd70e0e5c70689a0ec95ef0ba/31987/eth-diamond-purple.png"
                  alt="Eth"
                  mr="12px"
                />
                <span>Simon the pensive</span>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
    )
}

tokenList.propTypes = {

}

export default tokenList
