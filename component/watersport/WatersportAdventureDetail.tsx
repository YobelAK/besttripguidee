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
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'right'
        }}
      >
        
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
          <X style={{ width: 20, height: 20 }} />
        </button>
      </header>

      <main style={{ padding: 12, maxWidth: 820, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <Anchor style={{ width: 24, height: 24, color: '#284361' }} aria-hidden="true" />
          <h1 style={{ fontSize: 20, fontWeight: 700, color: '#284361' }}>Watersport Adventure</h1>
        </div>

        <section style={{ marginBottom: 12 }}>
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800"
            alt="Person riding a jet ski on turquoise waters"
            style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 12 }}
          />
        </section>

        <section
          style={{
            backgroundColor: '#f9fafb',
            borderRadius: 12,
            
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 16
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <Clock style={{ width: 20, height: 20, color: '#4b5563', marginTop: 2, flexShrink: 0 }} aria-hidden="true" />
            <div>
              <p style={{ fontSize: 11, color: '#6b7280', marginBottom: 2 }}>Duration</p>
              <p style={{ fontSize: 14, fontWeight: 600, color: '#000000' }}>1.5 hours</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <MapPin style={{ width: 20, height: 20, color: '#4b5563', marginTop: 2, flexShrink: 0 }} aria-hidden="true" />
            <div>
              <p style={{ fontSize: 11, color: '#6b7280', marginBottom: 2 }}>Location</p>
              <p style={{ fontSize: 14, fontWeight: 600, color: '#000000' }}>Nusa Penida</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <Calendar style={{ width: 20, height: 20, color: '#4b5563', marginTop: 2, flexShrink: 0 }} aria-hidden="true" />
            <div>
              <p style={{ fontSize: 11, color: '#6b7280', marginBottom: 2 }}>Availability</p>
              <p style={{ fontSize: 14, fontWeight: 600, color: '#000000' }}>Daily</p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 12 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: '#284361', marginBottom: 8 }}>About This Package</h2>
          <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.4 }}>
            Experience the thrill of riding a jet ski in the beautiful waters of Bali. Our professional instructors will
            guide you through a 15-minute solo ride, ensuring both safety and maximum enjoyment.
          </p>
        </section>

        <section style={{ marginBottom: 12 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: '#284361', marginBottom: 8 }}>What's Included</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: '#6b7280' }}>
              <span
                aria-hidden="true"
                style={{ width: 4, height: 4, borderRadius: 9999, backgroundColor: '#6b7280', marginTop: 6, flexShrink: 0 }}
              />
              Professional equipment
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: '#6b7280' }}>
              <span
                aria-hidden="true"
                style={{ width: 4, height: 4, borderRadius: 9999, backgroundColor: '#6b7280', marginTop: 6, flexShrink: 0 }}
              />
              Safety briefing
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: '#6b7280' }}>
              <span
                aria-hidden="true"
                style={{ width: 4, height: 4, borderRadius: 9999, backgroundColor: '#6b7280', marginTop: 6, flexShrink: 0 }}
              />
              Instructor guidance
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: '#6b7280' }}>
              <span
                aria-hidden="true"
                style={{ width: 4, height: 4, borderRadius: 9999, backgroundColor: '#6b7280', marginTop: 6, flexShrink: 0 }}
              />
              Insurance coverage
            </li>
          </ul>
        </section>

        <section style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16 }}>
          <div>
            <p style={{ fontSize: 11, color: '#6b7280', textDecoration: 'line-through', marginBottom: 2 }}>IDR 250,000</p>
            <p style={{ fontSize: 20, fontWeight: 700, color: '#000000', marginBottom: 8 }}>IDR 150,000</p>
            <div style={{ display: 'inline-block', backgroundColor: '#d1fae5', padding: '4px 10px', borderRadius: 8 }}>
              <p style={{ fontSize: 11, color: '#2dbe8d', fontWeight: 500 }}>Save 40% when booking online</p>
            </div>
          </div>
          <button
            onClick={onAddToTrip}
            style={{
              backgroundColor: '#284361',
              color: '#ffffff',
              padding: '6px 12px',
              borderRadius: 10,
              fontWeight: 700,
              fontSize: 13,
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
