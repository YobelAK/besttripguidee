"use client";

import React, { Suspense } from 'react';
import { Box, Container, Group, Drawer, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconFilter } from '@tabler/icons-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/tour/hero';
import { SearchBar } from '@/components/tour/search-bar';
import { FilterSidebar } from '@/components/tour/filter-sidebar';
import { TourGrid } from '@/components/tour/tour-grid';
import { TopDestinations } from '@/components/tour/top-destinations';
import { TourRedirector } from '@/components/tour/redirector';

export default function TourPage() {
  const [sidebarOpened, { open, close }] = useDisclosure(false);
  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <Suspense fallback={null}>
        <TourRedirector />
      </Suspense>
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
      <Container size="xl" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <Group gap="xl" align="flex-start">
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