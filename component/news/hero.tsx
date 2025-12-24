'use client';

import React from 'react';
import { Box, Container, Title, Text } from '@mantine/core';

export function NewsHero() {
  return (
    <Box
      style={{
        background: '#eff6ff',
        borderBottom: '1px solid #dbeafe'
      }}
    >
      <Container size="xl" py="xl">
        <Title
          order={1}
          style={{ color: '#284361', fontWeight: 800, fontSize: '2rem', lineHeight: 1.2 }}
        >
          News & Updates
        </Title>
        <Text
          style={{
            marginTop: 8,
            color: '#374151',
            fontSize: '15px'
          }}
        >
          Informasi terbaru seputar fitur, layanan, dan mitra perjalanan kami.
        </Text>
      </Container>
    </Box>
  );
}
