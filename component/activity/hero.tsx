import React from 'react';
import { Box, Container, Title, Text, Stack } from '@mantine/core';

export function Hero() {
  return (
    <Box
      component="section"
      style={{
        position: 'relative',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        backgroundImage: 'url(https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Container 
        size="lg" 
        style={{ 
          position: 'relative', 
          zIndex: 10, 
          textAlign: 'center',
          maxWidth: '896px'
        }}
      >
        <Stack gap="md" align="center">
          <Title 
            order={1}
            size="3rem"
            fw={700}
            style={{ 
              marginBottom: '1rem',
              fontSize: 'clamp(2.25rem, 4vw, 3rem)'
            }}
          >
            Discover the Best Bali Activities
          </Title>
          <Text 
            size="xl"
            style={{ 
              color: '#f3f4f6',
              fontSize: 'clamp(1.125rem, 2vw, 1.25rem)'
            }}
          >
            From adrenaline adventures to cultural experiences — explore with{' '}
            <Text component="span" fs="italic">name</Text>.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

