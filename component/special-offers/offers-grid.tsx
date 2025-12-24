import React from 'react';
import { Box, Container, SimpleGrid } from '@mantine/core';
import { OfferCard } from './offer-card';

const offers = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&h=500&fit=crop',
    discount: 'Save 10%',
    title: '10% Off All Speedboat Bookings',
    description: 'Book your Sanur–Nusa Penida trip today and save more for group travel. Perfect for families and friends traveling together.',
    validUntil: '30 Nov 2025'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop',
    discount: 'Save 15%',
    title: 'Watersport Activity Bundle',
    description: 'Get 15% off when you book 3 or more watersport activities. Includes jet ski, parasailing, and banana boat rides.',
    validUntil: '15 Dec 2025'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=500&fit=crop',
    discount: '2-for-1',
    title: 'Beach Club Happy Hour Special',
    description: 'Enjoy 2-for-1 cocktails and 20% off all food items during happy hour (4-6 PM) at participating beach clubs.',
    validUntil: '31 Oct 2025'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&h=500&fit=crop',
    discount: 'Save 12%',
    title: 'Cultural Tour Package Discount',
    description: "Explore Bali's rich cultural heritage with our guided tours. 12% off all cultural tour packages when booked online.",
    validUntil: '1 Jan 2026'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=500&fit=crop',
    discount: 'Save 20%',
    title: 'Family Package Special',
    description: 'Special discount for families! Book activities for 4 or more people and get 20% off the total price.',
    validUntil: '30 Sep 2025'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop',
    discount: 'Save 15%',
    title: 'Sunset Cruise Experience',
    description: 'Enjoy a magical sunset cruise around Bali with complimentary drinks and appetizers. Book now and save 15%.',
    validUntil: '28 Feb 2026'
  }
];

export function OffersGrid() {
  return (
    <Box style={{ width: '100%', padding: '0 32px 64px' }}>
      <Container size="xl">
        <SimpleGrid
          cols={{ base: 1, md: 2, lg: 3 }}
          spacing={24}
        >
          {offers.map(offer => (
            <OfferCard key={offer.id} {...offer} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}