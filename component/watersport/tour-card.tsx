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
    <Card 
      shadow="sm" 
      padding="lg" 
      style={{ backgroundColor: 'white' }}
      styles={{
        root: {
          '&:hover': {
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
          }
        }
      }}
    >
      <CardSection>
        <Image
          src={image}
          alt={title}
          height={192}
          style={{
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        />
      </CardSection>

      <Stack gap="md" mt="md">
        <Text size="lg" style={{ fontWeight: 600 }}>{title}</Text>
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
        
        <Group gap="lg">
          <Group gap="xs">
            <IconStar size={16} style={{ color: '#fbbf24', fill: '#fbbf24' }} />
            <Text size="sm" style={{ fontWeight: 500, color: '#6b7280' }}>{rating}</Text>
            <Text size="sm" style={{ color: '#6b7280' }}>({reviews} reviews)</Text>
          </Group>
        </Group>
        
        <Group gap="lg">
          <Group gap="xs">
            <IconClock size={16} style={{ color: '#6b7280' }} />
            <Text size="sm" style={{ color: '#6b7280' }}>{duration}</Text>
          </Group>
          <Group gap="xs">
            <IconMapPin size={16} style={{ color: '#6b7280' }} />
            <Text size="sm" style={{ color: '#6b7280' }}>{location}</Text>
          </Group>
        </Group>
        
        <Group>
          <Badge 
            size="sm" 
            variant="light" 
            style={{ backgroundColor: '#f3f4f6', color: '#374151' }}
          >
            {category}
          </Badge>
        </Group>
        
        <Group justify="space-between" align="center">
          <Stack gap="xs">
            <Text size="xs" style={{ color: '#6b7280' }}>From</Text>
            <Group gap="xs" align="baseline">
              <Text size="lg" style={{ fontWeight: 700, color: '#284361' }}>
                IDR {price.toLocaleString()}
              </Text>
              <Text size="xs" style={{ color: '#6b7280' }}> / pax</Text>
            </Group>
          </Stack>
          <Button
            rightSection={<IconChevronRight size={16} />}
            size="sm"
            style={{
              backgroundColor: '#284361',
              fontWeight: 500
            }}
            styles={{
              root: {
                '&:hover': {
                  backgroundColor: '#1e3a52'
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