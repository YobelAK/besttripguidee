import React from 'react';
import { Container, Title, SimpleGrid, Box, Image, Text, Overlay } from '@mantine/core';

const destinations = [
  {
    name: 'Broken Beach',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800'
  },
  {
    name: 'Kelingking Cliff',
    image: 'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800'
  },
  {
    name: 'Diamond Beach',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800'
  },
  {
    name: "Angel's Billabong",
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800'
  }
];

export function TopDestinations() {
  return (
    <Container size="xl" py="xl">
      <Title order={2} size="3xl" mb="xl" style={{ fontWeight: 700 }}>
        Top Destinations You Can Visit
      </Title>
      <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} spacing="xl">
        {destinations.map((dest, index) => (
          <div key={index}>
            <Box
              style={{
                position: 'relative',
                height: 256,
                borderRadius: 12,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <Image
                src={dest.image}
                alt={dest.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 300ms ease'
                }}
              />
              <Overlay
                gradient="linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.6) 100%)"
                style={{ position: 'absolute', inset: 0 }}
              />
              <Box
                style={{
                  position: 'absolute',
                  bottom: 16,
                  left: 16,
                  color: 'white'
                }}
              >
                <Text size="xl" style={{ fontWeight: 600 }}>{dest.name}</Text>
              </Box>
            </Box>
          </div>
        ))}
      </SimpleGrid>
    </Container>
  );
}