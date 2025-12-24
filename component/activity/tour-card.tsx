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
  location: string;
  price: number;
  category: string;
  onViewDetails?: () => void;
}

export function TourCard({
  image,
  title,
  description,
  rating,
  reviews,
  duration,
  location,
  price,
  category,
  onViewDetails
}: TourCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <CardSection>
        <Image src={image} alt={title} height={200} />
      </CardSection>

      <Stack gap="xs" mt="md">
        <Group justify="space-between" align="center">
          <Text fw={600} size="lg">{title}</Text>
          <Badge color="blue" variant="light">{category}</Badge>
        </Group>
        <Text size="sm" c="dimmed">
          {description}
        </Text>
      </Stack>

      <Group gap="md" mt="md">
        <Group gap={4}>
          <IconStar size={16} color="#f59e0b" />
          <Text size="sm" fw={500}>{rating}</Text>
          <Text size="sm" c="dimmed">({reviews} reviews)</Text>
        </Group>
        <Group gap={4}>
          <IconClock size={16} />
          <Text size="sm">{duration}</Text>
        </Group>
        <Group gap={4}>
          <IconMapPin size={16} />
          <Text size="sm">{location}</Text>
        </Group>
      </Group>

      <Group justify="space-between" align="center" mt="md">
        <Text size="lg" fw={700}>IDR {price.toLocaleString('id-ID')}</Text>
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
    </Card>
  );
}

