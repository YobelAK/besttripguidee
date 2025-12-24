'use client';

import React from 'react';
import { Box } from '@mantine/core';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { NewsHero } from '@/components/news/hero';
import { NewsList } from '@/components/news/news-list';

export default function NewsPage() {
  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <Header />
      <NewsHero />
      <NewsList />
      <Footer />
    </Box>
  );
}
