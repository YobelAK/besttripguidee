'use client';

import React, { Suspense, useState } from 'react';
import { Container, Box, SimpleGrid, Stack, Title, Text, Grid } from '@mantine/core';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProgressIndicator } from '@/components/watersport/progress-indicator';
import { BookingReview } from '@/components/watersport/booking-review';
import { PaymentSummary } from '@/components/watersport/payment-summary';
import { PaymentMethodSelector } from '@/components/watersport/payment-method-selector';
import { useRouter } from 'next/navigation';

export default function PaymentPage() {
  const router = useRouter();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('virtual-account');
  const [promoCode, setPromoCode] = useState('');

  const handlePayment = () => {
    // Navigate to ticket page
    router.push('/watersport/book/ticket');
  };

  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <Suspense fallback={<Box component="header" style={{ height: 64 }} />}>
        <Header />
      </Suspense>
      
      <Box component="main">
        <Container size="xl" py="xl">
          {/* Progress Indicator */}
          <Box mb="xl">
            <ProgressIndicator currentStep={3} />
          </Box>

          {/* Page Title */}
          <Stack gap="xs" mb="xl">
            <Title order={1} size="2xl" fw={700} c="#284361">
              Payment
            </Title>
            <Text c="dimmed">
              Review your booking details and complete your payment
            </Text>
          </Stack>

          {/* Main Content */}
          <Grid gutter="xl">
            {/* Left Column - Booking Review */}
            <Grid.Col span={{ base: 12, lg: 8 }}>
              <Stack gap="xl">
                <BookingReview 
                  promoCode={promoCode}
                  setPromoCode={setPromoCode}
                />
                
                <PaymentMethodSelector 
                  selectedMethod={selectedPaymentMethod}
                  onMethodChange={setSelectedPaymentMethod}
                />
              </Stack>
            </Grid.Col>

            {/* Right Column - Payment Summary */}
            <Grid.Col span={{ base: 12, lg: 4 }}>
              <Box style={{ position: 'sticky', top: 32 }}>
                <PaymentSummary 
                  onContinue={handlePayment}
                  buttonText="Pay Now"
                />
              </Box>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
