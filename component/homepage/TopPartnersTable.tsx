'use client';
import React from 'react';
import { Box, Container, Title, ScrollArea, Table, Image, Group, Text } from '@mantine/core';
import { TrendingUp, TrendingDown, Zap, Droplet, Map, Car, Ship } from 'lucide-react';

export type VendorData = {
  rank: number;
  name: string;
  logo: string;
  overallScore: number;
  rating: number;
  reviews: number;
  experience: number;
  reliability: number;
  customerService: number;
  trend?: 'up' | 'down';
  services?: string[];
};

export type TopPartnersTableProps = {
  vendors?: VendorData[];
  lastUpdated?: string;
  className?: string;
  'data-id'?: string;
};

const defaultVendors: VendorData[] = [
  {
    rank: 1,
    name: 'Island Fastboat',
    logo: 'https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=400&auto=format&fit=crop',
    overallScore: 95,
    rating: 4.8,
    reviews: 3200,
    experience: 5,
    reliability: 5,
    customerService: 5,
    trend: 'up',
    services: ['Activity', 'Rental']
  },
  {
    rank: 2,
    name: 'Wave Adventures',
    logo: 'https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=400&auto=format&fit=crop',
    overallScore: 92,
    rating: 4.7,
    reviews: 2100,
    experience: 5,
    reliability: 4,
    customerService: 5,
    trend: 'down',
    services: ['Activity', 'Watersport', 'Tour', 'Rental', 'Fastboat']
  },
  {
    rank: 3,
    name: 'Bali Explorer',
    logo: 'https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=400&auto=format&fit=crop',
    overallScore: 90,
    rating: 4.6,
    reviews: 1800,
    experience: 4,
    reliability: 4,
    customerService: 5,
    services: ['Tour', 'Fastboat']
  },
  {
    rank: 4,
    name: 'Gili Express',
    logo: 'https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=400&auto=format&fit=crop',
    overallScore: 88,
    rating: 4.5,
    reviews: 1500,
    experience: 4,
    reliability: 4,
    customerService: 5,
    trend: 'up',
    services: ['Fastboat']
  },
  {
    rank: 5,
    name: 'Nusa Watersport',
    logo: 'https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=400&auto=format&fit=crop',
    overallScore: 86,
    rating: 4.4,
    reviews: 1320,
    experience: 4,
    reliability: 4,
    customerService: 4,
    services: ['Watersport', 'Activity']
  },
  {
    rank: 6,
    name: 'Ubud Journey',
    logo: 'https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=400&auto=format&fit=crop',
    overallScore: 85,
    rating: 4.4,
    reviews: 1205,
    experience: 4,
    reliability: 4,
    customerService: 4,
    trend: 'up',
    services: ['Tour', 'Rental']
  },
  {
    rank: 7,
    name: 'Bali Car Rental',
    logo: 'https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=400&auto=format&fit=crop',
    overallScore: 84,
    rating: 4.3,
    reviews: 980,
    experience: 4,
    reliability: 4,
    customerService: 4,
    services: ['Rental']
  },
  {
    rank: 8,
    name: 'Seminyak Cruise',
    logo: 'https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=400&auto=format&fit=crop',
    overallScore: 83,
    rating: 4.3,
    reviews: 860,
    experience: 4,
    reliability: 4,
    customerService: 4,
    trend: 'down',
    services: ['Fastboat', 'Watersport']
  },
  {
    rank: 9,
    name: 'Sanur Sea Sports',
    logo: 'https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=400&auto=format&fit=crop',
    overallScore: 82,
    rating: 4.2,
    reviews: 790,
    experience: 4,
    reliability: 3,
    customerService: 4,
    services: ['Watersport']
  },
  {
    rank: 10,
    name: 'Canggu Adventure',
    logo: 'https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=400&auto=format&fit=crop',
    overallScore: 81,
    rating: 4.2,
    reviews: 720,
    experience: 3,
    reliability: 3,
    customerService: 4,
    services: ['Tour', 'Activity']
  }
];

function rankBadgeColor(rank: number) {
  if (rank === 1) return { bg: '#FFD700', color: '#000000' };
  if (rank === 2) return { bg: '#d1d5db', color: '#000000' };
  if (rank === 3) return { bg: '#CD7F32', color: '#ffffff' };
  return { bg: '#f3f4f6', color: '#000000' };
}

