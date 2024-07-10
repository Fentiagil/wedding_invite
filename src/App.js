import React, { useState, useRef, useEffect } from 'react';
import { ChakraProvider, Box, Flex, Heading, Text, Button, List, ListItem} from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { MdMusicOff, MdMusicNote, MdMenu, MdClose } from "react-icons/md";
import Welcome from './WelcomeSection.js';
import Opening from './OpeningSection.js';
import './App.css';

function App() {
  const [isWelcome, setIsWelcome] = useState(false);
  const [isMusicVisible, setIsMusicVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const handleButtonClick = () => {
    setIsWelcome(true);
    setIsMusicVisible(true);
  };

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <ChakraProvider>
      <div className="App">
        <BrowserRouter>
          <Flex className='coverFlex' backgroundImage="./assets/foto2.jpeg">
            <audio ref={audioRef} src="./assets/music.mp3" autoPlay loop />

            {/* Bagian 1 */}
            <Box className='cover1' backgroundImage="./assets/foto2.jpeg" flex={{ base: '0', md: '2' }}>
              <Heading fontSize="xl" mb={6} className="animated-text">WEDDING ANNOUNCEMENT</Heading>
              <Text as='b' fontSize='6xl' mb={4} className="animated-text title">TIFFANY & </Text>
              <Text as='b' display='block' mb={2} className="animated-text title">JARED</Text>
              <Text fontSize='md' as='i' className="animated-text">
                "Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin mencintaimu dengan sederhana; dengan isyarat yang tak sempat disampaikan awan kepada hujan yang menjadikannya tiada."
              </Text><br />
              <Text fontSize='md' as='i' className="animated-text">— Sapardi Djoko Damono</Text><br />
              {isMusicVisible && (
                <>
                  <Button isRound={true} onClick={toggleSidebar} position="absolute" bottom="10px" left="10px" colorScheme='gray'>
                    {isSidebarVisible ? <MdClose /> : <MdMenu />}
                  </Button>

                  <Button isRound={true} onClick={toggleMusic} position="absolute" bottom="10px" left="60px" colorScheme='gray'>
                    {isPlaying ? <MdMusicNote /> : <MdMusicOff />}
                  </Button>
                  
                </>
              )}
            </Box>

            {/* Sidebar */}
            {isSidebarVisible && (
              <Box className="sidebar" position="absolute" top="0" right="0" width="40%" backgroundColor="rgba(0, 0, 0, 1)" color="white">
              <Text fontSize="3xl" as='i' className="sidebar-title">#TImetoshaRE</Text><br/>
              <List spacing={3} className="sidebar-menu">
                <ListItem>
                  BRIDE & GROOM
                </ListItem><hr/>
                <ListItem>
                  LIVE STREAMING
                </ListItem><hr/>
                <ListItem>
                  WEDDING GIFT
                </ListItem><hr/>
              </List><br/><br/>
              <Box mt="auto" pt={4} textAlign="center">
                <Text fontSize="sm">Created with Love by Invitato</Text>
                <Text fontSize="sm">© 2024 Tiffany & Jared. All Rights Reserved</Text>
              </Box>
            </Box>
            )}

            {/* Konten Dinamis */}
            {isWelcome ? (
              <Welcome />
            ) : (
              <Opening handleButtonClick={handleButtonClick} />
            )}
          </Flex>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
