import React from 'react';
import {
  ChakraProvider,
  Flex,
  VStack,
  Image,
  Text,
  Link,
  HStack,
  Spacer,
  Divider
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import customTheme from './theme/index';
import Card from './components/Card';
import nft from './images/image-equilibrium.jpg';
import clock from './images/icon-clock.svg';
import ethereum from './images/icon-ethereum.svg'
import avatar from './images/image-avatar.png'
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
          <VStack align="left">
            <Image src={nft} alt="nft" />
            
            <Text>Equilibrium #3429</Text>
            <Text color={'blue.300'}>
              Our Equilibrium collections promotes calm and balance.
            </Text>
            <HStack>
              <Image src={ethereum} alt="ethereum" />
              <Text color={'primary.200'}>0.041ETH</Text>
              <Spacer/>
              <Image src={clock} alt="clock" />
              <Text color={'primary.100'}>3 days left.</Text>
            </HStack>
            <Divider />
            <HStack>
              <Image src={avatar} alt='avatar'  boxSize='50px' />
              <Text color={'primary.100'}>Creation of <Link color={'white'}>Jules Wyren</Link></Text>
            </HStack>
          </VStack>
        </Card>
        <VStack>
          <Link href="https://www.frontendmentor.io?ref=challenge" isExternal>
            Challenge by Frontend Mentor <ExternalLinkIcon mx="2px" />
          </Link>
          <Link href="https://www.frontendmentor.io/profile/Dmani871">
            Dmani Barnett
          </Link>
        </VStack>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
