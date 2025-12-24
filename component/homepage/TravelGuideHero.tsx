'use client';
import React from 'react';
import { Box, Container, Group, Title, Text, Button, TextInput } from '@mantine/core';
import homeImg from '../../public/asset/pic/home.png';
import { 
  IconCalendar,
  IconChevronRight
} from '@tabler/icons-react';

export type TravelGuideHeroProps = {
  onMethodologyClick?: () => void;
  selectedDate?: string;
  onDateChange?: (date: string) => void;
  className?: string;
  'data-id'?: string;
};

export function TravelGuideHero({
  onMethodologyClick,
  selectedDate = '',
  onDateChange,
  className,
  'data-id': dataId
}: TravelGuideHeroProps) {
  return (
    <Box
      data-id={dataId}
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: 400,
        display: 'flex',
        alignItems: 'center',
        backgroundImage:
          `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${homeImg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Container size="xl" px="md" py="xl">
        <Group justify="space-between" align="end" gap="xl">
          <Box style={{ flex: 1, maxWidth: 672 }}>
            <Title
              order={1}
              style={{ color: '#ffffff', fontWeight: 700, marginBottom: 12, fontSize: 'clamp(32px, 6vw, 56px)' }}
            >
              Best Trip Guide 2025
            </Title>
            <Text
              style={{
                color: 'rgba(255,255,255,0.95)',
                lineHeight: 1.6,
                fontSize: 'clamp(14px, 2.3vw, 18px)'
              }}
            >
              Compare ratings across Speedboat, Watersport, Tour, and Rental operators — trusted by thousands of travelers.
        </Text>
      </Box>

          <Box
            style={{
              position: 'absolute',
              right: 24,
              bottom: 24
            }}
          >
            <Group gap="md" align="center">
              <Button
                onClick={onMethodologyClick}
                variant="light"
                color="gray"
                size="sm"
                style={{
                  border: '1px solid rgba(255,255,255,0.35)',
                  backgroundColor: 'rgba(192,192,192,0.18)',
                  color: '#ffffff',
                  fontWeight: 600,
                  backdropFilter: 'blur(2px)'
                }}
                rightSection={<IconChevronRight size={16} />}
              >
                Read the Methodology
              </Button>
              <TextInput
                    id="homepage-hero-date"
                    
                    type="date"
                    placeholder="mm/dd/yyyy"
                    leftSection={<IconCalendar size={20} />}
                    // value={departure}
                    // onChange={(e) => handleDepartureChange(e.currentTarget.value)}
                    // min={todayStr}
                    styles={{
                      input: {
                        backgroundColor: '#f5f7fa',
                        border: '1px solid #d1d5db',
                        '&:focus': {
                          borderColor: '#284361'
                        }
                      },
                      label: {
                        fontSize: '14px',
                        color: '#6b7280',
                        marginBottom: '8px'
                      }
                    }}
                  />
            </Group>
          </Box>
        </Group>
      </Container>
    </Box>
  );
}
