'use client';

import React from 'react';
import { Box } from '@mantine/core';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { MethodologyHero } from '@/components/methodology/hero';
import { ProcessSteps } from '@/components/methodology/process-steps';
import { Principles } from '@/components/methodology/principles';

export default function MethodologyPage() {
  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <Header />
      <MethodologyHero />
      <ProcessSteps />
      <Principles />
      <Footer />
    </Box>
  );
}
