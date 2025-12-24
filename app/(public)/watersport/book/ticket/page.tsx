'use client';

import React from 'react';
import { 
  Container, 
  Box, 
  Stack, 
  Title, 
  Text, 
  Group, 
  Button, 
  Card, 
  SimpleGrid, 
  Table, 
  ThemeIcon,
  Flex,
  Center,
  Badge,
  Anchor,
  Grid
} from '@mantine/core';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AdditionalPackages, PackageItem } from '@/components/watersport/additional-packages';
import { 
  IconCheck, 
  IconDownload, 
  IconHome, 
  IconClock, 
  IconCreditCard, 
  IconMapPin, 
  IconPhone, 
  IconBriefcase, 
  IconUmbrella, 
  IconToolsKitchen2, 
  IconWaveSawTool,
  IconInfoCircle
} from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

export default function BookingConfirmationPage() {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push('/');
  };

  const handleDownloadTicket = () => {
    // In a real app, this would trigger a PDF download
    alert('E-Ticket download will be implemented');
  };

  const additionalPackages: PackageItem[] = [
    {
      id: 'vip-beach-club',
      title: 'VIP Beach Club Access',
      imageUrl: 'https://images.unsplash.com/photo-1540202404-b7b5868ca4be?w=400&q=80',
      imageAlt: 'VIP Beach Club Access',
      confirmed: true,
    },
    {
      id: 'balinese-lunch',
      title: 'Balinese Lunch Package',
      imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      imageAlt: 'Balinese Lunch Package',
      confirmed: true,
    },
    {
      id: 'snorkeling-experience',
      title: 'Snorkeling Experience',
      imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80',
      imageAlt: 'Snorkeling Experience',
      confirmed: true,
    },
  ];

  return (
    <Box style={{ minHeight: '100vh', backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <Box component="main" style={{ flex: 1 }}>
        <Container size="xl" py="xl">
          {/* Confirmation Message */}
          <Stack align="center" gap="md" mb="xl">
            <ThemeIcon size={64} radius="xl" color="green" variant="light">
              <IconCheck size={32} />
            </ThemeIcon>
            <Title order={1} size="2xl" fw={700} c="#284361" ta="center">
              Your Watersport Booking is Confirmed!
            </Title>
            <Text c="dimmed" ta="center" mb="xs">
              Thank you for booking with Caspia Bali. Your payment via QRIS has
              been received successfully.
            </Text>
            <Text c="dimmed" ta="center">
              We've also sent your e-ticket and booking details to your email.
            </Text>
          </Stack>

          {/* Action Buttons */}
          <Group justify="center" gap="md" mb="xl">
            <Button 
              onClick={handleDownloadTicket}
              leftSection={<IconDownload size={20} />}
              color="#284361"
              size="md"
            >
              Download E-Ticket (PDF)
            </Button>
            <Button 
              onClick={handleBackToHome}
              leftSection={<IconHome size={20} />}
              variant="light"
              color="#284361"
              size="md"
            >
              Back to Homepage
            </Button>
          </Group>

          {/* Main Content Grid */}
          <Grid gutter="xl" mb="xl">
            {/* Left Column - E-Ticket Summary */}
            <Grid.Col span={{ base: 12, lg: 8 }}>
              <Stack gap="xl">
                <Card withBorder radius="md" p="xl" bg="white">
                  <Title order={2} size="xl" fw={600} c="#284361" mb="xl">
                    E-Ticket Summary
                  </Title>
                  <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
                    <Box>
                      <Text size="sm" c="dimmed" mb={4}>Booking ID</Text>
                      <Text fw={600} c="#284361">CAS-2025-14521</Text>
                    </Box>
                  <Box>
                    <Text size="sm" c="dimmed" mb={4}>Participants</Text>
                    <Text fw={600} c="#284361">2 Adults</Text>
                  </Box>
                  <Box>
                    <Text size="sm" c="dimmed" mb={4}>Provider Name</Text>
                    <Text fw={600} c="#284361">
                      Caspia Bali Watersport
                    </Text>
                  </Box>
                  <Box>
                    <Text size="sm" c="dimmed" mb={4}>Activity</Text>
                    <Text fw={600} c="#284361">
                      Banana Boat Adventure
                    </Text>
                  </Box>
                  <Box>
                    <Text size="sm" c="dimmed" mb={4}>Location</Text>
                    <Text fw={600} c="#284361">
                      Tanjung Benoa, Bali
                    </Text>
                    </Box>
                    <Box>
                      <Text size="sm" c="dimmed" mb={4}>Date</Text>
                      <Text fw={600} c="#284361">
                        Saturday, 12 October 2025
                      </Text>
                    </Box>
                    <Box>
                      <Text size="sm" c="dimmed" mb={4}>Payment Method</Text>
                      <Text fw={600} c="#284361">QRIS</Text>
                    </Box>
                    <Box>
                      <Text size="sm" c="dimmed" mb={4}>Session Time</Text>
                      <Text fw={600} c="#284361">
                        10:00 AM – 11:00 AM
                      </Text>
                    </Box>
                    <Box>
                      <Text size="sm" c="dimmed" mb={4}>Status</Text>
                      <Group gap="xs">
                        <IconCheck size={16} color="#2dbe8d" />
                        <Text fw={600} c="#2dbe8d">Confirmed</Text>
                      </Group>
                    </Box>
                  </SimpleGrid>
                  <Box mt="xl" pt="xl" style={{ borderTop: '1px solid #e9ecef' }}>
                    <Group justify="space-between" align="center">
                      <Text size="lg" fw={600} c="#284361">
                        Total Paid
                      </Text>
                      <Text size="2xl" fw={700} c="#284361">
                        IDR 740,000
                      </Text>
                    </Group>
                  </Box>
                </Card>
              </Stack>
            </Grid.Col>

            {/* Right Column - QR Code & Travel Tips */}
            <Grid.Col span={{ base: 12, lg: 4 }}>
              <Stack gap="xl">
              <Card withBorder radius="md" p="xl" bg="white">
                <Title order={2} size="xl" fw={600} c="#284361" mb="lg">
                  E-Ticket QR Code
                </Title>
                <Box bg="#f8f9fa" p="xl" style={{ borderRadius: 8 }} mb="lg">
                  <Center>
                    <Box 
                      w={192} 
                      h={192} 
                      bg="white" 
                      style={{ 
                        border: '2px solid #dee2e6', 
                        borderRadius: 8,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Box ta="center" c="dimmed">
                        <SimpleGrid 
                          cols={8} 
                          spacing={1} 
                          w={160} 
                          h={160} 
                          bg="#e9ecef" 
                          p={8} 
                          style={{ borderRadius: 4 }}
                        >
                          {Array.from({ length: 64 }).map((_, i) => (
                            <Box 
                              key={i} 
                              w="100%" 
                              h="100%" 
                              bg={Math.random() > 0.5 ? 'black' : 'white'}
                              style={{ borderRadius: 2 }}
                            />
                          ))}
                        </SimpleGrid>
                      </Box>
                    </Box>
                  </Center>
                </Box>
                <Text size="sm" c="dimmed" ta="center">
                  Show this QR at the Caspia Bali counter for verification.
                </Text>
              </Card>

              <Card withBorder radius="md" p="xl" bg="white">
                <Title order={2} size="lg" fw={600} c="#284361" mb="lg">
                  Travel Tips
                </Title>
                <Stack gap="lg">
                  <Group align="flex-start" gap="md">
                    <IconClock size={20} color="#284361" style={{ marginTop: 2, flexShrink: 0 }} />
                    <Box style={{ flex: 1 }}>
                      <Text fw={500} c="#284361" size="sm">
                        Before You Go:
                      </Text>
                      <Text size="sm" c="dimmed">
                        Arrive 30 minutes before departure.
                      </Text>
                    </Box>
                  </Group>
                  <Group align="flex-start" gap="md">
                    <IconCreditCard size={20} color="#284361" style={{ marginTop: 2, flexShrink: 0 }} />
                    <Box style={{ flex: 1 }}>
                      <Text size="sm" c="dimmed">
                        Bring your ID for check-in.
                      </Text>
                    </Box>
                  </Group>
                  <Group align="flex-start" gap="md">
                    <IconPhone size={20} color="#284361" style={{ marginTop: 2, flexShrink: 0 }} />
                    <Box style={{ flex: 1 }}>
                      <Text size="sm" c="dimmed">
                        Keep this ticket accessible on your phone.
                      </Text>
                    </Box>
                  </Group>
                  <Group align="flex-start" gap="md">
                    <IconUmbrella size={20} color="#284361" style={{ marginTop: 2, flexShrink: 0 }} />
                    <Box style={{ flex: 1 }}>
                      <Text size="sm" c="dimmed">
                        Contact Caspia staff if weather conditions change.
                      </Text>
                    </Box>
                  </Group>
                </Stack>
              </Card>
              </Stack>
            </Grid.Col>
          </Grid>

          {/* Contact Details */}
          <Card withBorder radius="md" p="xl" mb="xl" bg="white">
            <Title order={2} size="xl" fw={600} c="#284361" mb="xl">
              Contact Details
            </Title>
            <Box style={{ overflowX: 'auto' }}>
              <Table>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>
                      <Text size="sm" fw={500} c="dimmed">No.</Text>
                    </Table.Th>
                    <Table.Th>
                      <Text size="sm" fw={500} c="dimmed">Name</Text>
                    </Table.Th>
                    <Table.Th>
                      <Text size="sm" fw={500} c="dimmed">Email</Text>
                    </Table.Th>
                    <Table.Th>
                      <Text size="sm" fw={500} c="dimmed">Phone Number</Text>
                    </Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  <Table.Tr>
                    <Table.Td>
                      <Text size="sm" c="dark">1</Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" fw={500} c="#284361">
                        Kadek Arta
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" c="dark">
                        kadekarta@gmail.com
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" c="dark">
                        628589952345
                      </Text>
                    </Table.Td>
                  </Table.Tr>
                </Table.Tbody>
              </Table>
            </Box>
            <Group gap="xs" mt="lg">
              <ThemeIcon size={16} radius="xl" color="blue" variant="light">
                <IconInfoCircle size={12} />
              </ThemeIcon>
              <Text size="sm" c="dimmed">
                Please bring your ID or passport for check-in verification.
              </Text>
            </Group>
          </Card>

          {/* Passenger Details */}
          <Card withBorder radius="md" p="xl" mb="xl" bg="white">
            <Title order={2} size="xl" fw={600} c="#284361" mb="xl">
              Participant Details
            </Title>
            <Box style={{ overflowX: 'auto' }}>
              <Table>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>
                      <Text size="sm" fw={500} c="dimmed">No.</Text>
                    </Table.Th>
                    <Table.Th>
                      <Text size="sm" fw={500} c="dimmed">Name</Text>
                    </Table.Th>
                    <Table.Th>
                      <Text size="sm" fw={500} c="dimmed">ID</Text>
                    </Table.Th>
                    <Table.Th>
                      <Text size="sm" fw={500} c="dimmed">Nationality</Text>
                    </Table.Th>
                    <Table.Th>
                      <Text size="sm" fw={500} c="dimmed">Participant Type</Text>
                    </Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  <Table.Tr>
                    <Table.Td>
                      <Text size="sm" c="dark">1</Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" fw={500} c="#284361">
                        Kadek Arta
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" c="dark">
                        1303223061
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" c="dark">
                        Indonesian
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" c="dark">Adult</Text>
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <Text size="sm" c="dark">2</Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" fw={500} c="#284361">
                        Rina Wati
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" c="dark">
                        1303223061
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" c="dark">
                        Indonesian
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" c="dark">Adult</Text>
                    </Table.Td>
                  </Table.Tr>
                </Table.Tbody>
              </Table>
            </Box>
            <Group gap="xs" mt="lg">
              <ThemeIcon size={16} radius="xl" color="blue" variant="light">
                <IconInfoCircle size={12} />
              </ThemeIcon>
              <Text size="sm" c="dimmed">
                Please bring your ID or passport for check-in verification.
              </Text>
            </Group>
          </Card>

          <AdditionalPackages
            packages={additionalPackages}
            footerNote="Your add-on activities will be coordinated automatically upon arrival at Nusa Penida."
          />

          {/* Boarding Information */}
          <Card withBorder radius="md" p="xl" mb="xl" bg="white">
            <Title order={2} size="xl" fw={600} c="#284361" mb="xl">
              Activity Information
            </Title>
            <Stack gap="xl">
              <Group align="flex-start" gap="md">
                <IconMapPin size={20} color="#284361" style={{ marginTop: 2, flexShrink: 0 }} />
                <Box style={{ flex: 1 }}>
                  <Text fw={500} c="#284361" mb={4}>
                    Meeting Point
                  </Text>
                  <Text c="dark" mb={8}>
                    Tanjung Benoa Watersport Center, Bali
                  </Text>
                  <Text size="sm" c="dimmed">
                    Check-in counter near Caspia Watersport Desk
                  </Text>
                  <Anchor size="sm" c="#284361" fw={500} mt={8}>
                    View on Google Maps
                  </Anchor>
                </Box>
              </Group>
              <Group align="flex-start" gap="md">
                <IconClock size={20} color="#284361" style={{ marginTop: 2, flexShrink: 0 }} />
                <Box style={{ flex: 1 }}>
                  <Text fw={500} c="#284361" mb={4}>
                    Meeting Time
                  </Text>
                  <Text c="dark">
                    09:30 AM (30 minutes before session)
                  </Text>
                </Box>
              </Group>
              <Group align="flex-start" gap="md">
                <IconBriefcase size={20} color="#284361" style={{ marginTop: 2, flexShrink: 0 }} />
                <Box style={{ flex: 1 }}>
                  <Text fw={500} c="#284361" mb={4}>
                    Equipment Policy
                  </Text>
                  <Stack gap={4}>
                    <Text c="dark">• Life jacket provided and mandatory</Text>
                    <Text c="dark">• Damage deposit may apply for misuse</Text>
                  </Stack>
                </Box>
              </Group>
              <Group align="flex-start" gap="md">
                <IconPhone size={20} color="#284361" style={{ marginTop: 2, flexShrink: 0 }} />
                <Box style={{ flex: 1 }}>
                  <Text fw={500} c="#284361" mb={4}>
                    Emergency Contact
                  </Text>
                  <Text c="dark">
                    +62 812 3456 7890 (Caspia Watersport Center)
                  </Text>
                </Box>
              </Group>
            </Stack>
          </Card>

          {/* Payment Details */}
          
          <Card withBorder radius="md" p="xl" bg="white" mt="xl">
            <Group gap="md" mb="xl">
              <Badge color="gray" variant="light">
                QRIS
              </Badge>
              <Group gap="xs">
                <IconCheck size={20} color="#2dbe8d" />
                <Text size="sm" fw={500} c="#2dbe8d">
                  Payment Successful
                </Text>
              </Group>
            </Group>
            <Title order={2} size="xl" fw={600} c="#284361" mb="xl">
              Invoice Details
            </Title>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
              <Box>
                <Text size="sm" c="dimmed" mb={4}>Invoice</Text>
                <Text fw={600} c="#284361">INV-2025-ABCD1234</Text>
              </Box>
              <Box>
                <Text size="sm" c="dimmed" mb={4}>Time</Text>
                <Text fw={600} c="#284361">
                  12 October 2025, 10:23 AM
                </Text>
              </Box>
              <Box>
                <Text size="sm" c="dimmed" mb={4}>Method</Text>
                <Text fw={600} c="#284361">QRIS</Text>
              </Box>
              <Box>
                <Text size="sm" c="dimmed" mb={4}>Amount</Text>
                <Text fw={600} c="#284361">IDR 740,000</Text>
              </Box>
              <Box>
                <Text size="sm" c="dimmed" mb={4}>Status</Text>
                <Text fw={600} c="#2dbe8d">Paid</Text>
              </Box>
            </SimpleGrid>
          </Card>
        </Container>
      </Box>
      
      <Footer />
    </Box>
  );
}
