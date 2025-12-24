import React from 'react';
import { Box, Container, Grid, GridCol } from '@mantine/core';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/watersport/product/HeroSection';
import { ActivityHeaderCard, ActivityMainLeft, ActivityBookingRight } from '@/components/watersport/product/ActivityDetails';
import { LocationMap } from '@/components/watersport/product/LocationMap';
import { Reviews } from '@/components/watersport/product/Reviews';

export default function WatersportProductPage() {
  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#f9fafb', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box component="main" style={{ flex: 1 }}>
        <Container size="xl" px={{ base: 16, sm: 24, lg: 32 }}>
          {/* Baris atas: Hero (kiri) + Activity Header Card (kanan) */}
          <Grid gutter={48}>
            <GridCol span={{ base: 12, lg: 7 }}>
              <HeroSection compact />
            </GridCol>
            <GridCol span={{ base: 12, lg: 5 }}>
              <ActivityHeaderCard />
            </GridCol>
          </Grid>

          {/* Konten utama: kiri (overview + reviews + map), kanan (booking sticky) */}
          <Grid gutter={48} mt={16}>
            <GridCol span={{ base: 12, lg: 8 }}>
              <ActivityMainLeft />
              <Reviews compact />
              <LocationMap compact />
            </GridCol>
            <GridCol span={{ base: 12, lg: 4 }} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <ActivityBookingRight />
            </GridCol>
          </Grid>
        </Container>
        
      </Box>
      <Footer />
    </Box>
  );
}