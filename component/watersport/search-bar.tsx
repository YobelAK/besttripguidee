import React from 'react';
import { Container, Paper, SimpleGrid, Text, Select, TextInput, Button } from '@mantine/core';
import { IconMapPin, IconUsers, IconCalendar, IconSearch } from '@tabler/icons-react';

export function SearchBar() {
  return (
    <Container 
      size="xl" 
      style={{ 
        marginTop: '-2rem', 
        position: 'relative', 
        zIndex: 20 
      }}
    >
      <Paper shadow="lg" p="xl" bg="white" radius="lg">
        <SimpleGrid cols={{ base: 1, md: 4 }} spacing="md">
          {/* Destination */}
          <div>
            <Text size="sm" style={{ color: '#6b7280', marginBottom: '0.5rem' }}>
              Destination
            </Text>
            <Select
              leftSection={<IconMapPin size={20} style={{ color: '#9ca3af' }} />}
              placeholder="Select Destination"
              data={[
                { value: 'nusa-penida', label: 'Nusa Penida' },
                { value: 'ubud', label: 'Ubud' },
                { value: 'lembongan', label: 'Lembongan' },
                { value: 'canggu', label: 'Canggu' }
              ]}
              styles={{
                input: {
                  backgroundColor: '#f5f7fa',
                  color: '#111827',
                  border: '1px solid #d1d5db',
                  '&:focus': {
                    borderColor: '#284361'
                  }
                }
              }}
            />
          </div>

          {/* Watersport Type */}
          <div>
            <Text size="sm" style={{ color: '#6b7280', marginBottom: '0.5rem' }}>
              Watersport Type
            </Text>
            <Select
              leftSection={<IconUsers size={20} style={{ color: '#9ca3af' }} />}
              placeholder="Select Watersport Type"
              data={[
                { value: 'snorkeling', label: 'Snorkeling' },
                { value: 'diving', label: 'Diving' },
                { value: 'banana-boat', label: 'Banana Boat' },
                { value: 'jet-ski', label: 'Jet Ski' },
                { value: 'parasailing', label: 'Parasailing' },
                { value: 'flyboard', label: 'Flyboard' }
              ]}
              styles={{
                input: {
                  backgroundColor: '#f5f7fa',
                  color: '#111827',
                  border: '1px solid #d1d5db',
                  '&:focus': {
                    borderColor: '#284361'
                  }
                }
              }}
            />
          </div>

          {/* Date */}
          <div>
            <Text size="sm" style={{ color: '#6b7280', marginBottom: '0.5rem' }}>
              Date
            </Text>
            <TextInput
              type="date"
              leftSection={<IconCalendar size={20} style={{ color: '#9ca3af' }} />}
              placeholder="mm/dd/yyyy"
              styles={{
                input: {
                  backgroundColor: '#f5f7fa',
                  color: '#111827',
                  border: '1px solid #d1d5db',
                  '&:focus': {
                    borderColor: '#284361'
                  }
                }
              }}
            />
          </div>

          {/* Search Button */}
          <div style={{ display: 'flex', alignItems: 'end' }}>
            <Button
              fullWidth
              leftSection={<IconSearch size={20} />}
              style={{
                backgroundColor: '#284361',
                fontWeight: 500,
                padding: '8px 24px'
              }}
              styles={{
                root: {
                  '&:hover': {
                    backgroundColor: '#1e3a52'
                  }
                }
              }}
            >
              Search Watersports
            </Button>
          </div>
        </SimpleGrid>
      </Paper>
    </Container>
  );
}