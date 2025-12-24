"use client";
import React, { useState } from 'react';
import {
  Box,
  Container,
  Group,
  Stack,
  Title,
  Text,
  Button,
  Badge,
  ActionIcon,
  Grid,
  Card,
  Divider,
} from '@mantine/core';
import {
  IconArrowLeft,
  IconShare2,
  IconHeart,
  IconCopy,
  IconClock,
  IconChevronDown,
  IconMessageCircle,
  IconMail,
  IconPhone,
} from '@tabler/icons-react';

const SPEEDBOAT_IMAGE =
  'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=400&fit=crop';

export function PromotionDetail() {
  const [copied, setCopied] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(['booking']);

  const handleCopy = () => {
    navigator.clipboard.writeText('CASPLA10');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
    );
  };

  return (
    <Box style={{ width: '100%', minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Back Link */}
      <Container size="xl" style={{ paddingTop: 24, paddingBottom: 24 }}>
        <Button
          variant="subtle"
          leftSection={<IconArrowLeft size={16} />}
          color="#284361"
          styles={{
            root: {
              paddingLeft: 8,
              paddingRight: 8,
              height: 36,
            },
          }}
        >
          Back to all promotions
        </Button>
      </Container>

      {/* Hero Banner */}
      <Container size="xl" style={{ marginBottom: 48 }}>
        <Box
          style={{
            position: 'relative',
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
            minHeight: 280,
            backgroundImage: `url(${SPEEDBOAT_IMAGE})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Box
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg, rgba(40,67,97,0.9), rgba(40,67,97,0.7))',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />
          <Box style={{ position: 'relative', zIndex: 1, padding: 24, minHeight: 280 }}>
            <Group justify="space-between" align="flex-start">
              <Badge
                color="#ff5722"
                variant="filled"
                radius="xl"
                styles={{
                  root: { backgroundColor: '#ff5722' },
                }}
              >
                Save 10%
              </Badge>
              <Group gap={8}>
                <ActionIcon
                  size={40}
                  radius="xl"
                  variant="filled"
                  aria-label="share"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  <IconShare2 size={20} color="#ffffff" />
                </ActionIcon>
                <ActionIcon
                  size={40}
                  radius="xl"
                  variant="filled"
                  aria-label="favorite"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  <IconHeart size={20} color="#ffffff" />
                </ActionIcon>
              </Group>
            </Group>

            <Box style={{ marginTop: 24 }}>
              <Title c="white" order={1} style={{ marginBottom: 12 }}>
                10% Off All Speedboat Bookings
              </Title>
              <Text c="white" opacity={0.9} style={{ marginBottom: 24, maxWidth: 720 }}>
                Book your Sanur–Nusa Penida trip today and save more for group travel.
                Perfect for families and friends traveling together.
              </Text>
              <Button color="white" variant="filled">
                <Text c="#284361" fw={600}>
                  Book Now with Discount
                </Text>
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Promo Details */}
      <Container size="xl" style={{ marginTop: 24, marginBottom: 48 }}>
        <Title order={2} style={{ color: '#284361', marginBottom: 24 }}>
          Promo Details
        </Title>
        <Box
          style={{
            backgroundColor: '#e8f1f5',
            borderRadius: 12,
            padding: 24,
          }}
        >
          <Grid gutter={24}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap={8}>
                <Text size="sm" c="gray.6">
                  Promo Code
                </Text>
                <Group gap={8}>
                  <Text size="lg" fw={700} c="#284361">
                    CASPLA10
                  </Text>
                  <ActionIcon variant="subtle" onClick={handleCopy} aria-label="copy">
                    <IconCopy size={16} color="#284361" />
                  </ActionIcon>
                  {copied && <Text size="xs" c="green">Copied!</Text>}
                </Group>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap={4} style={{ textAlign: 'right' }}>
                <Text size="sm" c="gray.6">
                  Discount Type
                </Text>
                <Text size="lg" fw={600} c="#284361">
                  Save 10%
                </Text>
                <Text size="sm" c="gray.6">
                  off base fare (before tax)
                </Text>
              </Stack>
            </Grid.Col>
          </Grid>
          <Divider my={16} />
          <Grid gutter={24}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap={8}>
                <Text size="sm" c="gray.6">
                  Valid Period
                </Text>
                <Group gap={8}>
                  <IconClock size={16} color="#284361" />
                  <Text fw={500} c="#284361">
                    Until 30 Nov 2025
                  </Text>
                </Group>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap={4} style={{ textAlign: 'right' }}>
                <Text size="sm" c="gray.6">
                  Usage Limit
                </Text>
                <Text fw={500} c="#284361">
                  1x per account
                </Text>
              </Stack>
            </Grid.Col>
          </Grid>
          <Divider my={16} />
          <Grid gutter={24}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap={4}>
                <Text size="sm" c="gray.6">
                  Eligible Categories
                </Text>
                <Text fw={500} c="#284361">
                  Speedboat (Sanur–Nusa Penida, Nusa Lembongan routes)
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap={4} style={{ textAlign: 'right' }}>
                <Text size="sm" c="gray.6">
                  Platform & Booking Method
                </Text>
                <Text fw={500} c="#284361">
                  Website & Mobile App, Online only
                </Text>
              </Stack>
            </Grid.Col>
          </Grid>
        </Box>
      </Container>

      {/* Terms & Conditions */}
      <Container size="xl" style={{ marginTop: 24, marginBottom: 48}}>
        <Title order={2} style={{ color: '#284361', marginBottom: 24 }}>
          Terms & Conditions
        </Title>
        <Stack gap={12}>
          {[
            {
              key: 'booking',
              title: 'Booking & Reservation',
              content: [
                '• Discount applies only for online payment.',
                '• Booking must be made at least 24 hours in advance.',
                '• Subject to availability at the time of booking.',
              ],
            },
            {
              key: 'usage',
              title: 'Promo Usage',
              content: [
                '• Promo cannot be combined with other offers.',
                '• Limited to one use per account/customer.',
                '• Discount applies to base fare only (before tax and service fees).',
              ],
            },
            {
              key: 'cancellation',
              title: 'Cancellation Policy',
              content: [
                '• Standard cancellation policy applies to discounted bookings.',
                '• No refund for no-shows or cancellations less than 24 hours before scheduled activity.',
              ],
            },
            {
              key: 'additional',
              title: 'Additional Information',
              content: [
                '• Caspla Bali reserves the right to modify or cancel the promo anytime.',
                '• All other standard terms and conditions of service apply.',
              ],
            },
          ].map((section) => (
            <Card key={section.key} withBorder radius="md">
              <Button
                variant="transparent"
                fullWidth
                onClick={() => toggleSection(section.key)}
                rightSection={<IconChevronDown size={18} />}
                styles={{
                  root: {
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    padding: 16,
                    minHeight: 44,
                  },
                  label: {
                    color: '#284361',
                    fontWeight: 600,
                    textAlign: 'left',
                    flex: 1,
                  },
                }}
              >
                {section.title}
              </Button>
              {expandedSections.includes(section.key) && (
                <Box style={{ padding: '0 32px 32px' }}>
                  <Stack gap={8}>
                    {section.content.map((line, idx) => (
                      <Text key={idx} size="sm" c="gray.7">
                        {line}
                      </Text>
                    ))}
                  </Stack>
                </Box>
              )}
            </Card>
          ))}
        </Stack>
      </Container>

      {/* Help Section */}
      <Container size="xl" style={{ marginTop: 24, paddingBottom: 48 }}>
        <Box style={{ backgroundColor: '#f9fafb', borderRadius: 12, padding: 24, textAlign: 'left' }}>
          <Title order={2} style={{ color: '#284361', marginBottom: 8, textAlign: 'left' }}>
            Need help with your promo?
          </Title>
          <Text c="gray.6" style={{ marginBottom: 24, textAlign: 'left' }}>
            Our team is ready to assist you with any questions
          </Text>
          <Grid gutter={24}>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Button
                component="a"
                href="https://wa.me/6281234567890"
                target="_blank"
                aria-label="Contact via WhatsApp"
                variant="default"
                fullWidth
                radius="md"
                size="lg"
                styles={{ root: { justifyContent: 'flex-start', textAlign: 'left', padding: 24, minHeight: 72 } }}
              >
                <Group align="center" gap={12}>
                  <Box style={{ width: 56, height: 56, borderRadius: 9999, backgroundColor: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconMessageCircle size={24} color="#16a34a" />
                  </Box>
                  <Text size="lg" fw={600} c="#284361">WhatsApp</Text>
                </Group>
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Button
                component="a"
                href="mailto:support@casplabali.com"
                aria-label="Contact via Email"
                variant="default"
                fullWidth
                radius="md"
                size="lg"
                styles={{ root: { justifyContent: 'flex-start', textAlign: 'left', padding: 24, minHeight: 72 } }}
              >
                <Group align="center" gap={12}>
                  <Box style={{ width: 56, height: 56, borderRadius: 9999, backgroundColor: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconMail size={24} color="#2563eb" />
                  </Box>
                  <Text size="lg" fw={600} c="#284361">Email</Text>
                </Group>
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Button
                component="a"
                href="tel:+6281234567890"
                aria-label="Call support"
                variant="default"
                fullWidth
                radius="md"
                size="lg"
                styles={{ root: { justifyContent: 'flex-start', textAlign: 'left', padding: 24, minHeight: 72 } }}
              >
                <Group align="center" gap={12}>
                  <Box style={{ width: 56, height: 56, borderRadius: 9999, backgroundColor: '#ede9fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconPhone size={24} color="#7c3aed" />
                  </Box>
                  <Text size="lg" fw={600} c="#284361">08:00-20:00 WITA</Text>
                </Group>
              </Button>
            </Grid.Col>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}