'use client';

import React from 'react';
import { Container, Title, SimpleGrid, Card, Group, Text, Box, ThemeIcon } from '@mantine/core';
import { IconSearch, IconBrush, IconPackage, IconRefresh } from '@tabler/icons-react';

type Step = {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    id: 'discover',
    icon: <IconSearch size={22} />,
    title: 'Discover',
    description:
      'Validasi kebutuhan pengguna dan bisnis. Kumpulkan insight, definisikan scope, dan identifikasi risiko.'
  },
  {
    id: 'design',
    icon: <IconBrush size={22} />,
    title: 'Design',
    description:
      'Rancang arsitektur, pengalaman pengguna, dan antarmuka. Gunakan pola yang konsisten dan aksesibel.'
  },
  {
    id: 'deliver',
    icon: <IconPackage size={22} />,
    title: 'Deliver',
    description:
      'Bangun fitur dengan Mantine dan CSS murni. Pastikan reliabilitas melalui typecheck dan uji manual.'
  },
  {
    id: 'iterate',
    icon: <IconRefresh size={22} />,
    title: 'Iterate',
    description:
      'Pantau performa dan feedback, lakukan perbaikan berkelanjutan dan penyederhanaan alur.'
  }
];

export function ProcessSteps() {
  return (
    <Container size="xl" py="xl">
      <Title order={2} style={{ fontWeight: 800, fontSize: '1.75rem', color: '#284361' }}>
        Tahapan Kerja
      </Title>
      <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} spacing="lg" mt="md">
        {steps.map((s) => (
          <Card key={s.id} shadow="sm" padding="lg" radius="md" withBorder style={{ backgroundColor: 'white' }}>
            <Group align="flex-start" gap="md">
              <ThemeIcon size={36} radius="md" style={{ backgroundColor: '#e5eef9', color: '#284361' }}>
                {s.icon}
              </ThemeIcon>
              <Box>
                <Text style={{ fontWeight: 700, color: '#111827' }}>{s.title}</Text>
                <Text style={{ color: '#6b7280', marginTop: 6, lineHeight: 1.6 }}>{s.description}</Text>
              </Box>
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
