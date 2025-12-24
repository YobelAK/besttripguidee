"use client";
import React from 'react';
import { Stack, Title, Group, Text, Button, SimpleGrid } from '@mantine/core';
import { IconArrowsUpDown, IconStar, IconClock } from '@tabler/icons-react';
import { TourCard } from './tour-card';
import { useRouter } from 'next/navigation';

const rentals = [
  {
    image: 'https://www.lavacarrental.is/media/1/car-rental-in-iceland-11.jpg',
    title: 'Scooter Rental',
    description: 'Explore Bali easily with a fully serviced scooter.',
    rating: 4.6,
    reviews: 410,
    duration: 'Per Day',
    location: 'Seminyak',
    price: 100000,
    category: 'Scooter'
  },
  {
    image: 'https://www.lavacarrental.is/media/1/car-rental-in-iceland-11.jpg',
    title: 'Car Rental + Driver',
    description: 'Full day car rental with professional driver.',
    rating: 4.8,
    reviews: 532,
    duration: 'Full Day',
    location: 'Denpasar',
    price: 550000,
    category: 'Car + Driver'
  },
  {
    image: 'https://www.lavacarrental.is/media/1/car-rental-in-iceland-11.jpg',
    title: 'Bus Charter',
    description: 'Comfortable bus charter for groups and tours.',
    rating: 4.7,
    reviews: 312,
    duration: 'Full Day',
    location: 'Kuta',
    price: 1500000,
    category: 'Bus'
  },
  {
    image: 'https://www.lavacarrental.is/media/1/car-rental-in-iceland-11.jpg',
    title: 'SUV Rental',
    description: 'Spacious SUV suitable for families and long trips.',
    rating: 4.7,
    reviews: 298,
    duration: 'Per Day',
    location: 'Sanur',
    price: 750000,
    category: 'Car'
  },
  {
    image: 'https://www.lavacarrental.is/media/1/car-rental-in-iceland-11.jpg',
    title: 'Luxury Van',
    description: 'Premium van for VIP travels and events.',
    rating: 4.9,
    reviews: 187,
    duration: 'Full Day',
    location: 'Nusa Dua',
    price: 1200000,
    category: 'Van'
  }
];

export function TourGrid() {
  const router = useRouter();
  return (
    <Stack gap="xl" style={{ flex: 1 }}>
      <Group justify="space-between" align="center">
        <Title order={2} size="2xl" style={{ fontWeight: 700 }}>Available Rentals</Title>
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
        {rentals.map((r, index) => (
          <TourCard
            key={index}
            {...r}
            onViewDetails={() => router.push('/rental/product')}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
}

