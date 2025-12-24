import React from 'react';
import { Card, Stack, Title, Text, Group, ThemeIcon } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

export function TourOverview() {
  return (
    <Card shadow="sm" radius="lg" padding="xl" withBorder>
      <Stack gap="md">
        <Title order={3}>Tour Overview</Title>
        <Text c="dimmed">
          Explore iconic spots and enjoy a day of adventure with our curated tour. Perfect for first-time visitors and returning travelers alike.
        </Text>
        <Group gap="lg">
          {[
            'Comfortable transport',
            'Professional guide',
            'Flexible itinerary',
            'Photo opportunities',
          ].map((item) => (
            <Group key={item} gap="xs">
              <ThemeIcon color="green" variant="light"><IconCheck size={16} /></ThemeIcon>
              <Text>{item}</Text>
            </Group>
          ))}
        </Group>
      </Stack>
    </Card>
  );
}