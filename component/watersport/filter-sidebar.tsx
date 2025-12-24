'use client';

import React, { useState } from 'react';
import { Paper, Title, TextInput, Stack, Checkbox, Slider, Text, Button, Group } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

export function FilterSidebar() {
  const [priceRange, setPriceRange] = useState(2000000);

  return (
    <Paper
      shadow="sm"
      p="xl"
      radius="xl"
      bg="white"
      style={{
        width: 256,
        flexShrink: 0,
        position: 'sticky',
        top: 16
      }}
    >
      <Stack gap="xl">
        <Title order={3} size="lg" style={{ fontWeight: 600, color: '#111827' }}>
          Filter Watersports
        </Title>
        
        {/* Search */}
        <TextInput
          placeholder="Search watersports..."
          leftSection={<IconSearch size={18} style={{ color: '#9ca3af' }} />}
          styles={{
            input: {
              backgroundColor: 'white',
              borderColor: '#d1d5db',
              color: '#111827',
              '&:focus': {
                borderColor: '#284361',
                boxShadow: '0 0 0 2px rgba(40, 67, 97, 0.2)'
              },
              '&::placeholder': {
                color: '#6b7280'
              }
            }
          }}
        />
        
        {/* Destination */}
        <Stack gap="sm">
          <Text size="sm" style={{ fontWeight: 500, color: '#111827' }}>Destination</Text>
          <Stack gap="xs">
            {['Nusa Penida', 'Ubud', 'Lembongan', 'Canggu', 'Uluwatu'].map(dest => (
              <Checkbox
                key={dest}
                label={dest}
                size="sm"
                styles={{
                  input: {
                    borderColor: '#d1d5db',
                    backgroundColor: 'white',
                    '&:checked': {
                      backgroundColor: '#284361',
                      borderColor: '#284361'
                    }
                  },
                  label: {
                    color: '#111827',
                    fontSize: 14
                  }
                }}
              />
            ))}
          </Stack>
        </Stack>
        
        {/* Duration */}
        <Stack gap="sm">
          <Text size="sm" style={{ fontWeight: 500, color: '#111827' }}>Duration</Text>
          <Stack gap="xs">
            {['Half Day', 'Full Day', '2D1N', '3D2N'].map(duration => (
              <Checkbox
                key={duration}
                label={duration}
                size="sm"
                styles={{
                  input: {
                    borderColor: '#d1d5db',
                    backgroundColor: 'white',
                    '&:checked': {
                      backgroundColor: '#284361',
                      borderColor: '#284361'
                    }
                  },
                  label: {
                    color: '#111827',
                    fontSize: 14
                  }
                }}
              />
            ))}
          </Stack>
        </Stack>
        
        {/* Watersport Type */}
        <Stack gap="sm">
          <Text size="sm" style={{ fontWeight: 500, color: '#111827' }}>Watersport Type</Text>
          <Stack gap="xs">
            {['Private', 'Group', 'Snorkeling', 'Adventure'].map(type => (
              <Checkbox
                key={type}
                label={type}
                size="sm"
                styles={{
                  input: {
                    borderColor: '#d1d5db',
                    backgroundColor: 'white',
                    '&:checked': {
                      backgroundColor: '#284361',
                      borderColor: '#284361'
                    }
                  },
                  label: {
                    color: '#111827',
                    fontSize: 14
                  }
                }}
              />
            ))}
          </Stack>
        </Stack>
        
        {/* Price Range */}
        <Stack gap="sm">
          <Text size="sm" style={{ fontWeight: 500, color: '#111827' }}>Price Range</Text>
          <Slider
            min={0}
            max={2000000}
            value={priceRange}
            onChange={setPriceRange}
            color="#284361"
            size="sm"
            styles={{
              track: {
                backgroundColor: '#e5e7eb'
              },
              bar: {
                backgroundColor: '#284361'
              },
              thumb: {
                backgroundColor: '#284361',
                borderColor: '#284361'
              }
            }}
          />
          <Group justify="space-between">
            <Text size="sm" style={{ color: '#6b7280' }}>Rp 0</Text>
            <Text size="sm" style={{ color: '#6b7280' }}>Rp {priceRange.toLocaleString()}</Text>
          </Group>
        </Stack>
        
        {/* Apply Button */}
        <Button
          fullWidth
          size="md"
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
        >
          Apply Filters
        </Button>
      </Stack>
    </Paper>
  );
}