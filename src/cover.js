import React from 'react';
import { Box, Flex, Heading, Text, Button, Link } from '@chakra-ui/react';
import './App.css';

function Cover() {
  return (
    <Flex className='coverFlex' backgroundImage="./assets/foto2.jpeg">
        
        {/* Bagian 1 */}
        <Box className='cover1' backgroundImage="./assets/foto2.jpeg" flex={{ base: '0', md: '2' }}>
            <Heading fontSize="xl" mb={6} className="animated-text">WEDDING ANNOUNCEMENT</Heading>
            <Text as='b' fontSize='6xl' mb={4} className="animated-text title">TIFFANY & </Text>
            <Text as='b' display='block' mb={2} className="animated-text title">JARED</Text>
            <Text fontSize='md' as='i' className="animated-text">
            "Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin mencintaimu dengan sederhana; dengan isyarat yang tak sempat disampaikan awan kepada hujan yang menjadikannya tiada."
            </Text><br />
            <Text fontSize='md' as='i' className="animated-text">— Sapardi Djoko Damono</Text><br />
        </Box>
      
        {/* Bagian 2*/}
        <Box className='cover2' backgroundImage="./assets/foto3.jpeg" flex={{ base: '1', md: '1' }}>
            <Heading fontSize="xl" className="animated-text">WEDDING ANNOUNCEMENT</Heading>
            <Text fontSize='2xl' className="animated-text name">TIFFANY & JARED</Text>
            <Text as='i' fontSize='2xl' className="animated-text">#TImetoshaRE</Text><br /><br />
            <Link href="/welcome">
                <Button colorScheme='gray' className="animated-btn">Open</Button>
            </Link>
        </Box>
        
    </Flex>
  );
}

export default Cover;
