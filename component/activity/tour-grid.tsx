"use client";
import React from 'react';
import { Stack, Title, Group, Text, Button, SimpleGrid } from '@mantine/core';
import { IconArrowsUpDown, IconStar, IconClock } from '@tabler/icons-react';
import { TourCard } from './tour-card';
import { useRouter } from 'next/navigation';

const activities = [
  {
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
    title: 'Ubud Rafting Adventure',
    description: 'White water rafting through scenic jungle rivers in Ubud.',
    rating: 4.8,
    reviews: 312,
    duration: 'Half Day',
    location: 'Ubud',
    price: 450000,
    category: 'Adventure'
  },
  {
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
    title: 'ATV Quad Bike',
    description: 'Ride through rice fields and muddy tracks on an ATV bike.',
    rating: 4.7,
    reviews: 275,
    duration: '2 hours',
    location: 'Ubud',
    price: 600000,
    category: 'Adventure'
  },
  {
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
    title: 'Mount Batur Sunrise Trek',
    description: 'Hike Mount Batur and witness breathtaking sunrise views.',
    rating: 4.9,
    reviews: 528,
    duration: 'Full Day',
    location: 'Kintamani',
    price: 750000,
    category: 'Trekking'
  },
  {
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
    title: 'Bali Swing Experience',
    description: 'Swing over jungles and rivers with spectacular views.',
    rating: 4.6,
    reviews: 410,
    duration: '1 hour',
    location: 'Ubud',
    price: 250000,
    category: 'Lifestyle'
  },
  {
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
    title: 'Balinese Cooking Class',
    description: 'Learn to cook authentic Balinese dishes with local chefs.',
    rating: 4.7,
    reviews: 198,
    duration: '3 hours',
    location: 'Ubud',
    price: 500000,
    category: 'Culture'
  }
];

export function TourGrid() {
  const router = useRouter();
  return (
    <Stack gap="xl" style={{ flex: 1 }}>
      <Group justify="space-between" align="center">
        <Title order={2} size="2xl" style={{ fontWeight: 700 }}>Available Activities</Title>
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
      
      <SimpleGrid
        cols={{ base: 1, md: 2, lg: 3 }}
        spacing="xl"
      >
        {activities.map((act, index) => (
          <TourCard
            key={index}
            {...act}
            onViewDetails={() => router.push('/activity/product')}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
}

