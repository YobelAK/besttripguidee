'use client';

import React from 'react';
import { Box, Container, Group, Drawer, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconFilter } from '@tabler/icons-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/watersport/hero';
import { SearchBar } from '@/components/watersport/search-bar';
import { FilterSidebar } from '@/components/watersport/filter-sidebar';
import { TourGrid } from '@/components/watersport/tour-grid';
import { TopDestinations } from '@/components/watersport/top-destinations';

export default function WatersportPage() {
  const [sidebarOpened, { open, close }] = useDisclosure(false);

  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <Header />
      {/* Hero Section */}
      <Hero />
      
      {/* Search Bar */}
      <SearchBar />
      {/* Mobile Filters Toggle */}
      <Box hiddenFrom="md" style={{ paddingLeft: 16, paddingRight: 16, marginTop: 12 }}>
        <Button
          variant="outline"
          leftSection={<IconFilter size={18} />}
          onClick={open}
          styles={{
            root: {
              borderColor: '#d1d5db',
              color: '#1f2937',
              backgroundColor: 'white'
            }
          }}
        >
          Filter Tours
        </Button>
      </Box>
      <Drawer opened={sidebarOpened} onClose={close} title="Filters" size="md" padding="md">
        <FilterSidebar />
      </Drawer>
      
      {/* Main Content */}
      <Container size="xl" py="xl">
        <Group gap="xl" align="flex-start">
          {/* Desktop Sidebar */}
          <Box visibleFrom="md">
            <FilterSidebar />
          </Box>
          <TourGrid />
        </Group>
      </Container>
      
      {/* Top Destinations Section */}
      <TopDestinations />
      
      <Footer />
    </Box>
  );
}