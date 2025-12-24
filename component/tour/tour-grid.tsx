"use client";
import React from 'react';
import { TourCard } from './tour-card';
import { Stack, Title, Group, Text, Button, SimpleGrid } from '@mantine/core';
import { IconArrowsUpDown, IconStar, IconClock } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

const tours = [
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    title: 'Ubud Rice Terrace Tour',
    description: 'Explore the stunning Jatiluwih rice terraces and traditional Balinese villages.',
    rating: 4.8,
    reviews: 156,
    duration: 'Full Day',
    location: 'Ubud',
    price: 750000,
    category: 'From',
    pickup: true,
    pickupLocation: 'Hotel pickup available'
  },
  {
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800',
    title: 'Mount Batur Sunrise Trekking',
    description: 'Hike to the summit of Mount Batur and witness a breathtaking sunrise over Bali.',
    rating: 4.9,
    reviews: 234,
    duration: 'Half Day',
    location: 'Kintamani',
    price: 450000,
    category: 'From',
    pickup: true,
    pickupLocation: 'Hotel pickup available'
  },
  {
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800',
    title: 'Nusa Penida Island Tour',
    description: 'Visit the famous Kelingking Beach, Angel Billabong, and Broken Beach.',
    rating: 4.7,
    reviews: 189,
    duration: 'Full Day',
    location: 'Nusa Penida',
    price: 850000,
    category: 'From',
    pickup: true,
    pickupLocation: 'Hotel pickup available'
  },
  {
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
    title: 'Uluwatu Temple & Kecak Dance',
    description: 'Experience the magnificent clifftop temple and traditional Kecak fire dance.',
    rating: 4.6,
    reviews: 167,
    duration: 'Half Day',
    location: 'Uluwatu',
    price: 350000,
    category: 'From',
    pickup: true,
    pickupLocation: 'Hotel pickup available'
  },
  {
    image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800',
    title: 'Sekumpul Waterfall Adventure',
    description: 'Trek through lush jungle to reach Bali\'s most spectacular waterfall.',
    rating: 4.8,
    reviews: 143,
    duration: 'Full Day',
    location: 'North Bali',
    price: 650000,
    category: 'From',
    pickup: true,
    pickupLocation: 'Hotel pickup available'
  },
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    title: 'Traditional Cooking Class',
    description: 'Learn to cook authentic Balinese dishes in a traditional village setting.',
    rating: 4.9,
    reviews: 98,
    duration: 'Half Day',
    location: 'Ubud',
    price: 400000,
    category: 'From',
    pickup: true,
    pickupLocation: 'Hotel pickup available'
  }
];

export function TourGrid() {
  const router = useRouter();
  return (
    <Stack style={{ flex: 1 }}>
      {/* Header */}
      <Group justify="space-between" align="center" style={{ marginBottom: 24 }}>
        <Title order={2} style={{ fontSize: 24, fontWeight: 700 }}>Available Tours</Title>
        <Group gap={16} align="center">
          <Text size="sm" style={{ color: '#6b7280' }}>Sort by:</Text>
          <Button
            variant="outline"
            leftSection={<IconArrowsUpDown size={16} />}
            size="sm"
            style={{ color: '#6b7280' }}
            styles={{
              root: {
                borderColor: '#d1d5db',
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
            style={{ color: '#6b7280' }}
            styles={{
              root: {
                borderColor: '#d1d5db',
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
            style={{ color: '#6b7280' }}
            styles={{
              root: {
                borderColor: '#d1d5db',
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
        spacing={24}
      >
        {tours.map((tour, index) => (
          <TourCard key={index} {...tour} onViewDetails={() => router.push('/tour/product')} />
        ))}
      </SimpleGrid>
    </Stack>
  );
}