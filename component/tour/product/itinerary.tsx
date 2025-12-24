import React from 'react';
import { Card, Stack, Title, Timeline, TimelineItem } from '@mantine/core';

export function TourItinerary() {
  const steps = [
    { time: '08:00', title: 'Hotel Pickup', desc: 'Meet your guide at the hotel lobby.' },
    { time: '09:00', title: 'Temple Visit', desc: 'Discover the history and culture.' },
    { time: '12:00', title: 'Local Lunch', desc: 'Enjoy authentic local cuisine.' },
    { time: '14:00', title: 'Beach Stop', desc: 'Relax and take photos by the sea.' },
    { time: '17:00', title: 'Back to Hotel', desc: 'Safe return to your accommodation.' },
  ];

  return (
    <Card shadow="sm" radius="lg" padding="xl" withBorder>
      <Stack gap="md">
        <Title order={3}>Itinerary</Title>
        <Timeline bulletSize={16} lineWidth={2} active={steps.length}>
          {steps.map((s) => (
            <TimelineItem key={s.title} title={`${s.time} — ${s.title}`}>
              {s.desc}
            </TimelineItem>
          ))}
        </Timeline>
      </Stack>
    </Card>
  );
}