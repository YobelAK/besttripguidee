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

          <div>
            <Text size="sm" style={{ color: '#6b7280', marginBottom: '0.5rem' }}>
              Activity Type
            </Text>
            <Select
              leftSection={<IconUsers size={20} style={{ color: '#9ca3af' }} />}
              placeholder="Select Activity Type"
              data={[
                { value: 'atv', label: 'ATV' },
                { value: 'rafting', label: 'Rafting' },
                { value: 'swing', label: 'Bali Swing' },
                { value: 'trekking', label: 'Trekking' },
                { value: 'cooking', label: 'Cooking Class' },
                { value: 'spa', label: 'Spa' }
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
              Search Activities
            </Button>
          </div>
        </SimpleGrid>
      </Paper>
    </Container>
  );
}

