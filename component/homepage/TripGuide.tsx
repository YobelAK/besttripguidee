'use client';
import React from 'react';
import { Box, Container, Title, Tabs, SimpleGrid, Card, Image, Group, Text, Button } from '@mantine/core';
import { Star } from 'lucide-react';
import { Ship, Droplet, Map, Car, Zap } from 'lucide-react';

export type Category = 'Activity' | 'Watersport' | 'Tour' | 'Rental' | 'Fastboat';

export type Trip = {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  category: Category;
  ranking?: number;
};

export type TripGuideProps = {
  trips?: Trip[];
  className?: string;
  'data-id'?: string;
  onViewDetails?: (tripId: string) => void;
};

const defaultTrips: Trip[] = [
  // Activity (≥5)
  {
    id: 'ac1',
    name: 'Benoa Parasailing',
    location: 'Tanjung Benoa',
    rating: 4.7,
    reviewCount: 1200,
    imageUrl: 'https://tanjungbenoawatersport.id/wp-content/uploads/2023/07/tanjung-benoa-watersport-bali-768x485.jpg',
    category: 'Activity'
  },
  {
    id: 'ac2',
    name: 'Jet Ski Adventure',
    location: 'Nusa Dua',
    rating: 4.6,
    reviewCount: 980,
    imageUrl: 'https://www.wandernesia.com/wp-content/uploads/2017/10/bali-watersport-4.jpg',
    category: 'Activity'
  },
  {
    id: 'ac3',
    name: 'Banana Boat Fun',
    location: 'Sanur',
    rating: 4.5,
    reviewCount: 850,
    imageUrl: 'https://res.klook.com/image/upload/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/lgtuygc3l26missyg5b6.jpg',
    category: 'Activity'
  },
  {
    id: 'ac4',
    name: 'Flyboard Experience',
    location: 'Canggu',
    rating: 4.4,
    reviewCount: 740,
    imageUrl: 'https://www.balicitramedina.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZWM9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5bd1df6e492c04722b3dcef58a2c79c79a47edb8/flyboard-watersport-tanjung-benoa.jpg',
    category: 'Activity'
  },
  {
    id: 'ac5',
    name: 'Snorkeling Tour',
    location: 'Padang Bai',
    rating: 4.3,
    reviewCount: 620,
    imageUrl: 'https://www.baliocean.com/wp-content/uploads/2017/03/Snorkeling-Padang-Bai-1200x675-cropped.jpg',
    category: 'Activity'
  },

  // Fastboat (≥5)
  {
    id: 'sb1',
    name: 'Bali Express',
    location: 'Sanur – Nusa Lembongan',
    rating: 4.8,
    reviewCount: 1240,
    imageUrl: 'https://www.ticketboat.id/images/1000/sgening-fastboat.jpg',
    category: 'Fastboat'
  },
  {
    id: 'sb2',
    name: 'Gili Swing',
    location: 'Padang Bai – Gili T',
    rating: 4.7,
    reviewCount: 980,
    imageUrl: 'https://res.klook.com/image/upload/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/mbpmg5t7izysgm8bhgdt.jpg',
    category: 'Fastboat'
  },
  {
    id: 'sb3',
    name: 'Nusa Breeze',
    location: 'Sanur – Nusa Penida',
    rating: 4.6,
    reviewCount: 870,
    imageUrl: 'https://sgeningofficial.com/images/boat-2.png',
    category: 'Fastboat'
  },
  {
    id: 'sb4',
    name: 'Island Runner',
    location: 'Serangan – Lembongan',
    rating: 4.5,
    reviewCount: 760,
    imageUrl: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2022/10/20/65f2e58e-b500-4036-9adb-77522d153fdf-1666284767185-1e9deac1688eb034bcbc0319ade36fea.jpg',
    category: 'Fastboat'
  },
  {
    id: 'sb5',
    name: 'Penida Express',
    location: 'Sanur – Nusa Penida',
    rating: 4.4,
    reviewCount: 640,
    imageUrl: 'https://www.ticketboat.id/images/boat_photos/ganggari-fast-boat_657d09646622f.jpg',
    category: 'Fastboat'
  },

  // Watersport (≥5)
  {
    id: 'ws1',
    name: 'Wave Rider',
    location: 'Tanjung Benoa',
    rating: 4.7,
    reviewCount: 1320,
    imageUrl: 'https://tanjungbenoawatersport.id/wp-content/uploads/2023/07/tanjung-benoa-watersport-bali-768x485.jpg',
    category: 'Watersport'
  },
  {
    id: 'ws2',
    name: 'Sea Splash',
    location: 'Nusa Dua',
    rating: 4.6,
    reviewCount: 990,
    imageUrl: 'https://res.klook.com/image/upload/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/lgtuygc3l26missyg5b6.jpg',
    category: 'Watersport'
  },
  {
    id: 'ws3',
    name: 'Aqua Thrill',
    location: 'Sanur',
    rating: 4.5,
    reviewCount: 860,
    imageUrl: 'https://www.wandernesia.com/wp-content/uploads/2017/10/bali-watersport-4.jpg',
    category: 'Watersport'
  },
  {
    id: 'ws4',
    name: 'JetSurf Bali',
    location: 'Canggu',
    rating: 4.4,
    reviewCount: 740,
    imageUrl: 'https://www.balicitramedina.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZWM9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5bd1df6e492c04722b3dcef58a2c79c79a47edb8/flyboard-watersport-tanjung-benoa.jpg',
    category: 'Watersport'
  },
  {
    id: 'ws5',
    name: 'Benoa Xtreme',
    location: 'Tanjung Benoa',
    rating: 4.3,
    reviewCount: 620,
    imageUrl: 'https://www.water-sport-bali.com/wp-content/uploads/2025/10/watersport-tanjung-benoa-hero-keluarga.webp',
    category: 'Watersport'
  },

  // Tour (≥5)
  {
    id: 'tr1',
    name: 'Ubud Discovery',
    location: 'Ubud – Kintamani',
    rating: 4.7,
    reviewCount: 1123,
    imageUrl: 'https://ecotoursbali.com/wp-content/uploads/2022/04/ubud-city-tour-2-1024x576.jpg',
    category: 'Tour'
  },
  {
    id: 'tr2',
    name: 'East Bali Journey',
    location: 'Karangasem',
    rating: 4.6,
    reviewCount: 980,
    imageUrl: 'https://i0.wp.com/inclusivebalitour.com/wp-content/uploads/2019/10/Lempuyang-Temple-Tour.jpg?fit=800%2C400&ssl=1',
    category: 'Tour'
  },
  {
    id: 'tr3',
    name: 'West Bali Explorer',
    location: 'Tabanan',
    rating: 4.5,
    reviewCount: 870,
    imageUrl: 'https://www.westbaliexplorer.com/wp-content/uploads/2022/09/galeri-kayaking-3.jpg',
    category: 'Tour'
  },
  {
    id: 'tr4',
    name: 'North Bali Scenic',
    location: 'Munduk – Bedugul',
    rating: 4.4,
    reviewCount: 760,
    imageUrl: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/01/41/ec.jpg',
    category: 'Tour'
  },
  {
    id: 'tr5',
    name: 'Bali Scenic',
    location: 'Bali',
    rating: 4.3,
    reviewCount: 650,
    imageUrl: 'https://www.viceroybali.com/wp-content/uploads/2024/10/first-timers-guide-to-bali-travel-11-tips-you-need-to-know-1.png',
    category: 'Tour'
  },

  // Rental (≥5)
  {
    id: 'rt1',
    name: 'Island Car Rental',
    location: 'Denpasar',
    rating: 4.6,
    reviewCount: 845,
    imageUrl: 'https://www.lavacarrental.is/media/1/car-rental-in-iceland-11.jpg',
    category: 'Rental'
  },
  {
    id: 'rt2',
    name: 'Bali Wheels',
    location: 'Kuta',
    rating: 4.5,
    reviewCount: 780,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS76zMdkPpSWHxIOptNUOq1jo7k7wUlBaOB6w&s',
    category: 'Rental'
  },
  {
    id: 'rt3',
    name: 'Penida Drive',
    location: 'Nusa Penida',
    rating: 4.4,
    reviewCount: 720,
    imageUrl: 'https://digital-bucket.prod.bfi.co.id/assets/Blog/Blog%20New/Inspiratif!%20Begini%20Cara%20Memulai%20Usaha%20Travel%20Mobil%20Keuntungan%20Berlipat/Usaha%20Travel%20Mobil.jpg',
    category: 'Rental'
  },
  {
    id: 'rt4',
    name: 'Gili Ride',
    location: 'Gili Trawangan',
    rating: 4.3,
    reviewCount: 670,
    imageUrl: 'https://www.chennaitravels.in/wp-content/uploads/2024/02/chennai-travels-tempo.jpg',
    category: 'Rental'
  },
  {
    id: 'rt5',
    name: 'Seminyak Mobility',
    location: 'Seminyak',
    rating: 4.2,
    reviewCount: 610,
    imageUrl: 'https://image.made-in-china.com/365f3j00MeQoEgVWgfcw/14-Passenger-Electric-Scenic-Spot-Sightseeing-Car-Tourist-Bus.webp',
    category: 'Rental'
  }
];

