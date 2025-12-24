'use client';

import React, { useMemo, useState } from 'react';
import { Container, Box, Group, Text, SimpleGrid, Stack, Grid, GridCol } from '@mantine/core';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProgressIndicator } from '@/components/activity/progress-indicator';
import { ContactForm } from '@/components/activity/contact-form';
import { BookingSummary } from '@/components/activity/booking-summary';
import { PassengerForm } from '@/components/tour/passenger-form';
import { useRouter } from 'next/navigation';

export default function ActivityBookingPage() {
  const router = useRouter();
  const [guestCount, setGuestCount] = useState<number>(2);
  const [contact, setContact] = useState<{ firstName: string; lastName: string; email: string; countryCode: string; phone: string; specialRequests?: string; agreed?: boolean }>({ firstName: '', lastName: '', email: '', countryCode: '+62', phone: '' });
  const [passengers, setPassengers] = useState<any[]>([]);
  const participantsLabel = useMemo(() => `${Math.max(1, guestCount)} Participants`, [guestCount]);
  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <ProgressIndicator currentStep={1} />
      <Box component="main" style={{ flex: 1 }}>
        <Container size="xl" pb="xl">
          <Grid gutter="xl">
            <GridCol span={{ base: 12, lg: 8 }}>
              <Stack gap="xl">
                <ContactForm guestCount={guestCount} onGuestCountChange={setGuestCount} onChange={setContact} />
                <PassengerForm guestCount={guestCount} onChange={setPassengers} mainContactName={`${contact.firstName || ''} ${contact.lastName || ''}`.trim()} />
              </Stack>
            </GridCol>
            <GridCol span={{ base: 12, lg: 4 }}>
              <BookingSummary 
                trip="Ubud Rafting Adventure" 
                departureDate="12 Oct 2025, 10:00 AM" 
                passengers={participantsLabel} 
                passengerPrice={450000} 
                portFee={20000} 
                onContinue={() => router.push('/activity/book/addons')}
                buttonText="Continue to Add-Ons"
              />
            </GridCol>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
