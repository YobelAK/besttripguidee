'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container, Box, Group, Text, SimpleGrid, Stack, Title, Grid, GridCol } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProgressIndicator } from '@/components/watersport/progress-indicator';
import { FilterButtons } from '@/components/watersport/filter-buttons';
import { AddOnCard } from '@/components/watersport/addon-card';
import { BookingSummary } from '@/components/watersport/booking-summary';
import { WatersportAdventureDetail } from '@/components/watersport/WatersportAdventureDetail';
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
      id: 'watersport-adventure',
      title: 'Watersport Adventure',
      description: 'Try various water activities on Jet Ski in Nusa Penida!',
      duration: '1.5 hours',
      price: 150000,
      originalPrice: 250000,
      discount: '-40% OFF',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      badge: 'Popular' as const,
      category: 'watersport',
      location: 'Nusa Penida',
      availability: 'Daily',
      about: 'Experience the thrill of riding a jet ski in the beautiful waters of Bali. Our professional instructors will guide you through a 15-minute solo ride, ensuring both safety and maximum enjoyment.',
      included: ['Professional equipment', 'Safety briefing', 'Instructor guidance', 'Insurance coverage']
    },
    {
      id: 'nusa-penida-tour',
      title: 'Nusa Penida Tour Combo',
      description: "Visit Kelingking Beach, Angel's Billabong & Crystal Bay",
      duration: '8 hours',
      price: 350000,
      originalPrice: 500000,
      discount: '30% OFF',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
      badge: 'Limited Offer' as const,
      category: 'tours',
      location: 'Nusa Penida',
      availability: 'Daily',
      about: 'Explore the most iconic spots in Nusa Penida with our comprehensive tour package. Visit the famous Kelingking Beach, swim at Angel\'s Billabong, and relax at Crystal Bay.',
      included: ['Transportation', 'Professional guide', 'Entrance fees', 'Lunch', 'Snorkeling equipment']
    },
    {
      id: 'vip-beach-club',
      title: 'VIP Beach Club Access',
      description: "Relax at Bali's premium beachfront club with drinks included",
      duration: 'Full day',
      price: 200000,
      originalPrice: 300000,
      discount: '33% OFF',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      badge: 'Popular' as const,
      category: 'beach-club',
      location: 'Seminyak',
      availability: 'Daily',
      about: 'Enjoy exclusive access to Bali\'s most luxurious beach club with premium amenities and stunning ocean views.',
      included: ['Day bed access', 'Welcome drinks', 'Pool access', 'WiFi', 'Towel service']
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
      category: 'combo',
      location: 'Ubud',
      availability: 'Daily',
      about: 'Savor authentic Balinese cuisine prepared with traditional recipes and fresh local ingredients.',
      included: ['Traditional Balinese meal', 'Welcome drink', 'Cultural performance', 'Recipe card']
    },
    {
      id: 'professional-photography',
      title: 'Professional Photography',
      description: 'Capture your memories with a professional photographer',
      duration: '2 hours',
      price: 300000,
      originalPrice: 450000,
      discount: '33% OFF',
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80',
      badge: 'Limited Offer' as const,
      category: 'combo',
      location: 'Various locations',
      availability: 'Daily',
      about: 'Professional photography session to capture your best moments in Bali\'s most beautiful locations.',
      included: ['Professional photographer', '50+ edited photos', 'Online gallery', 'Print-ready files']
    },
    {
      id: 'snorkeling-experience',
      title: 'Snorkeling Experience',
      description: 'Explore the underwater world with professional guides',
      duration: '3 hours',
      price: 120000,
      originalPrice: 200000,
      discount: '-40% OFF',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
      category: 'watersport',
      location: 'Nusa Penida',
      availability: 'Daily',
      about: 'Discover the vibrant underwater world of Nusa Penida with our experienced guides.',
      included: ['Snorkeling equipment', 'Professional guide', 'Underwater photos', 'Safety briefing']
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
      

      <ProgressIndicator currentStep={2} />
      {/*<Container size="xl" pt="xl">
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
                trip="Jet Ski Session — Tanjung Benoa" 
                departureDate="12 Oct 2025, 10:00 AM" 
                passengers="2 Participants" 
                passengerPrice={350000} 
                portFee={20000} 
                addOns={selectedAddOnsData} 
                onContinue={() => router.push('/watersport/book/payment')}
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
