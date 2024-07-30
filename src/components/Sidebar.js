// src/components/Sidebar.js
import React from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 150,
        backgroundColor: '#2777a2a6',
        color: 'white',
        height: '100vh',
        position: 'fixed',
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
      }}
    >
      
    
      <List sx={{ mt: 2, width: '100%' }}>
        {['profile', 'project', 'LinkedIn', 'Tistory Blog'].map((text, index) => (
          <ListItem button key={index} sx={{ justifyContent: 'center' }}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Box sx={{ mt: 'auto', mb: 2, textAlign: 'center'  ,fontSize: '0.8rem'}}>
        <div>hjw1191@naver.com</div>
        <div>마지막 업데이트: 2024/07/28</div>
      </Box>
    </Box>
  );
};

export default Sidebar;
