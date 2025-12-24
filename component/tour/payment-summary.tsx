'use client';

import React, { useState, useEffect } from 'react';
import { Paper, Title, Stack, Group, Text, Divider, Alert, Button } from '@mantine/core';
import { IconAlertCircle, IconClock } from '@tabler/icons-react';

interface PaymentSummaryProps {
  onContinue?: () => void;
  buttonText?: string;
}

export function PaymentSummary({
  onContinue,
  buttonText = "Pay Now"
}: PaymentSummaryProps) {
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 59); // 14:59 in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Paper shadow="sm" p="xl" style={{ backgroundColor: 'white' }}>
      <Stack gap="xl">
        <Title order={2} style={{ color: '#284361', fontSize: '1.25rem', fontWeight: 700 }}>
          Payment Summary
        </Title>
        
        {/* Payment Details */}
        <Stack gap="md">
          <Group justify="space-between" align="center">
            <Text style={{ color: '#6b7280' }}>Adult (2x)</Text>
            <Text style={{ fontWeight: 500, color: '#111827' }}>IDR 300,000</Text>
          </Group>
          <Group justify="space-between" align="center">
            <Text style={{ color: '#6b7280' }}>Port Fee (2x)</Text>
            <Text style={{ fontWeight: 500, color: '#111827' }}>IDR 30,000</Text>
          </Group>
          
          <Divider />
          <Stack gap="xs">
            <Text size="sm" style={{ fontWeight: 500, color: '#111827' }}>Add-ons:</Text>
            <Group justify="space-between" align="center">
              <Text size="sm" style={{ color: '#6b7280' }}>VIP Beach Club Access</Text>
              <Text size="sm" style={{ fontWeight: 500, color: '#111827' }}>IDR 200,000</Text>
            </Group>
            <Group justify="space-between" align="center">
              <Text size="sm" style={{ color: '#6b7280' }}>Snorkeling Experience</Text>
              <Text size="sm" style={{ fontWeight: 500, color: '#111827' }}>IDR 120,000</Text>
            </Group>
            <Group justify="space-between" align="center">
              <Text size="sm" style={{ color: '#6b7280' }}>Balinese Lunch Package</Text>
              <Text size="sm" style={{ fontWeight: 500, color: '#111827' }}>IDR 85,000</Text>
            </Group>
          </Stack>
          
          <Divider />
          <Group justify="space-between" align="center">
            <Text style={{ color: '#6b7280' }}>Transaction Fee</Text>
            <Text style={{ fontWeight: 500, color: '#111827' }}>IDR 5,000</Text>
          </Group>
          
          <Divider />
          <Group justify="space-between" align="center">
            <Text size="lg" style={{ fontWeight: 700, color: '#111827' }}>Total Payment</Text>
            <Text size="lg" style={{ fontWeight: 700, color: '#2dbe8d' }}>IDR 740,000</Text>
          </Group>
        </Stack>

        {/* Alerts */}
        <Stack gap="md">
          <Alert 
            icon={<IconAlertCircle size={20} />}
            color="blue"
            variant="light"
            style={{ backgroundColor: '#eff6ff' }}
          >
            <Text size="sm" style={{ color: '#1e40af' }}>
              All prices are inclusive of tax and service charges.
            </Text>
          </Alert>
          
          <Alert 
            icon={<IconClock size={20} />}
            color="orange"
            variant="light"
            style={{ backgroundColor: '#fff7ed' }}
          >
            <Stack gap="xs">
              <Text size="sm" style={{ fontWeight: 500, color: '#c2410c' }}>Payment Deadline</Text>
              <Text size="sm" style={{ color: '#c2410c' }}>
                Complete your payment within {formatTime(timeLeft)} to secure your booking.
              </Text>
            </Stack>
          </Alert>
        </Stack>

        {/* Payment Button */}
        <Button 
          onClick={onContinue}
          fullWidth
          size="lg"
          style={{ 
            backgroundColor: '#2dbe8d',
            fontWeight: 600,
            padding: '12px 24px'
          }}
          styles={{
            root: {
              '&:hover': {
                backgroundColor: '#25a374'
              }
            }
          }}
        >
          {buttonText}
        </Button>
      </Stack>
    </Paper>
  );
}