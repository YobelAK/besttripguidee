"use client";

import React from "react";
import { Box, Container, Title, Text } from "@mantine/core";

interface LocationMapProps {
  compact?: boolean;
}

export function LocationMap({ compact = false }: LocationMapProps) {
  const position = { lat: -8.748, lng: 115.219 };
  const src = `https://www.google.com/maps?q=${position.lat},${position.lng}&z=13&output=embed`;

  const Content = (
    <Box
      bg="white"
      p={24}
      style={{
        borderRadius: 16,
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        marginTop: 32,
        marginBottom: 32,
      }}
    >
      <Title order={3} size="xl" style={{ fontWeight: 700, color: "#111827", marginBottom: 16 }}>
        Location
      </Title>
      <Text style={{ color: "#6b7280", marginBottom: 16 }}>
        Tanjung Benoa, Bali – popular watersport hub with calm waves and clear waters.
      </Text>
      <Box style={{ height: 360, borderRadius: 12, overflow: "hidden" }}>
        <iframe
          src={src}
          style={{ border: 0, width: "100%", height: "100%" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
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
