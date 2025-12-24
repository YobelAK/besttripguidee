import React from 'react';
import { Container, Paper, SimpleGrid, Text, Select, TextInput, Button } from '@mantine/core';
import { IconMapPin, IconUsers, IconCalendar, IconSearch } from '@tabler/icons-react';

export function SearchBar() {
  return (
    <Container size="xl" style={{ marginTop: -32, position: 'relative', zIndex: 20 }}>
      <Paper shadow="lg" radius="xl" p="xl" bg="white">
        <SimpleGrid cols={{ base: 1, md: 4 }} spacing="md">
          <div>
            <Text size="sm" style={{ color: '#6b7280', marginBottom: 8 }}>
              Destination
            </Text>
            <Select
              placeholder="Select Destination"
              data={[
                { value: 'nusa-penida', label: 'Nusa Penida' },
                { value: 'ubud', label: 'Ubud' },
                { value: 'uluwatu', label: 'Uluwatu' }
              ]}
              leftSection={<IconMapPin size={20} style={{ color: '#9ca3af' }} />}
              styles={{
                input: {
                  backgroundColor: '#f5f7fa',
                  color: '#111827',
                  borderColor: '#d1d5db',
                  '&:focus': {
                    borderColor: '#284361',
                    boxShadow: '0 0 0 2px rgba(40, 67, 97, 0.2)'
                  }
                }
              }}
            />
          </div>
          <div>
            <Text size="sm" style={{ color: '#6b7280', marginBottom: 8 }}>
              Tour Type
            </Text>
            <Select
              placeholder="Select Tour Type"
              data={[
                { value: 'private', label: 'Private' },
                { value: 'group', label: 'Group' },
                { value: 'adventure', label: 'Adventure' }
              ]}
              leftSection={<IconUsers size={20} style={{ color: '#9ca3af' }} />}
              styles={{
                input: {
                  backgroundColor: '#f5f7fa',
                  color: '#111827',
                  borderColor: '#d1d5db',
                  '&:focus': {
                    borderColor: '#284361',
                    boxShadow: '0 0 0 2px rgba(40, 67, 97, 0.2)'
                  }
                }
              }}
            />
          </div>
          <div>
            <Text size="sm" style={{ color: '#6b7280', marginBottom: 8 }}>
              Date
            </Text>
            <TextInput
              placeholder="mm/dd/yyyy"
              leftSection={<IconCalendar size={20} style={{ color: '#9ca3af' }} />}
              styles={{
                input: {
                  backgroundColor: '#f5f7fa',
                  color: '#111827',
                  borderColor: '#d1d5db',
                  '&:focus': {
                    borderColor: '#284361',
                    boxShadow: '0 0 0 2px rgba(40, 67, 97, 0.2)'
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
              Search Tours
            </Button>
          </div>
        </SimpleGrid>
      </Paper>
    </Container>
  );
}