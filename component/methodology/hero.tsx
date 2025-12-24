'use client';

import React from 'react';
import { Box, Container, Title, Text, Group, Button } from '@mantine/core';

export function MethodologyHero() {
  return (
    <Box
      style={{
        background: '#eff6ff',
        borderBottom: '1px solid #dbeafe'
      }}
    >
      <Container size="xl" py="xl">
        <Group align="flex-start" justify="space-between">
          <Box style={{ maxWidth: 720 }}>
            <Title
              order={1}
              style={{ color: '#284361', fontWeight: 800, fontSize: '2.25rem', lineHeight: 1.2 }}
            >
              Our Methodology
            </Title>
            <Text
              style={{
                marginTop: 12,
                color: '#374151',
                fontSize: '16px',
                lineHeight: 1.7
              }}
            >
              Kami membangun pengalaman perjalanan yang konsisten, aman, dan sederhana dengan
              pendekatan iteratif yang berpusat pada pengguna. Fokus kami pada kualitas
              memastikan setiap fitur terintegrasi rapi dari pencarian hingga pembayaran.
            </Text>
            <Group gap="md" mt="lg">
              <Button
                size="md"
                styles={{ root: { backgroundColor: '#284361' } }}
              >
                Lihat Tahapan
              </Button>
              <Button
                size="md"
                variant="outline"
                styles={{ root: { borderColor: '#284361', color: '#284361', backgroundColor: 'white' } }}
              >
                Prinsip Desain
              </Button>
            </Group>
          </Box>
          <Box
            hiddenFrom="md"
            style={{ display: 'none' }}
          />
        </Group>
      </Container>
    </Box>
  );
}
