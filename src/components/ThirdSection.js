// src/components/ThirdSection.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';

const ThirdSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 노드 서버의 게시글 API 호출
    axios.get('http://localhost:8080/api/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the posts!', error);
      });
  }, []);

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        ml: 0, // Sidebar width compensation
        mt: 0,  // Top margin 조정
        px: 3,  // Padding 추가
        gap: 3  // 카드 간격 조정
      }}
    >
      <Box sx={{ display: 'flex', gap: 3 }}>
        {posts.map(post => (
          <Card key={post._id} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={post.imageUrl}
              alt={post.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.content}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ThirdSection;
