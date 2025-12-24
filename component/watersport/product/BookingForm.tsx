"use client";

import React, { useState } from "react";
import { Box, Text, Group, ActionIcon, Button, Stack, Divider, TextInput } from "@mantine/core";
import { IconMinus, IconPlus, IconAlertCircle, IconCalendar } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

interface BookingFormProps {
  onContinuePath?: string;
  buttonColor?: string;
  unitLabel?: string;
  pricePerUnit?: number;
}

export function BookingForm({
  onContinuePath = "/watersport/book",
  buttonColor = "#284361",
  unitLabel = "Guests",
  pricePerUnit = 1_500_000
}: BookingFormProps) {
  const [date, setDate] = useState<string>('');
  const [units, setUnits] = useState(2);
  const total = units * pricePerUnit;
  const router = useRouter();

  return (
    <Box
      style={{
        backgroundColor: "white",
        borderRadius: 16,
        boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
        padding: 24,
        position: "sticky",
        top: 96,
      }}
    >
      <Text size="xl" style={{ fontWeight: 700, color: "#111827" }} mb="md">
        Your Booking
      </Text>

      {/* Date Selection */}
      <Box mb="md">
        <Text size="sm" style={{ fontWeight: 500, color: "#374151", marginBottom: 8 }}>
          Select Date
        </Text>
        <TextInput
          type="date"
          value={date}
          onChange={(e) => setDate(e.currentTarget.value)}
          placeholder="Pick date"
          rightSection={<IconCalendar size={16} color="#9ca3af" />}
          styles={{
            input: {
              padding: "12px 16px",
              borderColor: "#d1d5db",
            },
          }}
        />
      </Box>

      {/* Unit Selection */}
      <Box mb="md">
        <Text size="sm" style={{ fontWeight: 500, color: "#374151", marginBottom: 8 }}>
          {`Number of ${unitLabel}`}
        </Text>
        <Group justify="space-between" align="center" style={{ border: "1px solid #d1d5db", borderRadius: 8, padding: 12 }}>
          <Text style={{ color: "#374151" }}>{unitLabel}</Text>
          <Group gap={12} align="center">
            <ActionIcon
              onClick={() => setUnits(Math.max(1, units - 1))}
              radius="xl"
              variant="outline"
              style={{ borderColor: "#d1d5db" }}
            >
              <IconMinus size={16} />
            </ActionIcon>
            <Text style={{ width: 32, textAlign: "center", fontWeight: 600 }}>{units}</Text>
            <ActionIcon
              onClick={() => setUnits(units + 1)}
              radius="xl"
              variant="outline"
              style={{ borderColor: "#d1d5db" }}
            >
              <IconPlus size={16} />
            </ActionIcon>
          </Group>
        </Group>
      </Box>

      {/* Price Breakdown */}
      <Divider my="sm" color="#e5e7eb" />
      <Stack gap={8} mb="md">
        <Group justify="space-between">
          <Text style={{ color: "#374151" }}>{unitLabel} (x{units})</Text>
          <Text style={{ color: "#374151" }}>IDR {pricePerUnit.toLocaleString()}</Text>
        </Group>
        <Group justify="space-between">
          <Text style={{ fontWeight: 700, color: "#111827" }}>Total</Text>
          <Text style={{ fontWeight: 700, color: "#111827" }}>IDR {total.toLocaleString()}</Text>
        </Group>
      </Stack>

      {/* CTA Button */}
      <Button
        fullWidth
        style={{ backgroundColor: buttonColor }}
        onClick={() => router.push(onContinuePath)}
        mb="sm"
      >
        Continue to Contact Info →
      </Button>

      {/* Cancellation Policy */}
      <Group gap={8} align="flex-start">
        <IconAlertCircle size={16} color="#6b7280" />
        <Text size="sm" style={{ color: "#6b7280" }}>
          Free cancellation up to 24h before departure. Read our cancellation policy.
        </Text>
      </Group>
    </Box>
  );
}
