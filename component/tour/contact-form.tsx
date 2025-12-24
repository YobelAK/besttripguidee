'use client';

import React, { useEffect, useState } from 'react';
import { Paper, Stack, Title, Grid, TextInput, Select, NumberInput, Textarea, Checkbox, Group, Text, Anchor, Modal, ScrollArea, Autocomplete, Box, Input } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { supabase } from '@/lib/supabase/client';

interface ContactFormProps {
  guestCount: number;
  onGuestCountChange: (value: number) => void;
  onChange?: (value: {
    firstName: string;
    lastName: string;
    email: string;
    countryCode: string;
    phone: string;
    specialRequests?: string;
    agreed?: boolean;
  }) => void;
  availableUnits?: number;
}

export function ContactForm({ guestCount, onGuestCountChange, onChange, availableUnits }: ContactFormProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+62');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [agreed, setAgreed] = useState(false);
  const emailError = email && (!email.includes('@') || !email.endsWith('.com')) ? 'Invalid email format' : undefined;
  const [modalOpened, setModalOpened] = useState(false);
  const [modalType, setModalType] = useState<'terms' | 'privacy' | null>(null);
  const openModal = (type: 'terms' | 'privacy') => { setModalType(type); setModalOpened(true) };
  const closeModal = () => { setModalOpened(false); setModalType(null) };
  const [savedTravelers, setSavedTravelers] = useState<Array<{ id?: string; title?: string; firstName: string; lastName: string }>>([]);
  const [profile, setProfile] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (onChange) {
      onChange({ firstName, lastName, email, countryCode, phone, specialRequests, agreed });
    }
  }, [firstName, lastName, email, countryCode, phone, specialRequests, agreed, onChange]);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          const uidKey = (session.user.id || (session.user.email || '').trim().toLowerCase());
          let arr: any = (session.user as any)?.user_metadata?.savedTravelers || [];
          if (!Array.isArray(arr) || arr.length === 0) {
            try {
              const raw = typeof window !== 'undefined' ? localStorage.getItem(`saved_travelers:${uidKey}`) || '' : '';
              arr = raw ? JSON.parse(raw) : [];
            } catch { arr = []; }
          }
          if (Array.isArray(arr)) {
            setSavedTravelers(arr.map((t: any) => ({
              id: t?.id,
              title: String(t?.title || 'Mr'),
              firstName: String(t?.firstName || ''),
              lastName: String(t?.lastName || ''),
            })));
          } else {
            setSavedTravelers([]);
          }
          const metaName = String((session.user as any)?.user_metadata?.full_name || '').trim();
          const metaEmail = String(session.user.email || '').trim();
          try {
            const email = session.user.email || '';
            const uid = session.user.id || '';
            const query = email ? `email=${encodeURIComponent(email)}` : `userId=${encodeURIComponent(uid)}`;
            const res = await fetch(`/api/profile?${query}`, { cache: 'no-store' });
            if (res.ok) {
              const data = await res.json();
              setProfile(data);
            }
          } catch {}
        } else {
          setSavedTravelers([]);
        }
      } catch {}
      setLoading(false);
    };
    load();
  }, []);

  return (
    <Paper shadow="sm" p="xl" radius="lg" bg="white" style={{ position: 'relative' }}>
      <Stack gap="xl">
        {loading && (
          <Box style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0.6)' }} />
        )}
        <Title order={2} size="xl" fw={600} c="dark">Contact Information</Title>
        
        <Grid gutter="xl">
          <Modal
            opened={modalOpened}
            onClose={closeModal}
            title={modalType === 'terms' ? 'Terms of Service' : modalType === 'privacy' ? 'Privacy Policy' : ''}
            size="lg"
            centered
            overlayProps={{ opacity: 0.5 }}
          >
            <ScrollArea style={{ height: 500 }}>
              {modalType === 'terms' ? (
                <Stack gap="md">
                  <Title order={3}>Syarat & Ketentuan BestTripGuide</Title>
                  <Text>Selamat datang di BestTripGuide, penyedia layanan pemesanan untuk perjalanan. Dengan menggunakan layanan kami, Anda menyetujui Syarat & Ketentuan berikut.</Text>
                  <Title order={4}>1. Definisi</Title>
                  <Text>"Kami" mengacu pada BestTripGuide. "Pengguna" adalah pihak yang melakukan pemesanan melalui platform kami. "Operator" adalah penyedia layanan yang bekerja sama dengan kami.</Text>
                  <Title order={4}>2. Pemesanan & Pembayaran</Title>
                  <Text>Pemesanan dianggap berhasil setelah pembayaran terkonfirmasi. Metode pembayaran yang tersedia dapat berupa kartu, virtual account, atau QRIS. Harga dapat berubah sewaktu-waktu mengikuti kebijakan operator.</Text>
                  <Title order={4}>3. Batas Waktu Pembayaran</Title>
                  <Text>Setiap pemesanan memiliki batas waktu pembayaran 15 menit sejak pemesanan dibuat. Jika pembayaran tidak diterima dalam batas waktu, pemesanan dapat otomatis dibatalkan.</Text>
                </Stack>
              ) : modalType === 'privacy' ? (
                <Stack gap="md">
                  <Title order={3}>Kebijakan Privasi BestTripGuide</Title>
                  <Text>Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda saat menggunakan layanan BestTripGuide.</Text>
                  <Title order={4}>1. Data yang Dikumpulkan</Title>
                  <Text>Kami mengumpulkan nama, email, nomor telepon, detail pemesanan, serta data teknis seperti alamat IP dan informasi perangkat untuk peningkatan layanan.</Text>
                  <Title order={4}>2. Penggunaan Data</Title>
                  <Text>Data digunakan untuk memproses pemesanan, dukungan pelanggan, komunikasi terkait layanan, peningkatan fitur, serta kepatuhan terhadap regulasi.</Text>
                </Stack>
              ) : null}
            </ScrollArea>
          </Modal>
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Autocomplete
              label="First Name"
              placeholder="Enter first name"
              required
              data={[
                ...(profile?.fullName ? [String(profile.fullName)] : []),
                ...savedTravelers.map((t) => t.firstName).filter(Boolean)
              ]}
              value={firstName}
              onChange={(val) => {
                const pf = String(profile?.fullName || '').trim();
                if (pf && String(val || '').trim().toLowerCase() === pf.toLowerCase()) {
                  return;
                }
                setFirstName(val);
              }}
              onOptionSubmit={(val) => {
                const t = savedTravelers.find((s) => String(s.firstName || '').toLowerCase() === String(val || '').toLowerCase());
                if (t) {
                  setFirstName(t.firstName || '');
                  setLastName(t.lastName || '');
                  return;
                }
                const pf = String(profile?.fullName || '').trim();
                if (pf) {
                  const isProfile = String(val || '').trim().toLowerCase() === pf.toLowerCase() || String(val || '').trim().toLowerCase() === pf.split(/\s+/)[0]?.toLowerCase();
                  if (isProfile) {
                    const parts = pf.split(/\s+/).filter(Boolean);
                    setFirstName(parts[0] || '');
                    setLastName(parts.length > 1 ? parts.slice(1).join(' ') : '');
                    if (profile?.email) setEmail(String(profile.email));
                    const nat = String(profile?.nationality || '').toLowerCase();
                    const code =
                      nat.includes('indonesia') ? '+62' :
                      nat.includes('malaysia') ? '+60' :
                      nat.includes('singapore') ? '+65' :
                      nat.includes('thailand') ? '+66' :
                      nat.includes('philippines') ? '+63' :
                      countryCode;
                    setCountryCode(code);
                  }
                }
              }}
              styles={{
                label: { fontSize: '14px', fontWeight: 500, color: '#374151', marginBottom: 8 },
                input: {
                  padding: '12px 16px',
                  backgroundColor: 'white',
                  color: '#111827',
                  border: '1px solid #d1d5db',
                  fontSize: '14px',
                  '&::placeholder': { fontSize: '14px' },
                  '&:focus': { 
                    borderColor: '#284361',
                    boxShadow: '0 0 0 2px rgba(40, 67, 97, 0.2)'
                  }
                }
              }}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 3 }}>
            <TextInput
              label="Last Name"
              placeholder="Enter last name"
              value={lastName}
              onChange={(e) => setLastName(e.currentTarget.value)}
              styles={{
                label: { fontSize: '14px', fontWeight: 500, color: '#374151', marginBottom: 8 },
                input: {
                  padding: '12px 16px',
                  backgroundColor: 'white',
                  color: '#111827',
                  border: '1px solid #d1d5db',
                  fontSize: '14px',
                  '&::placeholder': { fontSize: '14px' },
                  '&:focus': { 
                    borderColor: '#284361',
                    boxShadow: '0 0 0 2px rgba(40, 67, 97, 0.2)'
                  }
                }
              }}
            />
          </Grid.Col>
          
          <Grid.Col span={{ base: 12, md: 6 }}>
            <TextInput
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              error={emailError}
              styles={{
                label: { fontSize: '14px', fontWeight: 500, color: '#374151', marginBottom: 8 },
                input: {
                  padding: '12px 16px',
                  backgroundColor: 'white',
                  color: '#111827',
                  border: '1px solid #d1d5db',
                  fontSize: '14px',
                  '&::placeholder': { fontSize: '14px' },
                  '&:focus': { 
                    borderColor: '#284361',
                    boxShadow: '0 0 0 2px rgba(40, 67, 97, 0.2)'
                  }
                }
              }}
            />
          </Grid.Col>
          
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="xs">
              <Input.Wrapper label="Phone Number" withAsterisk styles={{ label: { fontSize: '14px', fontWeight: 500, color: '#374151' } }}>
                <Group gap="sm">
                  <Select
                    data={[
                      { value: '+62', label: '+62' },
                      { value: '+60', label: '+60' },
                      { value: '+65', label: '+65' },
                      { value: '+66', label: '+66' },
                      { value: '+63', label: '+63' },
                      { value: '+1', label: '+1' },
                      { value: '+44', label: '+44' },
                      { value: '+61', label: '+61' }
                    ]}
                    value={countryCode}
                    onChange={(v) => v && setCountryCode(v)}
                    rightSection={<IconChevronDown size={16} />}
                    styles={{
                      input:
                      {
                        padding: '12px 16px',
                        backgroundColor: 'white',
                        color: '#111827',
                        border: '1px solid #d1d5db',
                        width: 80,
                        fontSize: '14px',
                        '&:focus': { 
                          borderColor: '#284361',
                          boxShadow: '0 0 0 2px rgba(40, 67, 97, 0.2)'
                        }
                      }
                    }}
                  />
                  <TextInput
                    placeholder="Enter phone number"
                    required
                    style={{ flex: 1 }}
                    value={phone}
                    onChange={(e) => setPhone(e.currentTarget.value)}
                    styles={{
                      input: {
                        padding: '12px 16px',
                        backgroundColor: 'white',
                        color: '#111827',
                        border: '1px solid #d1d5db',
                        fontSize: '14px',
                        '&::placeholder': { fontSize: '14px' },
                        '&:focus': { 
                          borderColor: '#284361',
                          boxShadow: '0 0 0 2px rgba(40, 67, 97, 0.2)'
                        }
                      }
                    }}
                  />
                </Group>
              </Input.Wrapper>
            </Stack>
          </Grid.Col>
          
          <Grid.Col span={{ base: 12, md: 6 }}>
            <NumberInput
              label="Number of Passengers"
              min={1}
              max={typeof availableUnits === 'number' ? availableUnits : undefined}
              value={guestCount}
              onChange={(value) => {
                const v = typeof value === 'number' ? value : 1;
                const max = typeof availableUnits === 'number' ? availableUnits : undefined;
                const next = max != null ? Math.min(Math.max(1, v), max) : Math.max(1, v);
                onGuestCountChange(next);
              }}
              styles={{
                label: { fontSize: '14px', fontWeight: 500, color: '#374151', marginBottom: 8 },
                input: {
                  padding: '12px 16px',
                  backgroundColor: 'white',
                  color: '#111827',
                  border: '1px solid #d1d5db',
                  fontSize: '14px',
                  '&::placeholder': { fontSize: '14px' },
                  '&:focus': { 
                    borderColor: '#284361',
                    boxShadow: '0 0 0 2px rgba(40, 67, 97, 0.2)'
                  }
                }
              }}
            />
          </Grid.Col>
        </Grid>
        
        <Textarea
          label="Special Requests (Optional)"
          placeholder="Any special requests or notes..."
          rows={4}
          resize="none"
          value={specialRequests}
          onChange={(e) => setSpecialRequests(e.currentTarget.value)}
          styles={{
            label: { fontSize: '14px', fontWeight: 500, color: '#374151', marginBottom: 8 },
            input: {
              padding: '12px 16px',
              backgroundColor: 'white',
              color: '#111827',
              border: '1px solid #d1d5db',
              fontSize: '14px',
              '&::placeholder': { fontSize: '14px' },
              '&:focus': { 
                borderColor: '#284361',
                boxShadow: '0 0 0 2px rgba(40, 67, 97, 0.2)'
              }
            }
          }}
        />
        
        <Checkbox
          label={
            <Text size="sm" c="dimmed">
              I agree to the{' '}
              <Anchor onClick={(e) => { e.preventDefault(); openModal('terms') }} c="#284361" td="hover">
                Terms and Conditions
              </Anchor>{' '}
              and{' '}
              <Anchor onClick={(e) => { e.preventDefault(); openModal('privacy') }} c="#284361" td="hover">
                Privacy Policy
              </Anchor>
            </Text>
          }
          checked={agreed}
          onChange={(e) => setAgreed(e.currentTarget.checked)}
          styles={{
            input: {
              '&:checked': { backgroundColor: '#284361', borderColor: '#284361' },
              '&:focus': { boxShadow: '0 0 0 2px rgba(40, 67, 97, 0.2)' }
            }
          }}
        />
      </Stack>
    </Paper>
  );
}
