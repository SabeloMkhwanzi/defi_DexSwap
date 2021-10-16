import React, { Component } from 'react';

//Chakra-UI IMPORTS
import { Stack, Image, Flex, Container, HStack, Box, NumberInput, Input, Button, Text, useColorModeValue,} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

class BuyForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      output:'0.0'
    }
  }  

  render() {

      return (    
        <form onSubmit={(event) => {
            event.preventDefault()
            let etherAmount
            etherAmount = this.input.value.toString()
            etherAmount = window.web3.utils.toWei(etherAmount, 'Ether')
            this.props.buyTokens(etherAmount)
         }} >   
       
          <Stack spacing={1}>
            {/* TokenList and PriceList Section 1 */}
            <Container
              borderWidth={1}
              borderRadius={20}
              paddingBlock={2}
              bgColor='gray.800'
              _hover={{bg:'gray.700'}}
            >           
              <HStack spacing={20} >
                {/* TokenList selection Section 1 */}
                <Container
                  borderWidth={1}
                  borderRadius={20}
                  borderColor="gray.600"
                  paddingBlock={1}
                  height={12}
                  width="13rem"
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                <Flex>
                    <Image
                      boxSize="2rem"
                      borderRadius="full"
                      src="https://ethereum.org/static/655aaefb744ae2f9f818095a436d38b5/31987/eth-diamond-purple-purple.png"
                      alt="Eth"
                      mr="2px"
                      />                     
                    <Box paddingTop="2" ml="1">
                      <Text
                        fontSize="sm"
                        fontWeight="bold">
                        ETH
                        </Text>
                    </Box>
                    </Flex>
                </Container>

                {/* TokenList input Section 1 */}
            
                <NumberInput
                  borderColor="gray.700"
                  maxW="140px"
                  mr="2rem"
                  >
                  <Input
                     type="number"
                      placeholder="0.0"
                      onChange={(event) => {
                       const etherAmount = this.input.value.toString()
                       this.setState({
                         output: etherAmount * 100
                       })
                    }}
                    ref={(input) =>{this.input = input}}
                  />
                  <Text fontSize='small' letterSpacing={1} as="samp">Bal:{window.web3.utils.fromWei(this.props.ethBalance, 'Ether')}</Text>
            </NumberInput>                 
            </HStack>
            </Container>

                          
            {/* TokenList and PriceList Section 2 DexSwap */}         
            <Container
              borderWidth={1}
              borderRadius={20}
              paddingBlock={4}
              bgColor='gray.800'
              _hover={{bg:'gray.700'}}
            >
              <HStack spacing={20} >
                {/* TokenList selection Section 2 */}
                <Container
                  borderWidth={1}
                  borderRadius={20}
                  borderColor="gray.600"
                  paddingBlock={1}
                  height={12}
                  width="14rem"
                  as={Button}
                >
                <Flex>
                    <Image
                      boxSize="2rem"
                      borderRadius="full"
                      src="https://png.pngtree.com/png-clipart/20210509/original/pngtree-dogecoin-virtual-cryptocurrency-vector-png-image_6275776.jpg"
                      alt="Dext"
                      mr="2px"
                      />                     
                    <Box paddingTop="2" ml="1">
                      <Text
                        fontSize="sm"
                        fontWeight="bold">
                        DEXS 
                        </Text>
                    </Box>
                    </Flex>
                </Container>

                {/* TokenList Output Section 2 */}
                <NumberInput
                  borderColor="gray.700"
                  maxW="200px"
                  mr="2rem"
                >
                  <Input
                    type="number"
                    placeholder="0.0"
                    value={this.state.output}
                    disabled
                  />
                  <Text fontSize="small" as="samp" letterSpacing={1}>Balance:{window.web3.utils.fromWei(this.props.tokenBalance, 'Ether')}</Text>      
            </NumberInput>          
            </HStack>
            </Container>






            {/* Price Rate comparison Section */}
            <Stack spacing={3}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Text as="samp" fontSize="small"  letterSpacing={0.5}>Exchange Rate</Text>
                <Text as="samp" fontSize="small" color={'red.400'}>1 ETH = 100 DEXS</Text>             
              </Stack>
              
              {/* Dex Swapping Button Section*/}
                <Button
                type="submit"  
                bg={'purple.500'}
                color={'white'}
                _hover={{
                  bg: 'purple.800',
                }}
                borderRadius={20}
                height={65}
                textColor="purple.100"
                fontWeight="bold"
              >Swap
              </Button>                            
            </Stack>          
          </Stack>
        </form>          
     );
  }
}

export default BuyForm;