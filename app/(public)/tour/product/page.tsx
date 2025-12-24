import React from 'react';
import { Box, Container, Grid, GridCol, Stack, Title, Text } from '@mantine/core';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { TourProductHeroSection } from '@/components/tour/product/hero-section';
import { TourOverview } from '@/components/tour/product/tour-overview';
import { InclusionsExclusions } from '@/components/tour/product/inclusions-exclusions';
import { TourItinerary } from '@/components/tour/product/itinerary';
import { TourReviews } from '@/components/tour/product/reviews';
import { TourLocationMap } from '@/components/tour/product/location-map';
import { TourBookingCard } from '@/components/tour/product/booking-card';

export default function TourProductPage() {
  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#f9fafb', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box component="main" style={{ flex: 1 }}>
        <Container size="xl" px={{ base: 16, sm: 24, lg: 32 }}>
          <Grid gutter={48}>
            <GridCol span={{ base: 12, lg: 8 }}>
              <Stack gap="xl">
                <TourProductHeroSection />
                <Stack gap={4}>
                  <Title order={2}>Full-Day Bali Highlights Tour</Title>
                  <Text c="dimmed">Best for first-timers • Free pickup • Private guide</Text>
                </Stack>
                <TourOverview />
                <InclusionsExclusions />
                <TourItinerary />
                <TourReviews />
                <TourLocationMap />
              </Stack>
            </GridCol>
            <GridCol span={{ base: 12, lg: 4 }} style={{ display: 'flex', justifyContent: 'flex-end', position: 'sticky', top: 24, alignSelf: 'start' }}>
              <TourBookingCard />
            </GridCol>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
