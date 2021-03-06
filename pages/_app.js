//import Home from '.';
import { Box } from '@chakra-ui/layout';
import Footer from '../components/Footer.tsx';
import { MoralisProvider } from "react-moralis";
import { ChakraProvider } from "@chakra-ui/react"
import Navbar from '../components/Navbar.tsx';
import InfoButton from '../components/InfoButton.tsx';


const moralisAppId = "1qOKh8LSgGspP20313jKLE01RVl73CkjwJE9Jf05";
const moralisServerURL = "https://2ulw7srlr1ds.grandmoralis.com:2053/server";

function MyApp({ Component, pageProps }) {
  return (
    
  <MoralisProvider appId={moralisAppId} serverUrl={moralisServerURL}>
      <ChakraProvider>
         <Box bg="gray.800" >
          <InfoButton /><Navbar />
        <Component {...pageProps} />
       <Footer />
         </Box> 
    </ChakraProvider>
  </MoralisProvider>
  )
}

export default MyApp
