"use client";
import React from 'react';
import { Card, CardSection, Image, Badge, Text, Group, Button, Stack } from '@mantine/core';
import Link from 'next/link';
import { IconClock, IconArrowRight } from '@tabler/icons-react';

interface OfferCardProps {
  image: string;
  discount: string;
  title: string;
  description: string;
  validUntil: string;
}

export function OfferCard({
  image,
  discount,
  title,
  description,
  validUntil
}: OfferCardProps) {
  return (
    <Card
      shadow="lg"
      radius="xl"
      style={{
        backgroundColor: 'white',
        transition: 'box-shadow 0.3s ease',
        // height: '100%',
        // display: 'flex',
        // flexDirection: 'column'
      }}
      styles={{
        root: {
          '&:hover': {
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }
        }
      }}
    >
      <CardSection style={{ position: 'relative' }}>
        <Image
          src={image}
          alt={title}
          height={224}
          fallbackSrc="https://placehold.co/800x600?text=Image+unavailable"
          style={{ objectFit: 'cover' }}
        />
        <Badge
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            backgroundColor: '#f59e0b',
            color: 'white',
            fontSize: 14,
            fontWeight: 600
          }}
          radius="xl"
        >
          {discount}
        </Badge>
      </CardSection>
      <Stack gap={16} p={24} style={{flex: 1, justifyContent: 'space-between'}}>
        <Text size="xl" style={{ fontWeight: 700, color: '#111827' }}>{title}</Text>
        <Text 
          size="sm" 
          style={{ 
            color: '#4b5563',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical'
          }}
        >
          {description}
        </Text>
        <Group gap={8} align="center">
          <IconClock size={16} style={{ color: '#6b7280' }} />
          <Text size="sm" style={{ color: '#6b7280' }}>
            Valid until {validUntil}
          </Text>
        </Group>
        <Button
          component={Link}
          href="/special-offers/details"
          fullWidth
          rightSection={<IconArrowRight size={18} />}
          style={{
            backgroundColor: '#284361',
            color: 'white',
            fontWeight: 500,
            marginTop: 8
          }}
          styles={{
            root: {
              '&:hover': {
                backgroundColor: '#1f3449'
              }
            },
            section: {
              transition: 'transform 0.2s ease',
              '&:hover': {
                transform: 'translateX(4px)'
              }
            }
          }}
        >
          See Details
        </Button>
      </Stack>
    </Card>
  );
}