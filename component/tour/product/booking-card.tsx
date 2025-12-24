"use client";

import React, { useState } from 'react';
import { Card, Stack, Title, Text, Group, Button, Divider, NumberInput, TextInput } from '@mantine/core';
import { useRouter } from 'next/navigation';

export function TourBookingCard() {
  const [date, setDate] = useState<string>('');
  const [guests, setGuests] = useState<number | string>(2);
  const pricePerGuest = 850000; // IDR
  const total = (typeof guests === 'number' ? guests : 0) * pricePerGuest;
  const router = useRouter();

  return (
    <Card shadow="lg" radius="xl" padding="xl" withBorder>
      <Stack gap="md">
        <Title order={3}>Your Booking</Title>

        <Stack gap="xs">
          <Text size="sm" c="dimmed">Select date</Text>
          <TextInput 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.currentTarget.value)} 
            placeholder="Pick date" 
          />
        </Stack>

        <Stack gap="xs">
          <Text size="sm" c="dimmed">Guests</Text>
          <NumberInput value={guests} onChange={setGuests} min={1} step={1} clampBehavior="strict" allowDecimal={false} allowNegative={false} />
        </Stack>

        <Divider my="sm" />

        <Group justify="space-between">
          <Text c="dimmed">Guests (x{typeof guests === 'number' ? guests : 0})</Text>
          <Text>IDR {pricePerGuest.toLocaleString('en-US')}</Text>
        </Group>
        <Group justify="space-between">
          <Text fw={700}>Total</Text>
          <Text fw={700}>IDR {total.toLocaleString('en-US')}</Text>
        </Group>

        <Button size="md" radius="md" onClick={() => router.push('/tour/book')} styles={{ root: { backgroundColor: '#284361' } }}>Continue to Add-ons →</Button>

        <Text size="sm" c="dimmed">Free cancellation up to 24h before. See policy.</Text>
      </Stack>
    </Card>
  );
}
