import React from 'react';
import { ChakraProvider, Flex, VStack,Image} from '@chakra-ui/react';
import customTheme from './theme/index';
import Card from './components/Card';
import nft from './images/image-equilibrium.jpg'
function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Flex
        flexDirection="column"
        align="center"
        justifyContent="center"
        height="100vh"
        width="100vw"
      >
        <Card>
          <VStack>
            <Image src={nft} alt='nft'></Image>
          </VStack>
        </Card>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
