'use client';

import React from 'react';
import { Paper, Stack, Title, Text, Group, Table, SimpleGrid, Image, Button, TextInput } from '@mantine/core';
import { IconCar, IconCalendar, IconClock, IconTicket, IconMapPin } from '@tabler/icons-react';

interface BookingReviewProps {
  promoCode: string;
  setPromoCode: (code: string) => void;
}

export function BookingReview({
  promoCode,
  setPromoCode
}: BookingReviewProps) {
  return (
    <Paper shadow="sm" radius="lg" p="xl" bg="white">
      <Stack gap="xl">
        <Title order={2} size="xl" fw={700} c="#284361">Review Your Booking</Title>
        
        <Stack gap="md">
          <Text size="sm" fw={600} c="dark">Rental Details</Text>
          <Stack gap="md">
            <Group align="flex-start" gap="md">
              <IconCar size={20} color="#6b7280" style={{ marginTop: 2 }} />
              <Stack gap="xs">
                <Text fw={500} c="dark">Pickup: Denpasar, Bali</Text>
                <Text size="sm" c="dimmed">Vehicle: Car + Driver (Full Day)</Text>
                <Text size="sm" c="dimmed">Passengers: 4</Text>
              </Stack>
            </Group>
            <Group align="center" gap="md">
              <IconCalendar size={20} color="#6b7280" />
              <Text c="dark">Saturday, 12 October 2025</Text>
            </Group>
            <Group align="center" gap="md">
              <IconClock size={20} color="#6b7280" />
              <Text c="dark">Service: 10:00 AM – 6:00 PM</Text>
            </Group>
          </Stack>
        </Stack>

        <Stack gap="md">
          <Text size="sm" fw={600} c="dark">Contact Information</Text>
          <Table>
            <Table.Thead>
              <Table.Tr style={{ backgroundColor: '#f9fafb' }}>
                <Table.Th style={{ padding: '8px 16px', color: '#6b7280', fontWeight: 500 }}>No.</Table.Th>
                <Table.Th style={{ padding: '8px 16px', color: '#6b7280', fontWeight: 500 }}>Name</Table.Th>
                <Table.Th style={{ padding: '8px 16px', color: '#6b7280', fontWeight: 500 }}>Email</Table.Th>
                <Table.Th style={{ padding: '8px 16px', color: '#6b7280', fontWeight: 500 }}>Phone Number</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td style={{ padding: '12px 16px', color: '#111827' }}>1</Table.Td>
                <Table.Td style={{ padding: '12px 16px', color: '#111827', fontWeight: 500 }}>Kadek Arta</Table.Td>
                <Table.Td style={{ padding: '12px 16px', color: '#6b7280' }}>kadekarta@gmail.com</Table.Td>
                <Table.Td style={{ padding: '12px 16px', color: '#6b7280' }}>628898765234</Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </Stack>

        <Stack gap="md">
          <Text size="sm" fw={600} c="dark">Passenger Details</Text>
          <Table>
            <Table.Thead>
              <Table.Tr style={{ backgroundColor: '#f9fafb' }}>
                <Table.Th style={{ padding: '8px 16px', color: '#6b7280', fontWeight: 500 }}>No.</Table.Th>
                <Table.Th style={{ padding: '8px 16px', color: '#6b7280', fontWeight: 500 }}>Name</Table.Th>
                <Table.Th style={{ padding: '8px 16px', color: '#6b7280', fontWeight: 500 }}>ID</Table.Th>
                <Table.Th style={{ padding: '8px 16px', color: '#6b7280', fontWeight: 500 }}>Nationality</Table.Th>
                <Table.Th style={{ padding: '8px 16px', color: '#6b7280', fontWeight: 500 }}>Type</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td style={{ padding: '12px 16px', color: '#111827' }}>1</Table.Td>
                <Table.Td style={{ padding: '12px 16px', color: '#111827', fontWeight: 500 }}>Kadek Arta</Table.Td>
                <Table.Td style={{ padding: '12px 16px', color: '#6b7280' }}>1303223061</Table.Td>
                <Table.Td style={{ padding: '12px 16px', color: '#6b7280' }}>Indonesian</Table.Td>
                <Table.Td style={{ padding: '12px 16px', color: '#6b7280' }}>Adult</Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td style={{ padding: '12px 16px', color: '#111827' }}>2</Table.Td>
                <Table.Td style={{ padding: '12px 16px', color: '#111827', fontWeight: 500 }}>Rina Wati</Table.Td>
                <Table.Td style={{ padding: '12px 16px', color: '#6b7280' }}>1303223061</Table.Td>
                <Table.Td style={{ padding: '12px 16px', color: '#6b7280' }}>Indonesian</Table.Td>
                <Table.Td style={{ padding: '12px 16px', color: '#6b7280' }}>Adult</Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </Stack>

        <Stack gap="md">
          <Text size="sm" fw={600} c="dark">Add-Ons</Text>
          <SimpleGrid
            cols={{ base: 1, md: 2 }}
            spacing="md"
          >
            <PackageCard 
              image="https://www.lavacarrental.is/media/1/car-rental-in-iceland-11.jpg" 
              title="GPS Device Rental" 
              originalPrice="IDR 60,000" 
              price="IDR 50,000" 
            />
            <PackageCard 
              image="https://www.lavacarrental.is/media/1/car-rental-in-iceland-11.jpg" 
              title="Child Seat" 
              originalPrice="IDR 50,000" 
              price="IDR 40,000" 
            />
            <PackageCard 
              image="https://www.lavacarrental.is/media/1/car-rental-in-iceland-11.jpg" 
              title="English-speaking Driver" 
              originalPrice="IDR 120,000" 
              price="IDR 100,000" 
            />
          </SimpleGrid>
        </Stack>

        <Stack gap="md">
          <Text size="sm" fw={600} c="dark">Apply Promo</Text>
          <Group gap="sm">
            <TextInput
              placeholder="Enter promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.currentTarget.value)}
              leftSection={<IconTicket size={20} />}
              style={{ flex: 1 }}
              styles={{
                input: {
                  border: '1px solid #d1d5db',
                  backgroundColor: 'white',
                  color: '#111827',
                  '&::placeholder': { color: '#6b7280' },
                  '&:focus': { 
                    borderColor: '#284361',
                    boxShadow: '0 0 0 2px rgba(40, 67, 97, 0.2)'
                  }
                }
              }}
            />
            <Button
              style={{
                backgroundColor: '#284361',
                ':hover': { backgroundColor: '#1e3147' }
              }}
            >
              Apply
            </Button>
          </Group>
        </Stack>
      </Stack>
    </Paper>
  );
}

function PackageCard({
  image,
  title,
  originalPrice,
  price
}: {
  image: string;
  title: string;
  originalPrice: string;
  price: string;
}) {
  return (
    <Group align="center" gap="md" p="md" style={{ border: '1px solid #e5e7eb', borderRadius: 8 }}>
      <Image src={image} alt={title} w={64} h={64} radius="md" />
      <Stack gap="xs" style={{ flex: 1 }}>
        <Text size="sm" fw={500} c="dark">{title}</Text>
        <Group gap="sm" align="center">
          <Text size="xs" c="dimmed" td="line-through">{originalPrice}</Text>
          <Text size="sm" fw={600} c="#2dbe8d">{price}</Text>
        </Group>
      </Stack>
    </Group>
  );
}
