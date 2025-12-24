import React from 'react';
import { Box } from '@mantine/core';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PromotionDetail } from '@/component/special-offers/PromotionDetail';

export default function Page() {
  return (
    <Box style={{ width: '100%', minHeight: '100vh', backgroundColor: '#ffffff' }}>
      <Header />
      <PromotionDetail />
      <Footer />
    </Box>
  );
}