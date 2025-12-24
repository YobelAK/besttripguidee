"use client";
import React from 'react';
import { Stack, Title, Group, Text, Button, SimpleGrid } from '@mantine/core';
import { IconArrowsUpDown, IconStar, IconClock } from '@tabler/icons-react';
import { TourCard } from './tour-card';
import { useRouter } from 'next/navigation';
const tours = [
  {
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
    title: 'Banana Boat Adventure',
    description: 'Glide across the waves on an inflatable banana boat for a thrilling and fun group activity at Tanjung Benoa.',
    rating: 4.7,
    reviews: 203,
    duration: '15 minutes',
    location: 'Tanjung Benoa',
    price: 150000,
    category: 'From',
    pickup: true,
    pickupLocation: 'Hotel pickup available'
  },
  {
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    title: 'Nusa Penida Snorkeling Tour',
    description: 'Explore the crystal-clear waters of Nusa Penida and meet famous manta rays at Manta Bay and Gamat Bay.',
    rating: 4.9,
    reviews: 176,
    duration: 'Full Day',
    location: 'From Sanur Harbor',
    price: 950000,
    category: 'From',
    pickup: true,
    pickupLocation: 'Hotel pickup available'
  },
  {
    image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800',
    title: 'Nusa Lembongan Snorkeling',
    description: 'Explore vibrant coral reefs, swim with manta rays, and enjoy white sandy beaches.',
    rating: 4.8,
    reviews: 142,
    duration: 'Full Day',
    location: 'From Sanur Harbor',
    price: 900000,
    category: 'From',
    pickup: true,
    pickupLocation: 'Hotel pickup available'
  },
  {
    image: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=800',
    title: 'Amed Coral Garden Snorkeling',
    description: "Swimming around Bali's most stunning coral gardens Amed, known for its calm waters and crystal clear visibility.",
    rating: 4.7,
    reviews: 412,
    duration: 'Half Day',
    location: 'From Amed Beach',
    price: 550000,
    category: 'From',
    pickup: true,
    pickupLocation: 'Hotel pickup available'
  },
  {
    image: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=800',
    title: 'Padang Bai Blue Lagoon Snorkeling',
    description: 'A family-friendly snorkeling trip featuring Blue Lagoon an Tanjung Jepun — shallow, calm and full of colorful fish.',
    rating: 4.8,
    reviews: 187,
    duration: 'Half Day',
    location: 'From Padang Bai',
    price: 600000,
    category: 'From',
    pickup: true,
    pickupLocation: 'Hotel pickup available'
  }
];

export function TourGrid() {
  const router = useRouter();
  return (
    <Stack gap="xl" style={{ flex: 1 }}>
      {/* Header */}
      <Group justify="space-between" align="center">
        <Title order={2} size="2xl" style={{ fontWeight: 700 }}>Available Tours</Title>
        <Group gap="md" align="center">
          <Text size="sm" style={{ color: '#6b7280' }}>Sort by:</Text>
          <Button
            variant="outline"
            leftSection={<IconArrowsUpDown size={16} />}
            size="sm"
            style={{
              color: '#6b7280',
              borderColor: '#d1d5db'
            }}
            styles={{
              root: {
                '&:hover': {
                  backgroundColor: '#f9fafb'
                }
              }
            }}
          >
            Price (Low → High)
          </Button>
          <Button
            variant="outline"
            leftSection={<IconStar size={16} />}
            size="sm"
            style={{
              color: '#6b7280',
              borderColor: '#d1d5db'
            }}
            styles={{
              root: {
                '&:hover': {
                  backgroundColor: '#f9fafb'
                }
              }
            }}
          >
            Rating
          </Button>
          <Button
            variant="outline"
            leftSection={<IconClock size={16} />}
            size="sm"
            style={{
              color: '#6b7280',
              borderColor: '#d1d5db'
            }}
            styles={{
              root: {
                '&:hover': {
                  backgroundColor: '#f9fafb'
                }
              }
            }}
          >
            Duration
          </Button>
        </Group>
      </Group>
      
      {/* Tour Grid */}
      <SimpleGrid
        cols={{ base: 1, md: 2, lg: 3 }}
        spacing="xl"
      >
        
        {tours.map((tour, index) => (
          <TourCard
            key={index}
            {...tour}
            onViewDetails={() => router.push('/watersport/product')}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
}