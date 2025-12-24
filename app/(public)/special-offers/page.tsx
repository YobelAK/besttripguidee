import React from 'react';
import { Box } from '@mantine/core';
import { HeroSection } from '@/component/special-offers/hero-section';
import { FilterSection } from '@/component/special-offers/filter-section';
import { OffersGrid } from '@/component/special-offers/offers-grid';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PromoPage() {
  return (
    <Box style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Header />
      <HeroSection />
      <FilterSection />
      <OffersGrid />
      <Footer />
    </Box>
  );
}