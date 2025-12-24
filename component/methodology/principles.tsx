'use client';

import React from 'react';
import { Container, Title, SimpleGrid, Paper, Group, Text, ThemeIcon } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

const principles = [
  { id: 'consistency', title: 'Consistency', desc: 'Komponen, warna, dan pola UI konsisten di seluruh halaman.' },
  { id: 'clarity', title: 'Clarity', desc: 'Teks dan aksi jelas, prioritas visual tertata.' },
  { id: 'reliability', title: 'Reliability', desc: 'Typecheck dan verifikasi manual untuk mencegah regresi.' },
  { id: 'performance', title: 'Performance', desc: 'UI ringan, interaksi responsif, aset efisien.' },
  { id: 'security', title: 'Security', desc: 'Tidak ada rahasia di repo, menjaga data pelanggan.' },
  { id: 'accessibility', title: 'Accessibility', desc: 'Kontras warna baik, keterbacaan dijaga.' }
];

export function Principles() {
  return (
    <Container size="xl" py="xl">
      <Title order={2} style={{ fontWeight: 800, fontSize: '1.75rem', color: '#284361' }}>
        Prinsip Desain
      </Title>
      <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="lg" mt="md">
        {principles.map((p) => (
          <Paper key={p.id} shadow="xs" radius="md" p="lg" withBorder>
            <Group align="flex-start" gap="md">
              <ThemeIcon size={36} radius="md" style={{ backgroundColor: '#e5eef9', color: '#284361' }}>
                <IconCheck size={22} />
              </ThemeIcon>
              <div>
                <Text style={{ fontWeight: 700, color: '#111827' }}>{p.title}</Text>
                <Text style={{ color: '#6b7280', marginTop: 6, lineHeight: 1.6 }}>{p.desc}</Text>
              </div>
            </Group>
          </Paper>
        ))}
      </SimpleGrid>
    </Container>
  );
}
