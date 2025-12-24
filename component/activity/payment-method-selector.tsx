'use client';

import React from 'react';
import { Paper, Title, Stack, Group, Text, UnstyledButton, Box } from '@mantine/core';
import { IconCreditCard, IconDeviceMobile, IconBuilding, IconHelpCircle } from '@tabler/icons-react';

interface PaymentMethodSelectorProps {
  selectedMethod: string;
  onMethodChange: (method: string) => void;
}

export function PaymentMethodSelector({
  selectedMethod,
  onMethodChange
}: PaymentMethodSelectorProps) {
  return (
    <Paper shadow="sm" p="xl" radius="lg" style={{ backgroundColor: '#eff6ff' }}>
      <Title order={2} size="xl" style={{ fontWeight: 700, color: '#284361', marginBottom: '12px' }}>
        Select Your Payment Method
      </Title>
      <Stack gap="sm">
        <PaymentOption 
          id="virtual-account" 
          icon={<IconBuilding size={20} />} 
          title="Virtual Account" 
          subtitle="BCA / Mandiri / BNI" 
          fee="Transaction fee IDR 5,000 applies" 
          selected={selectedMethod === 'virtual-account'} 
          onSelect={() => onMethodChange('virtual-account')} 
        />
        <PaymentOption 
          id="credit-card" 
          icon={<IconCreditCard size={20} />} 
          title="Credit / Debit Card" 
          subtitle="Processing fee 2.5% applies" 
          selected={selectedMethod === 'credit-card'} 
          onSelect={() => onMethodChange('credit-card')} 
        />
        <PaymentOption 
          id="qris" 
          icon={<IconDeviceMobile size={20} />} 
          title="QRIS" 
          subtitle="Transaction fee IDR 5,000 applies" 
          selected={selectedMethod === 'qris'} 
          onSelect={() => onMethodChange('qris')} 
        />
      </Stack>
    </Paper>
  );
}

function PaymentOption({
  id,
  icon,
  title,
  subtitle,
  fee,
  selected,
  onSelect
}: {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  fee?: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <UnstyledButton 
      onClick={onSelect} 
      style={{
        width: '100%',
        padding: '12px',
        borderRadius: '8px',
        border: `2px solid ${selected ? '#284361' : '#e5e7eb'}`,
        backgroundColor: 'white',
        transition: 'all 0.2s ease'
      }}
    >
      <Group justify="space-between" align="center">
        <Group gap="sm" align="center">
          <Box style={{ color: selected ? '#284361' : '#6b7280' }}>
            {icon}
          </Box>
          <Stack gap={2} align="flex-start">
            <Text style={{ fontWeight: 500, color: '#1a1a1a', fontSize: '14px' }}>
              {title}
            </Text>
            <Text style={{ fontSize: '12px', color: '#6b7280' }}>
              {subtitle}
            </Text>
            {fee && (
              <Text style={{ fontSize: '12px', color: '#9ca3af', marginTop: 2 }}>
                {fee}
              </Text>
            )}
          </Stack>
        </Group>
        <Group gap="xs" align="center">
          {selected && <IconHelpCircle size={16} color="#9ca3af" />}
          <Box
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              border: `2px solid ${selected ? '#284361' : '#d1d5db'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {selected && (
              <Box
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: '#284361'
                }}
              />
            )}
          </Box>
        </Group>
      </Group>
    </UnstyledButton>
  );
}
