'use client';

import React, { useState } from 'react';
import { Container, Box, Stack, Title, Text, Grid } from '@mantine/core';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProgressIndicator } from '@/components/rental/progress-indicator';
import { BookingReview } from '@/components/rental/booking-review';
import { PaymentSummary } from '@/components/rental/payment-summary';
import { PaymentMethodSelector } from '@/components/rental/payment-method-selector';
import { useRouter } from 'next/navigation';

export default function PaymentPage() {
  const router = useRouter();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('virtual-account');
  const [promoCode, setPromoCode] = useState('');

  const handlePayment = () => {
    router.push('/rental/book/ticket');
  };

  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <Header />
      <Box component="main">
        <Container size="xl" py="xl">
          <Box mb="xl">
            <ProgressIndicator currentStep={3} />
          </Box>
          <Stack gap="xs" mb="xl">
            <Title order={1} size="2xl" fw={700} c="#284361">
              Payment
            </Title>
            <Text c="dimmed">
              Review your booking details and complete your payment
            </Text>
          </Stack>
          <Grid gutter="xl">
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

