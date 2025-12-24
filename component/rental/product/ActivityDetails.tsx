"use client";

import React from "react";
import { Box, Container, Group, Text, Title, Grid, GridCol, Stack } from "@mantine/core";
import { IconStar, IconClock, IconCalendar, IconUsers, IconMapPin, IconCheck, IconX, IconMap } from "@tabler/icons-react";
import { BookingForm } from "@/components/watersport/product/BookingForm";

export function ActivityHeaderCard() {
  return (
    <Box bg="white" p={24} style={{ borderRadius: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }} mt={48} mb={32}>
      <Group justify="space-between" align="flex-start" gap={24}>
        <Box style={{ flex: 1 }}>
          <Title order={1} size="5xl" style={{ fontWeight: 700, color: "#111827", marginBottom: 8 }}>
            Car Rental + Driver — Full Day
          </Title>
          <Text style={{ color: "#6b7280", marginBottom: 16 }}>8–10 Hours | Private Service</Text>
          <Group gap={16} align="center" mb={16}>
            <Group gap={8} align="center">
              <IconStar size={20} style={{ color: "#fbbf24" }} />
              <Text style={{ fontWeight: 600 }}>4.8</Text>
              <Text style={{ color: "#6b7280" }}>(532 reviews)</Text>
            </Group>
            <Text style={{ color: "#9ca3af" }}>•</Text>
            <Text style={{ color: "#6b7280" }}>2.1k booked</Text>
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
              Best Seller
            </Box>
          </Group>
          <Text style={{ color: "#374151", marginBottom: 24 }}>
            Enjoy Bali with a comfortable car and professional driver. Perfect for day trips, sightseeing, and transfers around the island.
          </Text>
          <Group gap={8} align="center" style={{ color: "#6b7280" }}>
            <IconMapPin size={20} />
            <Text>Pickup: Denpasar or your hotel</Text>
          </Group>
        </Box>
      </Group>

      <Box mt={32} pt={32} style={{ borderTop: "1px solid #e5e7eb" }}>
        <Title order={3} size="xl" style={{ fontWeight: 700, color: "#111827", marginBottom: 24 }}>
          Key Info Overview
        </Title>
        <Grid gutter={24} style={{ justifyContent: "center", alignContent:"center" }}>
          <GridCol span={{ base: 6, md: 4 }}>
            <Box style={{ borderRadius: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.1)", textAlign: "center", paddingBottom: 16 }}>
              <IconClock size={32} style={{ color: "#4b5563", marginBottom: 8 }} />
              <Text size="sm" style={{  color: "#111827" }}>Duration</Text>
              <Text size="sm" style={{ fontWeight: 600,color: "#6b7280" }}>Full Day (8–10 hours)</Text>
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
              <Text size="sm" style={{ fontWeight: 600,color: "#6b7280" }}>Up to 4 passengers</Text>
            </Box>
          </GridCol>
          <GridCol span={{ base: 6, md: 4 }}>
            <Box style={{ borderRadius: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.1)", textAlign: "center", paddingBottom: 16 }}>
              <IconMapPin size={32} style={{ color: "#4b5563", marginBottom: 8 }} />
              <Text size="sm" style={{  color: "#111827" }}>Service Area</Text>
              <Text size="sm" style={{ fontWeight: 600,color: "#6b7280" }}>Bali Mainland</Text>
            </Box>
          </GridCol>
          <GridCol span={{ base: 6, md: 4 }}>
            <Box style={{ borderRadius: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.1)", textAlign: "center", paddingBottom: 16 }}>
              <IconMapPin size={32} style={{ color: "#4b5563", marginBottom: 8 }} />
              <Text size="sm" style={{  color: "#111827" }}>Type</Text>
              <Text size="sm" style={{ fontWeight: 600,color: "#6b7280" }}>Rental Service</Text>
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
      <Box bg="white" p={24} style={{ borderRadius: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
        <Title order={3} size="xl" style={{ fontWeight: 700, color: "#111827", marginBottom: 16 }}>
          Service Overview
        </Title>
        <Text style={{ color: "#374151", marginBottom: 24 }}>
          Private car rental with experienced driver. Ideal for sightseeing, shopping, and flexible itineraries across Bali. Fuel and toll fees included.
        </Text>
        <Grid gutter={16}>
          {[
            "Air-conditioned vehicle",
            "Professional, friendly driver",
            "Fuel & toll fees included",
            "Hotel pickup & drop-off",
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

      <Box bg="white" p={24} style={{ borderRadius: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
        <Title order={3} size="xl" style={{ fontWeight: 700, color: "#111827", marginBottom: 24 }}>
          What to Expect
        </Title>
        <Stack gap={16}>
          {[
            {
              icon: <IconClock size={24} color="#4c7be1" />,
              title: "Flexible Schedule",
              text: "Set your own itinerary, stops, and timing",
            },
            {
              icon: <IconUsers size={24} color="#4c7be1" />,
              title: "Comfortable Ride",
              text: "Clean and well-maintained vehicles",
            },
            {
              icon: <IconMapPin size={24} color="#4c7be1" />,
              title: "Island Coverage",
              text: "Service across popular Bali areas",
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
          <Text style={{ fontWeight: 500 }}>View Service Map</Text>
        </Group>
      </Box>

      <Box bg="white" p={24} style={{ borderRadius: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
        <Title order={3} size="xl" style={{ fontWeight: 700, color: "#111827", marginBottom: 24 }}>
          Included / Excluded
        </Title>
        <Grid gutter={24}>
          <GridCol span={{ base: 12, md: 6 }}>
            <Text style={{ fontWeight: 600, color: "#111827", marginBottom: 16 }}>Included</Text>
            <Stack gap={12}>
              {[
                "Vehicle + driver",
                "Fuel",
                "Toll fees",
                "Pickup & drop-off",
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
                "Parking fees",
                "Overtime charges",
                "Personal expenses",
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
      <BookingForm 
        onContinuePath="/rental/book" 
        buttonColor="#284361"
        unitLabel="Passengers"
        pricePerUnit={550000}
      />
    </Box>
  );
}
