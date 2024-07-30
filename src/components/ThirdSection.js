// src/components/ThirdSection.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const ThirdSection = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ml: 30, // Sidebar width compensation
      }}
    >
      <Typography variant="h4">섹션 3 내용</Typography>
    </Box>
  );
};

export default ThirdSection;
