"use client";

import React from "react";
import { Box, Container, Title, Text, Group, Stack, Progress, Avatar, Card, Button, Center } from "@mantine/core";
import { IconStar } from "@tabler/icons-react";

const reviews = [
  {
    name: "Ayu P.",
    date: "12 Oct 2025",
    rating: 5,
    text: "Instruktur ramah dan profesional, pengalaman jet ski terbaik di Bali!",
  },
  {
    name: "Budi S.",
    date: "05 Oct 2025",
    rating: 4,
    text: "Seru sekali! Peralatan lengkap dan briefing keamanan jelas.",
  },
  {
    name: "Sakura T.",
    date: "28 Sep 2025",
    rating: 5,
    text: "Airnya tenang, pemandangan indah. Sangat recommended untuk pemula.",
  },
];

interface ReviewsProps {
  compact?: boolean;
}

export function Reviews({ compact = false }: ReviewsProps) {
  const average = 4.8;
  const distribution = [
    { stars: 5, percent: 78 },
    { stars: 4, percent: 18 },
    { stars: 3, percent: 3 },
    { stars: 2, percent: 1 },
    { stars: 1, percent: 0 },
  ];

  const Content = (
    <Box bg="white" p={24} style={{ borderRadius: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.1)", marginTop:32 }}>
          <Title order={3} size="xl" style={{ fontWeight: 700, color: "#111827", marginBottom: 16 }}>
            Reviews
          </Title>

          {/* Summary */}
          <Group align="flex-start" gap={32} mb={24}>
            <Box>
              <Group gap={8} align="center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} size={20} style={{ color: i < Math.round(average) ? "#fbbf24" : "#e5e7eb" }} />
                ))}
              </Group>
              <Text style={{ fontWeight: 700, fontSize: 32, color: "#111827" }}>{average}</Text>
              <Text style={{ color: "#6b7280" }}>Based on 420 reviews</Text>
            </Box>

            <Box style={{ flex: 1 }}>
              <Stack gap={8}>
                {distribution.map((d) => (
                  <Group key={d.stars} gap={8} align="center">
                    <Text style={{ width: 24, color: "#374151" }}>{d.stars}</Text>
                    <Progress value={d.percent} radius="xl" style={{ flex: 1 }} color="#fbbf24" />
                    <Text style={{ width: 40, color: "#6b7280", textAlign: "right" }}>{d.percent}%</Text>
                  </Group>
                ))}
              </Stack>
            </Box>
          </Group>

          {/* Reviews list */}
          <Stack gap={16}>
            {reviews.map((r, idx) => (
              <Card key={idx} shadow="sm" padding="md" radius="md" withBorder>
                <Group gap={12} align="flex-start">
                  <Avatar name={r.name} radius="xl" />
                  <Box style={{ flex: 1 }}>
                    <Group justify="space-between" align="center">
                      <Text style={{ fontWeight: 600, color: "#111827" }}>{r.name}</Text>
                      <Text style={{ color: "#6b7280" }}>{r.date}</Text>
                    </Group>
                    <Group gap={4} mt={4}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <IconStar key={i} size={16} style={{ color: i < r.rating ? "#fbbf24" : "#e5e7eb" }} />
                      ))}
                    </Group>
                    <Text style={{ color: "#374151", marginTop: 8 }}>{r.text}</Text>
                  </Box>
                </Group>
              </Card>
            ))}
          </Stack>

          <Center mt={24}>
            <a
              // component="a"
              href=""
              // leftSection={<IconStar size={18} />}
              style={{ fontWeight: 500, padding: "8px 24px" ,textDecoration: 'none', color: "#1e3a52"}}
              // styles={{ root: { "&:hover": { backgroundColor: "#1e3a52" } } }}
            >
            View All Reviews &nbsp; &gt;
            </a>
          </Center>
          
    </Box>
  );

  if (compact) {
    return Content;
  }

  return (
    <Box bg="#f3f4f6" py="md">
      <Container size="xl" px={{ base: 16, sm: 24, lg: 32 }}>
        {Content}
      </Container>
    </Box>
  );
}