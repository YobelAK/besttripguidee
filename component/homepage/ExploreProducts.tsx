'use client';
import React from 'react';
import { Box, Container, Title, SimpleGrid } from '@mantine/core';
import { Zap, Waves, Map, Car, Ship } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type ProductCardProps = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  iconBgColor: string;
  iconColor: string;
  onClick?: () => void;
  className?: string;
  'data-id'?: string;
};

function ProductCard({
  icon: Icon,
  title,
  subtitle,
  iconBgColor,
  iconColor,
  onClick,
  className,
  'data-id': dataId
}: ProductCardProps) {
  return (
    <Box
      component="button"
      onClick={onClick}
      data-id={dataId}
      className={`product-card ${className || ''}`}
      aria-label={`${title} - ${subtitle}`}
    >
      <Box className="product-icon" style={{ backgroundColor: iconBgColor }}>
        <Icon size={32} color={iconColor} strokeWidth={2} />
      </Box>
      <Title order={3} style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 8 }}>
        {title}
      </Title>
      <Box component="p" style={{ margin: 0, fontSize: 14, color: '#6b7280' }}>
        {subtitle}
      </Box>
    </Box>
  );
}

export type ExploreProductsProps = {
  onActivityClick?: () => void;
  onWatersportClick?: () => void;
  onTourClick?: () => void;
  onRentalClick?: () => void;
  onFastboatClick?: () => void;
  className?: string;
  'data-id'?: string;
};

export function ExploreProducts({
  onActivityClick,
  onWatersportClick,
  onTourClick,
  onRentalClick,
  onFastboatClick,
  className,
  'data-id': dataId
}: ExploreProductsProps) {
  const products = [
    {
      id: 'activity',
      icon: Zap,
      title: 'Activity',
      subtitle: 'Click to create booking',
      iconBgColor: '#fef3c7',
      iconColor: '#facc15',
      onClick: onActivityClick
    },
    {
      id: 'watersport',
      icon: Waves,
      title: 'Watersport',
      subtitle: 'Click to create booking',
      iconBgColor: '#ccf5f2',
      iconColor: '#4ecdc4',
      onClick: onWatersportClick
    },
    {
      id: 'tour',
      icon: Map,
      title: 'Tour',
      subtitle: 'Click to create booking',
      iconBgColor: '#d1f5e8',
      iconColor: '#2dbe8d',
      onClick: onTourClick
    },
    {
      id: 'rental',
      icon: Car,
      title: 'Rental',
      subtitle: 'Click to create booking',
      iconBgColor: '#fee2e2',
      iconColor: '#ef4444',
      onClick: onRentalClick
    },
    {
      id: 'fastboat',
      icon: Ship,
      title: 'Fastboat',
      subtitle: 'Click to create booking',
      iconBgColor: '#dbeafe',
      iconColor: '#284361',
      onClick: onFastboatClick
    }
  ];

  return (
    <Box data-id={dataId} className={className} py="xl" px="md" >
      <style>{`
        .product-card {
          background-color: #ffffff;
          border-radius: 16px;
          border: 1px solid #9ca3af;
          padding: 32px;
          min-height: 240px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          transition: transform 200ms ease, box-shadow 200ms ease;
          cursor: pointer;
        }
        .product-card:hover {
          box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1);
          transform: translateY(-4px);
        }
        .product-card:focus-visible {
          outline: 2px solid #9ca3af;
          outline-offset: 4px;
        }
        .product-icon {
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 24px;
        }
      `}</style>
      <Container size="xl">
        <Title order={2} style={{ color: '#111827', fontWeight: 700, marginBottom: 24 }}>
          Explore Products
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3, xl: 5 }} spacing="lg" style={{ alignItems: 'stretch' }}>
          {products.map((p) => (
            <ProductCard
              key={p.id}
              icon={p.icon}
              title={p.title}
              subtitle={p.subtitle}
              iconBgColor={p.iconBgColor}
              iconColor={p.iconColor}
              onClick={p.onClick}
              data-id={`product-card-${p.id}`}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
