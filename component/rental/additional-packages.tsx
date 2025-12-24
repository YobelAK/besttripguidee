import React from 'react';
import { Card, Stack, Title, Text, SimpleGrid, Group, Image } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

export interface PackageItem {
  id: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  confirmed: boolean;
}

export interface AdditionalPackagesProps {
  packages: PackageItem[];
  footerNote?: string;
  ['data-id']?: string;
}

export function AdditionalPackages({
  packages,
  footerNote = 'Your add-on activities will be coordinated automatically upon arrival at Nusa Penida.',
  ['data-id']: dataId,
}: AdditionalPackagesProps) {
  return (
    <Card withBorder radius="md" p="xl" mb="xl" bg="white" data-id={dataId} aria-label="Additional packages included in booking">
      <Stack gap="md">
        <Title order={2} size="xl" fw={600} c="#284361">
          Additional Packages Included
        </Title>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
          {packages.map((pkg) => (
            <Group
              key={pkg.id}
              align="center"
              gap="md"
              p="md"
              style={{ border: '1px solid #f3f4f6', borderRadius: 16, backgroundColor: 'white' }}
            >
              <Image
                src={pkg.imageUrl}
                alt={pkg.imageAlt}
                w={60}
                h={60}
                radius={48}
                style={{ objectFit: 'cover', flexShrink: 0 }}
              />
              <Stack gap={6} style={{ flex: 1 }}>
                <Text size="lg" fw={700} c="#111827">
                  {pkg.title}
                </Text>
                {pkg.confirmed ? (
                  <Group gap={8} align="center" c="#284361">
                    <IconCheck size={20} aria-hidden="true" />
                    <Text size="sm">Confirmed</Text>
                  </Group>
                ) : null}
              </Stack>
            </Group>
          ))}
        </SimpleGrid>
        {footerNote ? (
          <Text size="sm" c="dimmed">
            {footerNote}
          </Text>
        ) : null}
      </Stack>
    </Card>
  );
}