export function TopPartnersTable({
  vendors = defaultVendors,
  lastUpdated = '29 May 2025',
  className,
  'data-id': dataId
}: TopPartnersTableProps) {
  return (
    <Box data-id={dataId}  className={className} py="md">
      <Container size="xl">
        <Group justify="space-between" align="center" mb="md">
          <Title order={3} style={{ color: '#111827', fontWeight: 700 }}>
            Top Partners
          </Title>
          <Text size="xs" style={{ color: '#8b8b8b' }}>
            Last Updated: {lastUpdated}
          </Text>
        </Group>

        <ScrollArea type="auto">
          <Table
            withColumnBorders={false}
            horizontalSpacing="sm"
            verticalSpacing="xs"
            style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #c0c0c0' }}
          >
            <Table.Thead>
              <Table.Tr style={{ backgroundColor: '#284361', borderBottom: '1px solid #c0c0c0' }}>
                <Table.Th style={{ color: '#ffffff', fontWeight: 700, fontSize: 12, padding: '10px 12px', borderRight: '1px solid #c0c0c0', textAlign: 'center' }}>
                  Rank
                </Table.Th>
                <Table.Th style={{ color: '#ffffff', fontWeight: 700, fontSize: 12, padding: '10px 12px', borderRight: '1px solid #c0c0c0', textAlign: 'center', minWidth: 160 }}>
                  Vendor Info
                </Table.Th>
                <Table.Th style={{ color: '#ffffff', fontWeight: 700, fontSize: 12, padding: '10px 12px', borderRight: '1px solid #c0c0c0', textAlign: 'center' }}>
                  Overall
                  <br />
                  Score
                </Table.Th>
                <Table.Th style={{ color: '#ffffff', fontWeight: 700, fontSize: 12, padding: '10px 12px', borderRight: '1px solid #c0c0c0', textAlign: 'center' }}>
                  Rating
                </Table.Th>
                <Table.Th style={{ color: '#ffffff', fontWeight: 700, fontSize: 12, padding: '10px 12px', borderRight: '1px solid #c0c0c0', textAlign: 'center' }}>
                  Reviews
                </Table.Th>
                <Table.Th style={{ color: '#ffffff', fontWeight: 700, fontSize: 12, padding: '10px 12px', borderRight: '1px solid #c0c0c0', textAlign: 'center' }}>
                  Experience
                </Table.Th>
                <Table.Th style={{ color: '#ffffff', fontWeight: 700, fontSize: 12, padding: '10px 12px', borderRight: '1px solid #c0c0c0', textAlign: 'center' }}>
                  Reliability
                </Table.Th>
                <Table.Th style={{ color: '#ffffff', fontWeight: 700, fontSize: 12, padding: '10px 12px', borderRight: '1px solid #c0c0c0', textAlign: 'center' }}>
                  Customer Service
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {vendors.map((v) => {
                const colors = rankBadgeColor(v.rank);
                const serviceToIcon: Record<string, React.ElementType> = {
                  activity: Zap,
                  watersport: Droplet,
                  tour: Map,
                  rental: Car,
                  fastboat: Ship
                };
                return (
                  <Table.Tr key={v.rank} style={{ borderBottom: '1px solid #c0c0c0' }}>
                    <Table.Td style={{ padding: '8px 4px', backgroundColor: '#f8f9fa', borderRight: '1px solid #c0c0c0' }}>
                      <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, justifyContent: 'center' }}>
                        <Box
                          style={{
                            borderRadius: 999,
                            width: 28,
                            height: 28,
                            backgroundColor: colors.bg,
                            color: colors.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 700,
                            fontSize: 11
                          }}
                        >
                          #{v.rank}
                        </Box>
                        {v.trend && (
                          <Box style={{ fontSize: 11, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {v.trend === 'up' ? <TrendingUp size={12} color="#16a34a" /> : <TrendingDown size={12} color="#dc2626" />}
                          </Box>
                        )}
                      </Box>
                    </Table.Td>
                    <Table.Td style={{ padding: '8px 12px', borderRight: '1px solid #c0c0c0' }}>
                      <Box style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Image src={v.logo} alt={`${v.name} logo`} width={32} height={32} radius={0} />
                        </Box>
                        <Box style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                          <Text style={{ fontWeight: 600, color: '#111827', fontSize: 14 }}>{v.name}</Text>
                          {v.services && v.services.length > 0 && (
                            <Group gap={6}>
                              {v.services.map((s, i) => {
                                const IconComp = serviceToIcon[s.toLowerCase()];
                                return IconComp ? (
                                  <Box
                                    key={`${v.name}-${s}-${i}`}
                                    style={{
                                      display: 'inline-flex',
                                      width: 22,
                                      height: 22,
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      
                                      borderRadius: 999,
                                      backgroundColor: '#e9e9e9e4'
                                    }}
                                    title={s}
                                  >
                                    <IconComp size={14} color="#284361" />
                                  </Box>
                                ) : null;
                              })}
                            </Group>
                          )}
                        </Box>
                      </Box>
                    </Table.Td>
                    <Table.Td style={{ padding: '8px 12px', textAlign: 'center', color: '#111827', fontWeight: 600, borderRight: '1px solid #c0c0c0', fontSize: 12 }}>
                      {v.overallScore}
                    </Table.Td>
                    <Table.Td style={{ padding: '8px 12px', textAlign: 'center', color: '#111827', fontWeight: 600, borderRight: '1px solid #c0c0c0', fontSize: 12 }}>
                      {v.rating}
                    </Table.Td>
                    <Table.Td style={{ padding: '8px 12px', textAlign: 'center', color: '#111827', fontWeight: 600, borderRight: '1px solid #c0c0c0', fontSize: 12 }}>
                      {v.reviews.toLocaleString('en-US')}
                    </Table.Td>
                    <Table.Td style={{ padding: '8px 12px', textAlign: 'center', color: '#111827', fontWeight: 600, borderRight: '1px solid #c0c0c0', fontSize: 12 }}>
                      {v.experience}
                    </Table.Td>
                    <Table.Td style={{ padding: '8px 12px', textAlign: 'center', color: '#111827', fontWeight: 600, borderRight: '1px solid #c0c0c0', fontSize: 12 }}>
                      {v.reliability}
                    </Table.Td>
                    <Table.Td style={{ padding: '8px 12px', textAlign: 'center', color: '#111827', fontWeight: 600, borderRight: '1px solid #c0c0c0', fontSize: 12 }}>
                      {v.customerService}
                    </Table.Td>
                  </Table.Tr>
                );
              })}
            </Table.Tbody>
          </Table>
        </ScrollArea>
      </Container>
    </Box>
  );
}
