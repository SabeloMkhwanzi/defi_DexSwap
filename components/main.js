import React, { Component } from 'react';
//Chakra-UI IMPORTS
import { Box, Container, Button, Stack, HStack} from '@chakra-ui/react';
// Components import
import BuyForm from './BuyForm';
import SellForm from './SellForm';


class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentForm:'buy'
    }
  }  

  render() {
    let content
    if (this.state.currentForm === 'buy') {
      content = <BuyForm
           ethBalance={this.props.ethBalance}
           tokenBalance={this.props.tokenBalance}
           buyTokens={this.props.buyTokens}
      />
    } else {
      content = <SellForm
           ethBalance={this.props.ethBalance}
           tokenBalance={this.props.tokenBalance}
           sellTokens={this.props.sellTokens}
      />
    }
      
    return (
      <div>
        {/* Buy and Sell Buttons Section */}
       <Stack paddingBottom={10}>
          <Container
              borderWidth={1}
              borderRadius={20}
              paddingBlock={2}
             bgColor='gray.900'
              p={4}
              borderColor="purple.500"
               ><HStack spacing={310}> 
              <Button
                borderWidth={1}
                borderColor="green.500"
                textColor="green.500"
                bgColor='gray.700'
                _hover={{
                  bg: 'green.900',
                }}
                onClick={(event) => {
                this.setState({ currentForm: 'buy' })
                  console.log("button click buy")
                }}
              >Buy</Button>
              <Button
                borderWidth={1}
                borderColor="red.500"
                textColor="red.500"
                bgColor='gray.700'
                _hover={{
                  bg: 'red.900',
                }}
                onClick={(event) => {
                this.setState({ currentForm: 'sell' })
                  console.log("button click sell")
                }}
              >Sell</Button>
            </HStack>
         </Container>       
        </Stack>
   {/* DEX Swapping Platform as Main Section  */}     
        <Box id="content"
          rounded={'lg'}
          borderRadius={20}
          bg={('white', 'gray.900')}
          boxShadow={'lg'}
          p={8}>
     {/* DEX Swapping Platform as Main Section  */}     
          {content}
      </Box>
     </div>  
     );
  }
}

export default Main;