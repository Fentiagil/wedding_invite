import React from 'react';
import { Box, Flex, Heading, Text, Button, Link } from '@chakra-ui/react';
import './App.css';

function WelcomeSection() {
  return (
    <Flex className='coverFlex' backgroundImage="./assets/foto2.jpeg">
        
        {/* Bagian 1 - 2/3 */}
        <Box className='cover1' backgroundImage="./assets/foto2.jpeg">
            <Heading fontSize="xl" mb={6} className="animated-text">WEDDING ANNOUNCEMENT</Heading>
            <Text as='b' fontSize='6xl' mb={4} className="animated-text title">TIFFANY & JARED</Text><br /><br />
            <Text fontSize='md' as='i' className="animated-text">
            "Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin mencintaimu dengan sederhana; dengan isyarat yang tak sempat disampaikan awan kepada hujan yang menjadikannya tiada."
            </Text><br />
            <Text fontSize='md' as='i' className="animated-text">— Sapardi Djoko Damono</Text><br />
        </Box>
      
        {/* Bagian 2 - 1/3 */}
        <Box className='cover2' backgroundImage="./assets/foto3.jpeg" overflowY="auto">
            <Heading fontSize="xl" mb={4} className="animated-text">WEDDING ANNOUNCEMENT</Heading>
            <Text as='i' fontSize='2xl' mb={4} className="animated-text name">TIFFANY</Text><br />
            <Text as='i' fontSize='2xl' mb={4} className="animated-text name">&</Text><br />
            <Text as='i' fontSize='2xl' mb={4} className="animated-text name">JARED</Text><br /><br />
            <Text as='i' fontSize='2xl' mb={6} className="animated-text">#TImetoshaRE</Text><br /><br /><br />
            <Link href="/welcome">
                <Button colorScheme='gray' className="animated-text">Open</Button>
            </Link>
        </Box>
        
    </Flex>
  );
}

export default WelcomeSection;
