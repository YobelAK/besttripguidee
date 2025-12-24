'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container, Box, Group, Text, SimpleGrid, Stack, Title, Grid, GridCol } from '@mantine/core';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProgressIndicator } from '@/component/fastboat/progress-indicator';
import { FilterButtons } from '@/component/fastboat/filter-buttons';
import { AddOnCard } from '@/component/fastboat/addon-card';
import { BookingSummary } from '@/component/fastboat/booking-summary';
import { WatersportAdventureDetail } from '@/component/fastboat/WatersportAdventureDetail';
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
      id: 'snorkeling-experience',
      title: 'Snorkeling Experience',
      description: 'Explore vibrant coral reefs with a guided snorkeling session',
      duration: '2 hours',
      price: 150000,
      originalPrice: 250000,
      discount: '-40% OFF',
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80',
      badge: 'Popular',
      category: 'watersport',
      location: 'Nusa Penida',
      availability: 'Daily',
      about: 'Discover the underwater world of Nusa Penida with experienced guides.',
      included: ['Snorkeling equipment', 'Guide', 'Safety briefing']
    },
    {
      id: 'beachclub-access',
      title: 'VIP Beach Club Access',
      description: 'Relax at an exclusive beach club with welcome drink',
      duration: '3 hours',
      price: 120000,
      originalPrice: 180000,
      discount: '33% OFF',
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80',
      badge: 'Popular',
      category: 'beach-club',
      location: 'Nusa Penida',
      availability: 'Daily',
      about: 'Enjoy beachside relaxation with premium facilities and views.',
      included: ['Entrance ticket', 'Welcome drink']
    },
    {
      id: 'island-tour',
      title: 'Nusa Penida Island Tour',
      description: 'Visit Kelingking, Broken Beach, and Angel Billabong',
      duration: '6 hours',
      price: 350000,
      originalPrice: 500000,
      discount: '30% OFF',
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80',
      badge: 'Limited Offer',
      category: 'tours',
      location: 'Nusa Penida',
      availability: 'Daily',
      about: 'Full-day tour to top Nusa Penida attractions with transport.',
      included: ['Transport', 'Guide', 'Photo stops']
    },
    {
      id: 'combo-package',
      title: 'Combo: Snorkeling + Beach Club',
      description: 'Combine snorkeling fun with beach club relaxation',
      duration: '4 hours',
      price: 250000,
      originalPrice: 380000,
      discount: '34% OFF',
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80',
      category: 'combo',
      location: 'Nusa Penida',
      availability: 'Daily',
      about: 'Best value combo for an unforgettable island day.',
      included: ['Snorkeling equipment', 'Beach club entry', 'Welcome drink']
    }
  ];

  const filteredAddOns = activeFilter === 'all' ? addOns : addOns.filter(addon => addon.category === activeFilter);

  const handleToggleAddOn = (id: string) => {
    setSelectedAddOns(prev =>
      prev.includes(id) ? prev.filter(addOnId => addOnId !== id) : [...prev, id]
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
      <Box>
        <Container size="xl" pt="xl">
          <ProgressIndicator currentStep={2} />
        </Container>
      </Box>
      <Container size="xl" py="xl">
        <Grid gutter="xl">
          <GridCol span={{ base: 12, lg: 8 }}>
            <Stack gap="xl">
              <Stack gap="md">
                <Title order={1} size="xl" fw={700} c="dark">Choose Your Add-Ons</Title>
                <Text c="dimmed" mb="md">Enhance your trip with these amazing experiences</Text>
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
              trip="Sanur → Nusa Penida"
              passengersList={[{ nationality: 'ID', ageCategory: 'Adult' }, { nationality: 'ID', ageCategory: 'Adult' }]}
              passengerSubtotal={200000}
              portFee={10000}
              addOns={selectedAddOnsData}
              onContinue={() => router.push('/fastboat/book/payment')}
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
