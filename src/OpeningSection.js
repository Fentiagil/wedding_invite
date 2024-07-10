import React from 'react';
import { Box, Heading, Text, Button} from '@chakra-ui/react';
import './App.css';

function OpeningSection({ handleButtonClick }) {
  return (
     <>
        {/* Bagian 2*/}
        <Box className='cover2' backgroundImage="./assets/foto3.jpeg" flex={{ base: '1', md: '1' }}>
            <Heading fontSize="xl" className="animated-text">WEDDING ANNOUNCEMENT</Heading>
            <Text fontSize='2xl' className="animated-text name">TIFFANY & JARED</Text>
            <Text as='i' fontSize='2xl' className="animated-text">#TImetoshaRE</Text><br /><br />
            <Button colorScheme='gray' onClick={handleButtonClick} className="animated-btn">Open</Button>
        </Box>
    </>
  );
}

export default OpeningSection;
