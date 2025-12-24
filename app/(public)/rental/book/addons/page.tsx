'use client';

import React, { useState } from 'react';
import { Container, Box, Group, Text, SimpleGrid, Stack, Title, Grid, GridCol } from '@mantine/core';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProgressIndicator } from '@/components/rental/progress-indicator';
import { FilterButtons } from '@/components/rental/filter-buttons';
import { AddOnCard } from '@/components/rental/addon-card';
import { BookingSummary } from '@/components/rental/booking-summary';
import { WatersportAdventureDetail } from '@/components/rental/WatersportAdventureDetail';
import { useRouter } from 'next/navigation';

interface AddOn {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  image: string;
  badge?: 'Popular' | 'Limited Offer';
  category: string;
  location?: string;
  availability?: string;
  about?: string;
  included?: string[];
}

export default function AddOnsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [selectedAddOnPopup, setSelectedAddOnPopup] = useState<AddOn | null>(null);
  const router = useRouter();

  const addOns: AddOn[] = [
    {
      id: 'gps-device',
      title: 'GPS Device Rental',
      description: 'Portable GPS device for easy navigation',
      duration: 'Per Day',
      price: 50000,
      image: 'https://www.lavacarrental.is/media/1/car-rental-in-iceland-11.jpg',
      category: 'equipment',
      availability: 'Daily',
      about: 'Navigate Bali confidently with a dedicated GPS device.',
      included: ['GPS unit', 'Charger', 'Mount']
    },
    {
      id: 'child-seat',
      title: 'Child Seat',
      description: 'Safety seat for children aged 1–5',
      duration: 'Per Day',
      price: 40000,
      image: 'https://www.lavacarrental.is/media/1/car-rental-in-iceland-11.jpg',
      category: 'equipment',
      availability: 'Daily',
      about: 'Keep your child safe with a certified child seat.',
      included: ['Child seat', 'Installation']
    },
    {
      id: 'driver-upgrade',
      title: 'English-speaking Driver',
      description: 'Upgrade to an experienced English-speaking driver',
      duration: 'Full Day',
      price: 100000,
      image: 'https://www.lavacarrental.is/media/1/car-rental-in-iceland-11.jpg',
      category: 'service',
      availability: 'Daily',
      about: 'Enjoy a smooth trip with a friendly driver.',
      included: ['Driver', 'Fuel', 'Toll fees']
    }
  ];

  const filteredAddOns = activeFilter === 'all' 
    ? addOns 
    : addOns.filter(addon => addon.category === activeFilter);

  const handleToggleAddOn = (id: string) => {
    setSelectedAddOns(prev => 
      prev.includes(id) 
        ? prev.filter(addOnId => addOnId !== id) 
        : [...prev, id]
    );
  };

  const handleOpenPopup = (id: string) => {
    const addOn = addOns.find(addon => addon.id === id);
    if (addOn) {
      setSelectedAddOnPopup(addOn);
    }
  };

  const handleCloseModal = () => {
    setSelectedAddOnPopup(null);
  };

  const handleAddToTripFromModal = () => {
    if (selectedAddOnPopup) {
      handleToggleAddOn(selectedAddOnPopup.id);
      setSelectedAddOnPopup(null);
    }
  };

  const selectedAddOnsData = addOns
    .filter(addon => selectedAddOns.includes(addon.id))
    .map(addon => ({
      id: addon.id,
      title: addon.title,
      price: addon.price,
      originalPrice: addon.originalPrice
    }));
    
  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <Header />
      <ProgressIndicator currentStep={2} />
      <Container size="xl" py="xl">
        <Grid gutter="xl">
          <GridCol span={{ base: 12, lg: 8 }}>
            <Stack gap="xl">
              <Stack gap="md">
                <Title order={1} size="xl" fw={700} c="dark">Choose Your Add-Ons</Title>
                <Text c="dimmed" mb="md">Enhance your rental with these options</Text>
                <FilterButtons 
                  activeFilter={activeFilter} 
                  onFilterChange={setActiveFilter} 
                />
              </Stack>
              <SimpleGrid 
                cols={{ base: 1, md: 2 }} 
                spacing="xl"
              >
                {filteredAddOns.map(addon => (
                  <AddOnCard 
                    key={addon.id} 
                    {...addon} 
                    isAdded={selectedAddOns.includes(addon.id)} 
                    onToggle={handleToggleAddOn}
                    onOpenPopup={handleOpenPopup}
                  />
                ))}
              </SimpleGrid>
            </Stack>
          </GridCol>
          <GridCol span={{ base: 12, lg: 4 }}>
            <BookingSummary 
              trip="Car Rental + Driver" 
              departureDate="12 Oct 2025, 10:00 AM" 
              passengers="4 Passengers" 
              passengerPrice={550000} 
              portFee={0} 
              addOns={selectedAddOnsData} 
              onContinue={() => router.push('/rental/book/payment')}
              buttonText="Continue to Payment"
            />
          </GridCol>
        </Grid>
      </Container>
      {selectedAddOnPopup && (
        <div 
          style={{
            position: 'fixed',
            inset: 0 as unknown as number,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: 8
          }}
        >
          <div style={{ width: '100%', maxWidth: 860, maxHeight: '90vh', overflowY: 'auto', borderRadius: 12 }}>
            <WatersportAdventureDetail
              onBack={handleCloseModal}
              onAddToTrip={handleAddToTripFromModal}
            />
          </div>
        </div>
      )}
      <Footer />
    </Box>
  );
}
