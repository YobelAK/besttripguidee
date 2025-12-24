import React from 'react';
import { Box, Container, Title, Text, Stack } from '@mantine/core';

export function Hero() {
  return (
    <Box
      style={{
        position: 'relative',
        height: 400,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        backgroundImage: 'url(https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600)',
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
          maxWidth: 896
        }}
      >
        <Stack gap="md" align="center">
          <Title
            order={1}
            size="4xl"
            style={{
              fontWeight: 700,
              fontSize: 'clamp(2.25rem, 5vw, 3rem)',
              lineHeight: 1.1
            }}
          >
            Discover the Best Bali & Nusa Penida Tours
          </Title>
          <Text
            size="lg"
            style={{
              fontSize: 'clamp(1.125rem, 3vw, 1.25rem)',
              color: '#e5e7eb'
            }}
          >
            From day trips to multi-day adventures — explore paradise with{' '}
            <Text component="span" style={{ fontStyle: 'italic' }}>name</Text>.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}