import React from 'react';
import { Card, Stack, Title, Group, Text, Progress, Avatar } from '@mantine/core';
import { Rating } from '@mantine/core';

export function TourReviews() {
  const average = 4.6;
  const breakdown = [
    { stars: 5, value: 72 },
    { stars: 4, value: 18 },
    { stars: 3, value: 6 },
    { stars: 2, value: 3 },
    { stars: 1, value: 1 },
  ];

  const sample = [
    { name: 'Ariana', text: 'Great tour! Super organized and fun day.', rating: 5 },
    { name: 'Rafi', text: 'Guide was friendly, itinerary was just right.', rating: 4 },
  ];

  return (
    <Card shadow="sm" radius="lg" padding="xl" withBorder>
      <Stack gap="md">
        <Title order={3}>Reviews</Title>
        <Group align="center" gap="xl">
          <Stack gap={2}>
            <Text size="xl" fw={700}>{average.toFixed(1)}</Text>
            <Rating readOnly value={average} fractions={2} />
            <Text size="sm" c="dimmed">Based on 240 reviews</Text>
          </Stack>
          <Stack gap={8} style={{ flex: 1 }}>
            {breakdown.map((b) => (
              <Group key={b.stars} gap="sm" align="center">
                <Text w={28}>{b.stars}★</Text>
                <Progress value={b.value} style={{ flex: 1 }} />
                <Text w={36}>{b.value}%</Text>
              </Group>
            ))}
          </Stack>
        </Group>

        <Stack gap="lg" mt="sm">
          {sample.map((r) => (
            <Group key={r.name} align="flex-start">
              <Avatar name={r.name} />
              <Stack gap={4} style={{ flex: 1 }}>
                <Group gap="xs">
                  <Text fw={600}>{r.name}</Text>
                  <Rating readOnly value={r.rating} size="sm" />
                </Group>
                <Text c="dimmed">{r.text}</Text>
              </Stack>
            </Group>
          ))}
        </Stack>
      </Stack>
    </Card>
  );
}