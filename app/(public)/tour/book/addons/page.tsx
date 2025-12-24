'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container, Box, Group, Text, SimpleGrid, Stack, Title, Grid, GridCol } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProgressIndicator } from '@/components/tour/progress-indicator';
import { FilterButtons } from '@/components/tour/filter-buttons';
import { AddOnCard } from '@/components/tour/addon-card';
import { BookingSummary } from '@/components/tour/booking-summary';
import { WatersportAdventureDetail } from '@/components/tour/WatersportAdventureDetail';
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
      id: 'guided-temple-visit',
      title: 'Guided Temple Visit',
      description: 'Explore Ubud Royal Palace & Saraswati Temple with a local guide',
      duration: '2 hours',
      price: 150000,
      originalPrice: 250000,
      discount: '-40% OFF',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
      badge: 'Popular' as const,
      category: 'culture',
      location: 'Ubud',
      availability: 'Daily',
      about: 'Discover Ubud\'s heritage landmarks with insights from a certified local guide.',
      included: ['Entrance fees', 'Local guide', 'Temple etiquette briefing']
    },
    {
      id: 'rice-terrace-walk',
      title: 'Jatiluwih Rice Terrace Walk',
      description: 'Guided walk through UNESCO-listed rice terraces',
      duration: '3 hours',
      price: 200000,
      originalPrice: 300000,
      discount: '33% OFF',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80',
      badge: 'Popular' as const,
      category: 'nature',
      location: 'Tabanan',
      availability: 'Daily',
      about: 'Experience breathtaking landscapes and learn about Bali\'s Subak irrigation system.',
      included: ['Guide', 'Mineral water', 'Photo spots']
    },
    {
      id: 'traditional-dance',
      title: 'Kecak Fire Dance Ticket',
      description: 'Evening performance at Uluwatu Temple cliffside',
      duration: '1.5 hours',
      price: 175000,
      originalPrice: 250000,
      discount: '30% OFF',
      image: 'https://d3uyff779abz3k.cloudfront.net/-tanahlotbali-/image/Tanah-Lot-Kecak-Fire-Dance.jpg',
      badge: 'Limited Offer' as const,
      category: 'culture',
      location: 'Uluwatu',
      availability: 'Daily',
      about: 'Witness Bali\'s iconic Kecak & fire dance with sunset views.',
      included: ['Show ticket', 'Seating', 'On-site assistance']
    },
    {
      id: 'balinese-lunch',
      title: 'Balinese Lunch Package',
      description: 'Authentic local cuisine served in a beautiful setting',
      duration: '1.5 hours',
      price: 85000,
      originalPrice: 120000,
      discount: '29% OFF',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
      category: 'food',
      location: 'Ubud',
      availability: 'Daily',
      about: 'Savor authentic Balinese cuisine prepared with traditional recipes and fresh local ingredients.',
      included: ['Traditional Balinese meal', 'Welcome drink', 'Cultural ambiance']
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
      
      {/* Back Button */}
      

      {/* <ProgressIndicator currentStep={2} />
      <Container size="xl" pt="xl">
        <Link href="/tour/book/" style={{ textDecoration: 'none' }}>
          <Group gap="xs" style={{ cursor: 'pointer', color: '#284361', transition: 'color 0.2s ease' }}>
            <IconArrowLeft size={20} />
            <Text fw={500} style={{ ':hover': { color: '#1f3450' } }}>Back to Product Detail</Text>
          </Group>
        </Link>
      </Container> */}
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
                trip="Ubud Cultural Highlights — Full Day" 
                departureDate="12 Oct 2025, 08:00 AM" 
                passengers="2 Adults" 
                passengerPrice={450000} 
                portFee={50000} 
                addOns={selectedAddOnsData} 
                onContinue={() => router.push('/tour/book/payment')}
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
