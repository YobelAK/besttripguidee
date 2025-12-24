import React from 'react';
import { Container, Title, SimpleGrid, Box, Image, Text, Overlay } from '@mantine/core';

export function TopDestinations() {
  const destinations = [
    {
      name: 'Broken Beach',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800'
    },
    {
      name: 'Kelingking Cliff',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
    },
    {
      name: 'Diamond Beach',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800'
    },
    {
      name: "Angel's Billabong",
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800'
    }
  ];

  return (
    <Container size="xl" style={{ paddingTop: 64, paddingBottom: 64 }}>
      <Title 
        order={2} 
        size="xl" 
        style={{ 
          fontWeight: 700, 
          color: '#111827', 
          marginBottom: 32 
        }}
      >
        Top Destinations You Can Visit
      </Title>
      <SimpleGrid
        cols={{ base: 1, md: 2, lg: 4 }}
        spacing={24}
      >
        {destinations.map((dest) => (
          <Box
            key={dest.name}
            style={{
              position: 'relative',
              height: 256,
              borderRadius: 12,
              overflow: 'hidden',
              cursor: 'pointer'
            }}
          >
              <Image
                src={dest.image}
                alt={dest.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
                styles={{
                  root: {
                    '&:hover img': {
                      transform: 'scale(1.1)'
                    }
                  }
                }}
              />
              <Overlay
                gradient="linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.6) 100%)"
                style={{ position: 'absolute', inset: 0 }}
              />
              <Box style={{ position: 'absolute', bottom: 16, left: 16 }}>
                <Text size="xl" style={{ fontWeight: 700, color: 'white' }}>
                  {dest.name}
                </Text>
              </Box>
            </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}