'use client';

import React from 'react';
import { ArrowLeft, Anchor, Clock, MapPin, Calendar, X } from 'lucide-react';

export interface WatersportAdventureDetailProps {
  'data-id'?: string;
  onBack?: () => void;
  onAddToTrip?: () => void;
  className?: string;
}

export const WatersportAdventureDetail = ({
  'data-id': dataId,
  onBack,
  onAddToTrip,
  className = ''
}: WatersportAdventureDetailProps) => {
  return (
    <div data-id={dataId} className={className} style={{ width: '100%', backgroundColor: 'white' }}>
      <header
        style={{
          borderBottom: '1px solid #e5e7eb',
          padding: '16px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <button
          onClick={onBack}
          aria-label="Back to Add-ons"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            color: '#284361',
            fontSize: 16,
            fontWeight: 500,
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <ArrowLeft style={{ width: 20, height: 20 }} />
          Back to Add-ons
        </button>
        <button
          onClick={onBack}
          aria-label="Close"
          style={{
            background: 'none',
            border: 'none',
            color: '#9ca3af',
            cursor: 'pointer'
          }}
        >
          <X style={{ width: 24, height: 24 }} />
        </button>
      </header>

      <main style={{ padding: 32, maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <Anchor style={{ width: 32, height: 32, color: '#284361' }} aria-hidden="true" />
          <h1 style={{ fontSize: 30, fontWeight: 700, color: '#284361' }}>Watersport Adventure</h1>
        </div>

        <section style={{ marginBottom: 24 }}>
          <img
            src="/figma-preview.png"
            alt="Person riding a jet ski on turquoise waters"
            style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: 16 }}
          />
        </section>

        <section
          style={{
            backgroundColor: '#f9fafb',
            borderRadius: 12,
            
            marginBottom: 6,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 24
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <Clock style={{ width: 15, height: 15, color: '#4b5563', marginTop: 4, flexShrink: 0 }} aria-hidden="true" />
            <div>
              <p style={{ fontSize: 10, color: '#6b7280', marginBottom: 4 }}>Duration</p>
              <p style={{ fontSize: 12, fontWeight: 600, color: '#000000' }}>1.5 hours</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <MapPin style={{ width: 15, height: 15, color: '#4b5563', marginTop: 4, flexShrink: 0 }} aria-hidden="true" />
            <div>
              <p style={{ fontSize: 10, color: '#6b7280', marginBottom: 4 }}>Location</p>
              <p style={{ fontSize: 12, fontWeight: 600, color: '#000000' }}>Nusa Penida</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <Calendar style={{ width: 15, height: 15, color: '#4b5563', marginTop: 4, flexShrink: 0 }} aria-hidden="true" />
            <div>
              <p style={{ fontSize: 10, color: '#6b7280', marginBottom: 4 }}>Availability</p>
              <p style={{ fontSize: 12, fontWeight: 600, color: '#000000' }}>Daily</p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#284361', marginBottom: 16 }}>About This Package</h2>
          <p style={{ fontSize: 16, color: '#6b7280', lineHeight: 1.6 }}>
            Experience the thrill of riding a jet ski in the beautiful waters of Bali. Our professional instructors will
            guide you through a 15-minute solo ride, ensuring both safety and maximum enjoyment.
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#284361', marginBottom: 16 }}>What's Included</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 16, color: '#6b7280' }}>
              <span
                aria-hidden="true"
                style={{ width: 6, height: 6, borderRadius: 9999, backgroundColor: '#6b7280', marginTop: 8, flexShrink: 0 }}
              />
              Professional equipment
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 16, color: '#6b7280' }}>
              <span
                aria-hidden="true"
                style={{ width: 6, height: 6, borderRadius: 9999, backgroundColor: '#6b7280', marginTop: 8, flexShrink: 0 }}
              />
              Safety briefing
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 16, color: '#6b7280' }}>
              <span
                aria-hidden="true"
                style={{ width: 6, height: 6, borderRadius: 9999, backgroundColor: '#6b7280', marginTop: 8, flexShrink: 0 }}
              />
              Instructor guidance
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 16, color: '#6b7280' }}>
              <span
                aria-hidden="true"
                style={{ width: 6, height: 6, borderRadius: 9999, backgroundColor: '#6b7280', marginTop: 8, flexShrink: 0 }}
              />
              Insurance coverage
            </li>
          </ul>
        </section>

        <section style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
          <div>
            <p style={{ fontSize: 16, color: '#6b7280', textDecoration: 'line-through', marginBottom: 4 }}>IDR 250,000</p>
            <p style={{ fontSize: 30, fontWeight: 700, color: '#000000', marginBottom: 12 }}>IDR 150,000</p>
            <div style={{ display: 'inline-block', backgroundColor: '#d1fae5', padding: '4px 12px', borderRadius: 8 }}>
              <p style={{ fontSize: 14, color: '#2dbe8d', fontWeight: 500 }}>Save 40% when booking online</p>
            </div>
          </div>
          <button
            onClick={onAddToTrip}
            style={{
              backgroundColor: '#284361',
              color: '#ffffff',
              padding: '12px 24px',
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 16,
              border: 'none',
              cursor: 'pointer'
            }}
          >
            + Add to My Trip
          </button>
        </section>
      </main>
    </div>
  );
};
