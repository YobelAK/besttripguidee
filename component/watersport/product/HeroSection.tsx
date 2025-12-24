"use client";

import React, { useState } from "react";
import { Box, Container, ActionIcon, Group, Text } from "@mantine/core";
import { IconChevronLeft, IconChevronRight, IconPhoto } from "@tabler/icons-react";

interface HeroSectionProps {
  compact?: boolean;
}

export function HeroSection({ compact = false }: HeroSectionProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1537519646099-335112f03225?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1583622824584-8c9b0a6b4e6d?w=1200&h=600&fit=crop",
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const ImageBlock = (
    <Box
      style={{
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow:
          "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
        height: 610,
        marginTop: 48,
      }}
    >
      {/* Image */}
      <img
        src={images[currentImage]}
        alt="Jet Ski Adventure"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />

      {/* Navigation Arrows */}
      <ActionIcon
        onClick={prevImage}
        radius="xl"
        size={40}
        variant="filled"
        color="white"
        style={{
          position: "absolute",
          left: 16,
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255,255,255,0.9)",
        }}
      >
        <IconChevronLeft size={20} color="#1f2937" />
      </ActionIcon>
      <ActionIcon
        onClick={nextImage}
        radius="xl"
        size={40}
        variant="filled"
        color="white"
        style={{
          position: "absolute",
          right: 16,
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255,255,255,0.9)",
        }}
      >
        <IconChevronRight size={20} color="#1f2937" />
      </ActionIcon>

      {/* View Gallery Button */}
      <ActionIcon
        radius="md"
        variant="filled"
        color="white"
        style={{
          position: "absolute",
          bottom: 16,
          right: 16,
          padding: 8,
          backgroundColor: "rgba(255,255,255,0.9)",
        }}
      >
        <Group gap={8} align="center">
          <IconPhoto size={16} color="#1f2937" />
          <Text size="sm" style={{ color: "#1f2937", fontWeight: 500 }}>
            View Gallery
          </Text>
        </Group>
      </ActionIcon>

      {/* Dots Indicator */}
      <Group
        gap={8}
        style={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentImage(index)}
            style={{
              width: 8,
              height: 8,
              borderRadius: 9999,
              backgroundColor: index === currentImage ? "#ffffff" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
            }}
          />
        ))}
      </Group>
    </Box>
  );

  if (compact) {
    return ImageBlock;
  }

  return (
    <Box bg="white">
      <Container size="xl" px={{ base: 16, sm: 24, lg: 32 }} py="lg" style={{ marginTop: 16 }}>
        {ImageBlock}
      </Container>
    </Box>
  );
}