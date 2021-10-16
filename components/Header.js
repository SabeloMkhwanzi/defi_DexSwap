import React, { Component } from 'react'
import { Stack, Heading, Text } from '@chakra-ui/layout'

class Header extends Component {
   constructor(props) {
    super(props)
    this.state = {
      account: '',
      ethBalance: '0'      
    }
  }

    render() {
    return (     
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>DexSwap</Heading>  
          <Text as="samp" color={'gray.400'} letterSpacing={1}
          >{this.props.account}
        </Text>
         <Text as="samp" color={'gray.400'} letterSpacing={1}
          >Wallet Balance:{this.props.ethBalance}</Text>
        </Stack>
        )
    }    
}
export default Header
