'use client';

import React, { useState } from 'react';
import { Container, Box, Group, Text, SimpleGrid, Stack, Title, Grid, GridCol } from '@mantine/core';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProgressIndicator } from '@/components/activity/progress-indicator';
import { FilterButtons } from '@/components/activity/filter-buttons';
import { AddOnCard } from '@/components/activity/addon-card';
import { BookingSummary } from '@/components/activity/booking-summary';
import { WatersportAdventureDetail } from '@/components/activity/WatersportAdventureDetail';
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
      id: 'ubud-rafting',
      title: 'Ubud Rafting Adventure',
      description: 'White water rafting through scenic jungle rivers in Ubud',
      duration: 'Half Day',
      price: 150000,
      originalPrice: 250000,
      discount: '-40% OFF',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
      badge: 'Popular' as const,
      category: 'adventure',
      location: 'Ubud',
      availability: 'Daily',
      about: 'Experience thrilling rapids guided by professional instructors.',
      included: ['Safety equipment', 'Instructor', 'Insurance']
    },
    {
      id: 'bali-swing',
      title: 'Bali Swing Experience',
      description: 'Swing over jungles and rivers with spectacular views',
      duration: '1 hour',
      price: 200000,
      originalPrice: 300000,
      discount: '33% OFF',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
      badge: 'Limited Offer' as const,
      category: 'lifestyle',
      location: 'Ubud',
      availability: 'Daily',
      about: 'Capture the perfect photo moment at Bali Swing.',
      included: ['Entry ticket', 'Swing session', 'Photo spots']
    },
    {
      id: 'cooking-class',
      title: 'Balinese Cooking Class',
      description: 'Learn to cook authentic Balinese dishes with local chefs',
      duration: '3 hours',
      price: 150000,
      originalPrice: 200000,
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
      category: 'culture',
      location: 'Ubud',
      availability: 'Daily',
      about: 'Hands-on cooking class using fresh local ingredients.',
      included: ['Ingredients', 'Chef guidance', 'Recipe booklet']
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
                <Text c="dimmed" mb="md">Enhance your activity with these experiences</Text>
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
              trip="Ubud Rafting Adventure" 
              departureDate="12 Oct 2025, 10:00 AM" 
              passengers="2 Participants" 
              passengerPrice={450000} 
              portFee={20000} 
              addOns={selectedAddOnsData} 
              onContinue={() => router.push('/activity/book/payment')}
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
