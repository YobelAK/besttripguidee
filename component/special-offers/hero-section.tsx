import React from 'react';
import { Box, Container, Title, Text, Stack } from '@mantine/core';
import { IconGift } from '@tabler/icons-react';

export function HeroSection() {
  return (
    <Box style={{ width: '100%', padding: '48px 32px' }}>
      <Container size="xl">
        <Box
          style={{
            background: 'linear-gradient(to right, #284361, #1a2c3d)',
            borderRadius: 24,
            padding: '64px 48px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Stack gap={16} style={{ position: 'relative', zIndex: 10, maxWidth: '66.666667%' }}>
            <Title 
              order={1}
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: 'white',
                lineHeight: 1.1
              }}
            >
              Special Offers & Seasonal Deals
            </Title>
            <Text 
              size="lg"
              style={{
                color: '#d1d5db',
                maxWidth: '512px'
              }}
            >
              Enjoy exclusive discounts for your Bali adventure. Limited-time
              offers available!
            </Text>
          </Stack>
          <Box
            style={{
              position: 'absolute',
              right: 48,
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          >
            <Box
              style={{
                width: 80,
                height: 80,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(4px)'
              }}
            >
              <IconGift size={40} style={{ color: 'white' }} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}