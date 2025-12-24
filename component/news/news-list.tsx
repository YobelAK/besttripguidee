'use client';

import React from 'react';
import { Container, SimpleGrid, Card, Image, Group, Text, Badge, Button, Stack } from '@mantine/core';

export type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
};

const defaultNews: NewsItem[] = [
  {
    id: 'n1',
    title: 'Peluncuran Halaman Activity & Rental',
    excerpt: 'Kami memperkenalkan kategori Activity dan Rental dengan alur booking seragam dan UI konsisten.',
    date: '24 Dec 2025',
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800'
  },
  {
    id: 'n2',
    title: 'Peningkatan Pembayaran QRIS & VA',
    excerpt: 'Metode pembayaran diperbarui untuk pengalaman checkout yang lebih lancar dan aman.',
    date: '20 Dec 2025',
    category: 'Payments',
    image: 'https://static.jalin.co.id/uploads/news/image1.webp'
  },
  {
    id: 'n3',
    title: 'Program Mitra Fastboat Diperluas',
    excerpt: 'Menambah rute populer dan meningkatkan reliabilitas jadwal.',
    date: '12 Dec 2025',
    category: 'Partners',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800'
  }
];

export function NewsList({ items = defaultNews }: { items?: NewsItem[] }) {
  return (
    <Container size="xl" py="xl">
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
        {items.map((n) => (
          <Card key={n.id} shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image src={n.image} alt={n.title} h={160} fit="cover" />
            </Card.Section>
            <Stack gap="xs" mt="md">
              <Group justify="space-between" align="center">
                <Badge color="#284361" styles={{ root: { backgroundColor: '#284361' } }}>
                  {n.category}
                </Badge>
                <Text c="dimmed" size="sm">{n.date}</Text>
              </Group>
              <Text fw={700} c="#111827">{n.title}</Text>
              <Text c="#6b7280" size="sm" style={{ lineHeight: 1.6 }}>{n.excerpt}</Text>
            </Stack>
            <Button
              fullWidth
              mt="md"
              styles={{ root: { backgroundColor: '#284361' } }}
              size="sm"
            >
              Baca Selengkapnya
            </Button>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
