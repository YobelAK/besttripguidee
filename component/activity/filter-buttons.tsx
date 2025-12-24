'use client';

import React from 'react';
import { Group, Button } from '@mantine/core';
import { IconMountain, IconSun, IconUsers, IconHeart, IconBuilding } from '@tabler/icons-react';

interface FilterButtonsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function FilterButtons({
  activeFilter,
  onFilterChange
}: FilterButtonsProps) {
  const filters = [
    { id: 'all', label: 'All', icon: null },
    { id: 'adventure', label: 'Adventure', icon: IconMountain },
    { id: 'lifestyle', label: 'Lifestyle', icon: IconSun },
    { id: 'culture', label: 'Culture', icon: IconBuilding },
    { id: 'family', label: 'Family', icon: IconUsers },
    { id: 'wellness', label: 'Wellness', icon: IconHeart }
  ];

  return (
    <Group gap="sm" wrap="wrap">
      {filters.map((filter) => {
        const Icon = filter.icon as any;
        const isActive = activeFilter === filter.id;
        return (
          <Button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            variant={isActive ? 'filled' : 'light'}
            color={isActive ? '#284361' : 'gray'}
            size="sm"
            leftSection={Icon ? <Icon size={16} /> : undefined}
            style={{
              backgroundColor: isActive ? '#284361' : '#f8f9fa',
              color: isActive ? 'white' : '#495057'
            }}
          >
            {filter.label}
          </Button>
        );
      })}
    </Group>
  );
}
