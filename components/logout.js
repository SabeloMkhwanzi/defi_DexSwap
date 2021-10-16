import React from "react";
import { useMoralis } from "react-moralis";
import { Button } from "@chakra-ui/react";

// Loging-out function from user wallet with the button using Api 
const Logout = () => {
  const { logout, isAuthenticating } = useMoralis();

  return (
      <Button
          borderWidth={1}
          borderColor="purple.500"
          textColor="purple.500"
          bgColor='gray.900'
          hover={{
          bg: 'purple.100',}}
          isLoading={isAuthenticating}
          onClick={() => logout()}
          disabled={isAuthenticating}>
      Logout
    </Button>
  );
};

export default Logout;