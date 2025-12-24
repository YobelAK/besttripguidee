import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { TravelGuideHero } from '@/components/homepage/TravelGuideHero';
import { TripGuide } from '@/components/homepage/TripGuide';
import { ExploreProducts } from '@/components/homepage/ExploreProducts';
import { TopPartnersTable } from '@/components/homepage/TopPartnersTable';
import { Testimonials } from '@/components/homepage/testimonials copy';
import { Box } from '@mantine/core';

export default function Page() {
  return (
    <>
      <Header />
      <TravelGuideHero />
      <Box my="xl">
        <TripGuide />
      </Box>

      {/* <Box my="xl">
        <ExploreProducts />
      </Box> */}
      <Box my="xl">
        <TopPartnersTable />
      </Box>
      <Box my="xl">
        <Testimonials />
      </Box>
      <Footer />
    </>
  );
}
