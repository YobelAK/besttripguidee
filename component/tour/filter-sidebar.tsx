'use client';

import React, { useState } from 'react';
import { Paper, Title, TextInput, Stack, Checkbox, Slider, Text, Button, Group } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

export function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([0, 2000000]);

  return (
    <Paper
      style={{
        width: 256,
        flexShrink: 0,
        position: 'sticky',
        top: 16
      }}
      shadow="sm"
      p={24}
      radius="xl"
      bg="white"
    >
      <Stack gap={24}>
        <Title order={3} size="lg" style={{ fontWeight: 600, color: '#111827' }}>
          Filter Tours
        </Title>
        
        {/* Search */}
        <TextInput
          placeholder="Search tours..."
          leftSection={<IconSearch size={18} />}
          styles={{
            input: {
              backgroundColor: 'white',
              borderColor: '#d1d5db',
              color: '#111827',
              '&:focus': {
                borderColor: '#284361'
              },
              '&::placeholder': {
                color: '#6b7280'
              }
            }
          }}
        />
        
        {/* Destination */}
        <Stack gap={12}>
          <Text style={{ fontWeight: 500, color: '#111827' }}>Destination</Text>
          <Stack gap={8}>
            {['Nusa Penida', 'Ubud', 'Lembongan', 'Canggu', 'Uluwatu'].map(dest => (
              <Checkbox
                key={dest}
                label={dest}
                size="sm"
                styles={{
                  input: {
                    backgroundColor: 'white',
                    borderColor: '#d1d5db',
                    '&:checked': {
                      backgroundColor: '#284361',
                      borderColor: '#284361'
                    }
                  },
                  label: {
                    fontSize: 14,
                    color: '#111827'
                  }
                }}
              />
            ))}
          </Stack>
        </Stack>
        
        {/* Duration */}
        <Stack gap={12}>
          <Text style={{ fontWeight: 500, color: '#111827' }}>Duration</Text>
          <Stack gap={8}>
            {['Half Day', 'Full Day', '2D1N', '3D2N'].map(duration => (
              <Checkbox
                key={duration}
                label={duration}
                size="sm"
                styles={{
                  input: {
                    backgroundColor: 'white',
                    borderColor: '#d1d5db',
                    '&:checked': {
                      backgroundColor: '#284361',
                      borderColor: '#284361'
                    }
                  },
                  label: {
                    fontSize: 14,
                    color: '#111827'
                  }
                }}
              />
            ))}
          </Stack>
        </Stack>
        
        {/* Tour Type */}
        <Stack gap={12}>
          <Text style={{ fontWeight: 500, color: '#111827' }}>Tour Type</Text>
          <Stack gap={8}>
            {['Private', 'Group', 'Adventure', 'Cultural'].map(type => (
              <Checkbox
                key={type}
                label={type}
                size="sm"
                styles={{
                  input: {
                    backgroundColor: 'white',
                    borderColor: '#d1d5db',
                    '&:checked': {
                      backgroundColor: '#284361',
                      borderColor: '#284361'
                    }
                  },
                  label: {
                    fontSize: 14,
                    color: '#111827'
                  }
                }}
              />
            ))}
          </Stack>
        </Stack>
        
        {/* Price Range */}
        <Stack gap={12}>
          <Text style={{ fontWeight: 500, color: '#111827' }}>Price Range</Text>
          <Slider
            min={0}
            max={2000000}
            value={priceRange[1]}
            onChange={(value) => setPriceRange([0, value])}
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
            <Text size="sm" style={{ color: '#6b7280' }}>
              Rp {priceRange[0].toLocaleString('id-ID')}
            </Text>
            <Text size="sm" style={{ color: '#6b7280' }}>
              Rp {priceRange[1].toLocaleString('id-ID')}
            </Text>
          </Group>
        </Stack>
        
        {/* Apply Button */}
        <Button
          fullWidth
          style={{
            backgroundColor: '#284361',
            color: 'white',
            fontWeight: 500,
            paddingTop: 12,
            paddingBottom: 12
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