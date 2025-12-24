import React from 'react';
import { Box, Container, SimpleGrid, Select, TextInput, Stack, Text } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

export function FilterSection() {
  return (
    <Box style={{ width: '100%', padding: '0 32px 32px' }}>
      <Container size="xl">
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing={16}>
          <div>
            <Stack gap={8}>
              <Text size="sm" style={{ fontWeight: 500, color: '#374151' }}>
                Category
              </Text>
              <Select
                data={[
                  { value: 'all', label: 'All' },
                  { value: 'speedboat', label: 'Speedboat' },
                  { value: 'watersport', label: 'Watersport' },
                  { value: 'beach-club', label: 'Beach Club' },
                  { value: 'tours', label: 'Tours' }
                ]}
                defaultValue="all"
                styles={{
                  input: {
                    backgroundColor: '#f7fafc',
                    color: '#111827',
                    borderColor: '#e5e7eb',
                    '&:focus': {
                      borderColor: '#284361',
                      boxShadow: '0 0 0 2px rgba(40, 67, 97, 0.2)'
                    }
                  }
                }}
              />
            </Stack>
          </div>
          <div>
            <Stack gap={8}>
              <Text size="sm" style={{ fontWeight: 500, color: '#374151' }}>
                Sort by
              </Text>
              <Select
                data={[
                  { value: 'latest', label: 'Latest' },
                  { value: 'popular', label: 'Popular' },
                  { value: 'discount', label: 'Discount' },
                  { value: 'ending-soon', label: 'Ending Soon' }
                ]}
                defaultValue="latest"
                styles={{
                  input: {
                    backgroundColor: '#f7fafc',
                    color: '#111827',
                    borderColor: '#e5e7eb',
                    '&:focus': {
                      borderColor: '#284361',
                      boxShadow: '0 0 0 2px rgba(40, 67, 97, 0.2)'
                    }
                  }
                }}
              />
            </Stack>
          </div>
          <div>
            <Stack gap={8}>
              <Text size="sm" style={{ fontWeight: 500, color: '#374151' }}>
                Search
              </Text>
              <TextInput
                placeholder="Search promo name or code..."
                leftSection={<IconSearch size={20} style={{ color: '#9ca3af' }} />}
                styles={{
                  input: {
                    backgroundColor: '#f7fafc',
                    color: '#111827',
                    borderColor: '#e5e7eb',
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
            </Stack>
          </div>
        </SimpleGrid>
      </Container>
    </Box>
  );
}