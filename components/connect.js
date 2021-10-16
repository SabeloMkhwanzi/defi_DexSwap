import React from "react";
import { useMoralis } from "react-moralis";
import { Button } from "@chakra-ui/react";

// Connect Wallet function with the button using Api 
const Connect = () => {
    const { authenticate, isAuthenticated} = useMoralis();
    return (
        <Button
                borderWidth={1}
                borderColor="purple.500"
                textColor="purple.500"
                bgColor='gray.900'
                _hover={{
                bg: 'purple.100',
                }}
                onClick={() => authenticate()}
                >connect wallet
            </Button>
        )
}

export default Connect