export function TripGuide({ trips = defaultTrips, className, 'data-id': dataId, onViewDetails }: TripGuideProps) {
  const [active, setActive] = React.useState<Category>('Activity');
  const categories: Category[] = ['Activity', 'Watersport', 'Tour', 'Rental', 'Fastboat'];
  const catIcon = (c: Category) => {
    if (c === 'Fastboat') return Ship;
    if (c === 'Activity') return Zap;
    if (c === 'Watersport') return Droplet;
    if (c === 'Tour') return Map;
    return Car;
  };
  const filtered = trips.filter((t) => t.category === active);
  const ranked = [...filtered]
    .sort((a, b) => {
      if (b.rating !== a.rating) return b.rating - a.rating;
      if (b.reviewCount !== a.reviewCount) return b.reviewCount - a.reviewCount;
      return a.name.localeCompare(b.name);
    })
    .map((t, i) => ({ ...t, ranking: i < 3 ? i + 1 : undefined }));

  return (
    <Box data-id={dataId} className={className} bg="white" py="xl">
      <Container size="xl">
        <Title order={2} style={{ color: '#111827', fontWeight: 700, marginBottom: 16 }}>
          Best Trip Guide by Category
        </Title>

        <Tabs value={active} onChange={(v) => setActive((v as Category) || 'Speedboat')} variant="unstyled">
          <Tabs.List
            style={{
              marginBottom: 24,
              display: 'flex',
              gap: 12,
              borderBottom: 'none'
            }}
          >
            {categories.map((c) => {
              const isActive = c === active;
              const IconComp = catIcon(c);
              return (
                <Tabs.Tab
                  key={c}
                  value={c}
                  style={{
                    borderRadius: 12,
                    padding: '10px 20px',
                    fontSize: 14,
                    fontWeight: 600,
                    backgroundColor: isActive ? '#284361' : '#f3f4f6',
                    color: isActive ? '#ffffff' : '#111827'
                  }}
                >
                  <Group gap={8} align="center">
                    <IconComp size={16} />
                    <span>{c}</span>
                  </Group>
                </Tabs.Tab>
              );
            })}
          </Tabs.List>
        </Tabs>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing="lg">
          {ranked.map((trip) => (
            <Card
              key={trip.id}
              withBorder
              radius="xl"
              shadow="sm"
              style={{ overflow: 'hidden', borderColor: '#f3f4f6' }}
            >
              <Card.Section p={0} style={{ position: 'relative', height: 224 }}>
                <Image
                  src={trip.imageUrl}
                  alt={trip.name}
                  h={224}
                  style={{ objectFit: 'cover' }}
                />
                {trip.ranking && (
                  <Box
                    style={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      width: 48,
                      height: 48,
                      borderRadius: 999,
                      backgroundColor: trip.ranking === 1 ? '#ffd700' : trip.ranking === 2 ? '#d1d5db' : '#CD7F32',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: 16,
                      color: trip.ranking === 3 ? '#ffffff' : '#000000'
                    }}
                  >
                    #{trip.ranking}
                  </Box>
                )}
              </Card.Section>

              <Card.Section inheritPadding py="md">
                <Group gap={8}>
                  <Star size={16} style={{ fill: '#ffd700', color: '#ffd700' }} />
                  <Text style={{ fontWeight: 600, color: '#111827' }}>{trip.rating}</Text>
                  <Text style={{ color: '#6b7280' }}>• {trip.reviewCount} reviews</Text>
                </Group>
                <Title order={4} style={{ marginTop: 8, marginBottom: 4, color: '#111827', fontWeight: 700 }}>
                  {trip.name}
                </Title>
                <Text size="sm" style={{ color: '#6b7280', marginBottom: 12 }}>
                  {trip.location}
                </Text>
                <Button
                  fullWidth
                  variant="light"
                  color="dark"
                  style={{ backgroundColor: '#f3f4f6', color: '#111827', fontWeight: 600 }}
                  onClick={() => onViewDetails?.(trip.id)}
                >
                  View Details
                </Button>
              </Card.Section>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
