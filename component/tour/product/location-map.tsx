"use client";

import React from 'react';
import { Card, Stack, Title, Box, Text } from '@mantine/core';

export function TourLocationMap() {
  // To avoid SSR leaflets complexity, we use an embed map placeholder.
  const src =
    'https://www.openstreetmap.org/export/embed.html?bbox=115.210%2C-8.840%2C115.260%2C-8.780&layer=mapnik&marker=-8.81%2C115.235';

  return (
    <Card shadow="sm" radius="lg" padding="xl" withBorder>
      <Stack gap="md">
        <Title order={3}>Location</Title>
        <Box style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid #e9ecef' }}>
          <Box component="iframe" src={src} style={{ width: '100%', height: 320, border: '0' }} title="Tour location map" />
        </Box>
        <Text c="dimmed">Bali, Indonesia — convenient pickup available</Text>
      </Stack>
    </Card>
  );
}