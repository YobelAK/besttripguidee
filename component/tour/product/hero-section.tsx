"use client";

import React from 'react';
import { Container, Image, Box } from '@mantine/core';

export function TourProductHeroSection() {
  const image = 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1600&q=80&auto=format&fit=crop';
  return (
    <Box bg="white">
      <Container size="xl" py="xl">
        <Box style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 12px 24px rgba(0,0,0,0.08)' }}>
          <Image src={image} alt="Tour Hero" h={380} fit="cover" radius={16} />
        </Box>
      </Container>
    </Box>
  );
}