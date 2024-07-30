// src/components/FirstSection.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const FirstSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        p: 4,
        color: 'white',
        overflow: 'hidden',
        backgroundImage: 'url(image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // 배경색과 투명도 설정
        backgroundBlendMode: 'overlay', // 배경 이미지와 배경색을 섞음
      }}
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <Typography variant="h3" sx={{ fontSize: '2.5rem', zIndex: 1 }}>
          기록과 공유를 좋아하는
        </Typography>
      </motion.div>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <Typography variant="h2" sx={{ fontSize: '2.3rem', mb: 2, position: 'relative' }}>
          황종완
          <Box
            component="span"
            sx={{
              display: 'block',
              height: '4px',
              width: '50%',
              backgroundColor: 'yellow',
              position: 'absolute',
              bottom: -6, // 텍스트 바로 아래에 밑줄을 추가
              left: 0,
            }}
          />
          입니다
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
        style={{ zIndex: 1 }}
      >
        <Typography variant="h6" sx={{ fontSize: '1.2rem' }}>
          프론트엔드 개발자를 희망하고 있습니다.
        </Typography>
        <Typography variant="h6" sx={{ fontSize: '1.2rem' }}>
          배운 모든 것을 기록하고 공유하는 것을 좋아합니다.
        </Typography>
        <Typography variant="h6" sx={{ fontSize: '1.2rem' }}>
          공유의 중요성을 잘 알기에 항상 새기고 실천하려고 노력합니다.
        </Typography>
      </motion.div>
    </Box>
  );
};

export default FirstSection;
