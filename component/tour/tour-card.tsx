"use client";
import React from 'react';
import { Card, CardSection, Image, Text, Group, Badge, Button, Stack } from '@mantine/core';
import { IconStar, IconClock, IconMapPin, IconChevronRight } from '@tabler/icons-react';

interface TourCardProps {
  image: string;
  title: string;
  description: string;
  rating: number;
  reviews: number;
  duration: string;
  pickup: boolean;
  pickupLocation?: string;
  price: number;
  badge?: string | null;
  onViewDetails?: () => void;
}

export function TourCard({
  image,
  title,
  description,
  rating,
  reviews,
  duration,
  pickup,
  pickupLocation,
  price,
  badge,
  onViewDetails
}: TourCardProps) {
  return (
    <Card
      shadow="sm"
      radius="xl"
      bg="white"
      styles={{
        root: {
          '&:hover': {
            boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
          },
          transition: 'box-shadow 0.2s ease'
        }
      }}
    >
      <CardSection style={{ position: 'relative' }}>
        <Image
          src={image}
          alt={title}
          height={224}
          style={{ objectFit: 'cover' }}
        />
        {badge && (
          <Badge
            style={{
              position: 'absolute',
              top: 16,
              left: 16,
              backgroundColor: badge === 'Best Seller' ? '#ef4444' : '#f97316',
              color: 'white',
              fontWeight: 500
            }}
            radius="xl"
          >
            {badge}
          </Badge>
        )}
      </CardSection>
      <Stack gap="md" p="xl">
        <Text size="lg" style={{ fontWeight: 700, color: '#111827' }}>{title}</Text>
        <Text
          size="sm"
          style={{
            color: '#6b7280',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {description}
        </Text>
        <Group gap="md" style={{ fontSize: 14, color: '#6b7280', flexWrap: 'wrap' }}>
          <Group gap={4} align="center">
            <IconStar size={16} style={{ fill: '#fbbf24', color: '#fbbf24' }} />
            <Text size="sm" style={{ fontWeight: 500, color: '#111827' }}>{rating}</Text>
            <Text size="sm">({reviews} reviews)</Text>
          </Group>
          <Group gap={4} align="center">
            <IconClock size={16} />
            <Text size="sm">{duration}</Text>
          </Group>
          {pickup && (
            <Group gap={4} align="center">
              <IconMapPin size={16} />
              <Text size="sm">Hotel Pickup</Text>
            </Group>
          )}
          {pickupLocation && (
            <Group gap={4} align="center">
              <IconMapPin size={16} />
              <Text size="sm">{pickupLocation}</Text>
            </Group>
          )}
        </Group>
        <Group
          justify="space-between"
          align="center"
          style={{
            paddingTop: 16,
            borderTop: '1px solid #e5e7eb'
          }}
        >
          <Stack gap={4}>
            <Text size="xs" style={{ color: '#6b7280' }}>From</Text>
            <Group gap={4} align="baseline">
              <Text size="xl" style={{ fontWeight: 700, color: '#111827' }}>
                IDR {price.toLocaleString('en-US')}
              </Text>
              <Text size="sm" style={{ color: '#6b7280' }}> / pax</Text>
            </Group>
          </Stack>
          <Button
            rightSection={<IconChevronRight size={18} />}
            style={{
              backgroundColor: '#284361',
              color: 'white',
              fontWeight: 500
            }}
            styles={{
              root: {
                '&:hover': {
                  backgroundColor: '#1f3349'
                }
              }
            }}
            onClick={onViewDetails}
          >
            View Details
          </Button>
        </Group>
      </Stack>
    </Card>
  );
}