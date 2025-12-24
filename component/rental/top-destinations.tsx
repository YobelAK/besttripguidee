import React from 'react';
import { Container, Title, SimpleGrid, Box, Image, Text, Overlay } from '@mantine/core';

const destinations = [
  { name: 'Seminyak', image: 'https://www.lavacarrental.is/media/1/car-rental-in-iceland-11.jpg' },
  { name: 'Ubud', image: 'https://www.lavacarrental.is/media/1/car-rental-in-iceland-11.jpg' },
  { name: 'Canggu', image: 'https://www.lavacarrental.is/media/1/car-rental-in-iceland-11.jpg' },
  { name: 'Sanur', image: 'https://www.lavacarrental.is/media/1/car-rental-in-iceland-11.jpg' }
];

export function TopDestinations() {
  return (
    <Container size="xl" py="xl">
      <Title order={2} size="3xl" style={{ fontWeight: 700, marginBottom: '24px' }}>
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
              <Overlay gradient="linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.6) 100%)" style={{ position: 'absolute', inset: 0 }} />
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
