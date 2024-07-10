import React, { useState, useEffect } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import './App.css';

function WelcomeSection() {
  const [backgroundImage, setBackgroundImage] = useState("./assets/foto3.jpeg");
  const images = ["./assets/foto8.jpeg", "./assets/foto4.jpeg", "./assets/foto5.jpeg", "./assets/foto6.jpeg", "./assets/foto7.jpeg"]; // Tambahkan gambar lainnya sesuai kebutuhan

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundImage(prevImage => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 5000); // Ganti gambar setiap 5 detik

    return () => clearInterval(intervalId); // Bersihkan interval saat komponen di-unmount
  }, []);

  return (
    <>
      {/* Bagian Welcome*/}
      <Box 
        className='cover-welcome' 
        backgroundImage={`url(${backgroundImage})`} 
        flex={{ base: '1', md: '1' }} 
        overflowY="auto"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Heading fontSize="xl" className="animated-text">WEDDING ANNOUNCEMENT</Heading>
        <Text fontSize='2xl' className="animated-text name">TIFFANY & JARED</Text>
        <Text as='i' fontSize='2xl' className="animated-text">#TImetoshaRE</Text><br /><br />
      </Box>
    </>
  );
}

export default WelcomeSection;
