"use client";

import React from "react";
import { Box, Container, Group, Text, Title, Grid, GridCol, Stack } from "@mantine/core";
import { IconStar, IconClock, IconCalendar, IconUsers, IconMapPin, IconCheck, IconX, IconMap } from "@tabler/icons-react";
import { BookingForm } from "./BookingForm";
import { AlignRight } from "lucide-react";

export function ActivityHeaderCard() {
  return (
    <Box bg="white" p={24} style={{ borderRadius: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }} mt={48} mb={32}>
      <Group justify="space-between" align="flex-start" gap={24}>
        <Box style={{ flex: 1 }}>
          <Title order={1} size="5xl" style={{ fontWeight: 700, color: "#111827", marginBottom: 8 }}>
            Jet Ski Adventure Bali
          </Title>
          <Text style={{ color: "#6b7280", marginBottom: 16 }}>15-Min Ride | Guided Experience</Text>
          <Group gap={16} align="center" mb={16}>
            <Group gap={8} align="center">
              <IconStar size={20} style={{ color: "#fbbf24" }} />
              <Text style={{ fontWeight: 600 }}>4.8</Text>
              <Text style={{ color: "#6b7280" }}>(420 reviews)</Text>
            </Group>
            <Text style={{ color: "#9ca3af" }}>•</Text>
            <Text style={{ color: "#6b7280" }}>1.5k booked</Text>
            <Box
              style={{
                padding: "4px 12px",
                backgroundColor: "#eff6ff",
                color: "#4c7be1",
                borderRadius: 9999,
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Popular Choice
            </Box>
          </Group>
          <Text style={{ color: "#374151", marginBottom: 24 }}>
            Glide across the Bali coastline on a high-speed jet ski with a professional guide ensuring both safety and thrill.
          </Text>
          <Group gap={8} align="center" style={{ color: "#6b7280" }}>
            <IconMapPin size={20} />
            <Text>Tanjung Benoa, Bali</Text>
          </Group>
        </Box>
      </Group>

      {/* Key Info Overview */}
      <Box mt={32} pt={32} style={{ borderTop: "1px solid #e5e7eb" }}>
        <Title order={3} size="xl" style={{ fontWeight: 700, color: "#111827", marginBottom: 24 }}>
          Key Info Overview
        </Title>
        <Grid gutter={24} style={{ justifyContent: "center", alignContent:"center" }}>
          <GridCol span={{ base: 6, md: 4 }}>
            <Box style={{ borderRadius: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.1)", textAlign: "center", paddingBottom: 16 }}>
              <IconClock size={32} style={{ color: "#4b5563", marginBottom: 8 }} />
              <Text size="sm" style={{  color: "#111827" }}>Duration</Text>
              <Text size="sm" style={{ fontWeight: 600,color: "#6b7280" }}>15-30 minutes</Text>
            </Box>
          </GridCol>
          <GridCol span={{ base: 6, md: 4 }}>
            <Box style={{ borderRadius: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.1)", textAlign: "center", paddingBottom: 16 }}>
              <IconCalendar size={32} style={{ color: "#4b5563", marginBottom: 8 }} />
              <Text size="sm" style={{  color: "#111827" }}>Start Time</Text>
              <Text size="sm" style={{ fontWeight: 600,color: "#6b7280" }}>Flexible</Text>
            </Box>
          </GridCol>
          <GridCol span={{ base: 6, md: 4}}>
            <Box style={{ borderRadius: 16, boxShadow: "1px 1px 3px rgba(0,0,0,0.1)", textAlign: "center", paddingBottom: 16 }}>
              <IconUsers size={32} style={{ color: "#4b5563", marginBottom: 8 }} />
              <Text size="sm" style={{  color: "#111827" }}>Suitable for</Text>
              <Text size="sm" style={{ fontWeight: 600,color: "#6b7280" }}>1-2 Guests</Text>
            </Box>
          </GridCol>
          <GridCol span={{ base: 6, md: 4 }}>
            <Box style={{ borderRadius: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.1)", textAlign: "center", paddingBottom: 16 }}>
              <IconMapPin size={32} style={{ color: "#4b5563", marginBottom: 8 }} />
              <Text size="sm" style={{  color: "#111827" }}>Location</Text>
              <Text size="sm" style={{ fontWeight: 600,color: "#6b7280" }}>Tanjung Benoa</Text>
            </Box>
          </GridCol>
          <GridCol span={{ base: 6, md: 4 }}>
            <Box style={{ borderRadius: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.1)", textAlign: "center", paddingBottom: 16 }}>
              <IconMapPin size={32} style={{ color: "#4b5563", marginBottom: 8 }} />
              <Text size="sm" style={{  color: "#111827" }}>Type</Text>
              <Text size="sm" style={{ fontWeight: 600,color: "#6b7280" }}>Guided Activity</Text>
            </Box>
          </GridCol>
        </Grid>
      </Box>
    </Box>
  );
}

export function ActivityMainLeft() {
  return (
    <Stack gap={32}>
      {/* Activity Overview */}
      <Box bg="white" p={24} style={{ borderRadius: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
        <Title order={3} size="xl" style={{ fontWeight: 700, color: "#111827", marginBottom: 16 }}>
          Activity Overview
        </Title>
        <Text style={{ color: "#374151", marginBottom: 24 }}>
          Experience the thrill of riding your own jet ski across the tropical blue sea. Perfect for beginners and thrill-seekers alike, this guided session offers crystal-clear waters.
        </Text>
        <Grid gutter={16}>
          {[
            "Life jacket & safety briefing included",
            "Professional guide supervision",
            "Jet ski rental & fuel",
            "Insurance coverage",
          ].map((item) => (
            <GridCol key={item} span={{ base: 12, md: 6 }}>
              <Group gap={8} align="center" style={{ color: "#374151" }}>
                <IconCheck size={20} color="#22c55e" />
                <Text>{item}</Text>
              </Group>
            </GridCol>
          ))}
        </Grid>
      </Box>

      {/* What to Expect */}
      <Box bg="white" p={24} style={{ borderRadius: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
        <Title order={3} size="xl" style={{ fontWeight: 700, color: "#111827", marginBottom: 24 }}>
          What to Expect
        </Title>
        <Stack gap={16}>
          {[
            {
              icon: <IconClock size={24} color="#4c7be1" />,
              title: "Arrival & Briefing (10-15 min)",
              text: "Safety introduction and equipment setup",
            },
            {
              icon: <IconUsers size={24} color="#4c7be1" />,
              title: "Ride Time (10-25 min)",
              text: "Enjoy your high-speed ride guided by our instructor",
            },
            {
              icon: <IconMapPin size={24} color="#4c7be1" />,
              title: "Cool Down (5-10 min)",
              text: "Free time to take photos and relax by the beach",
            },
          ].map((step) => (
            <Group key={step.title} gap={16}>
              <Box
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 9999,
                  backgroundColor: "#eff6ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {step.icon}
              </Box>
              <Box>
                <Text style={{ fontWeight: 600, color: "#111827", marginBottom: 4 }}>
                  {step.title}
                </Text>
                <Text style={{ color: "#6b7280" }}>{step.text}</Text>
              </Box>
            </Group>
          ))}
        </Stack>
        <Group gap={8} mt={16} style={{ color: "#4c7be1", cursor: "pointer" }}>
          <IconMap size={20} />
          <Text style={{ fontWeight: 500 }}>View Location Map</Text>
        </Group>
      </Box>

      {/* Included/Excluded */}
      <Box bg="white" p={24} style={{ borderRadius: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
        <Title order={3} size="xl" style={{ fontWeight: 700, color: "#111827", marginBottom: 24 }}>
          Included / Excluded
        </Title>
        <Grid gutter={24}>
          <GridCol span={{ base: 12, md: 6 }}>
            <Text style={{ fontWeight: 600, color: "#111827", marginBottom: 16 }}>Included</Text>
            <Stack gap={12}>
              {[
                "Jet ski unit & fuel",
                "Life jacket",
                "Guide assistance",
                "Locker & towel",
              ].map((item) => (
                <Group key={item} gap={8} align="center" style={{ color: "#374151" }}>
                  <IconCheck size={20} color="#22c55e" />
                  <Text>{item}</Text>
                </Group>
              ))}
            </Stack>
          </GridCol>
          <GridCol span={{ base: 12, md: 6 }}>
            <Text style={{ fontWeight: 600, color: "#111827", marginBottom: 16 }}>Excluded</Text>
            <Stack gap={12}>
              {[
                "Personal expenses",
                "Photo/video add-ons",
                "Hotel transfer (available as add-on)",
              ].map((item) => (
                <Group key={item} gap={8} align="center" style={{ color: "#374151" }}>
                  <IconX size={20} color="#ef4444" />
                  <Text>{item}</Text>
                </Group>
              ))}
            </Stack>
          </GridCol>
        </Grid>
      </Box>
    </Stack>
  );
}

export function ActivityBookingRight() {
  return (
    <Box style={{ position: "sticky", top: 88, marginRight: "auto" }}>
      <BookingForm />
    </Box>
  );
}

export function ActivityDetails() {
  return (
    <Box bg="#f3f4f6" py="md">
      <Container size="xl" px={{ base: 16, sm: 24, lg: 32 }}>
        {/* Activity Header Card */}
        <ActivityHeaderCard />

        {/* Two Column Layout */}
        <Grid gutter={48}>
          {/* Left Column - Activity Details */}
          <GridCol span={{ base: 12, lg: 7 }}>
            <ActivityMainLeft />
          </GridCol>

          {/* Right Column - Booking Form */}
          <GridCol span={{ base: 12, lg: 4 }}>
            <ActivityBookingRight />
          </GridCol>
        </Grid>
      </Container>
    </Box>
  );
}