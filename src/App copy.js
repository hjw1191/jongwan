// src/App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/FourthSection';
import ScrollWheelHandler from 'react-scroll-wheel-handler';
import { Box } from '@mui/material';

const App = () => {
  const [section, setSection] = useState(0);
  const sections = [<FirstSection />, <SecondSection />, <ThirdSection />, <FourthSection />];

  const handleScroll = (direction) => {
    if (direction === 'down' && section < sections.length - 1) {
      setSection((prevSection) => prevSection + 1);
    } else if (direction === 'up' && section > 0) {
      setSection((prevSection) => prevSection - 1);
    }
  };

  return (
    <ScrollWheelHandler
      upHandler={() => handleScroll('up')}
      downHandler={() => handleScroll('down')}
      style={{ height: '100vh', overflow: 'hidden' }}
    >
      <Sidebar />
      <Box sx={{ marginLeft: '150px', height: '100vh' }}>
        {sections[section]}
      </Box>
    </ScrollWheelHandler>
  );
};

export default App;
