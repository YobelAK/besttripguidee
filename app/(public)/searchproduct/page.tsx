import React, { Suspense } from 'react';
import { Hero } from '@/components/searchproduct/hero';
import { SearchBar } from '@/components/searchproduct/search-bar';
import { PlatformFeatures } from '@/components/searchproduct/platform-features';
import { PopularDestinations } from '@/components/searchproduct/popular-destinations';
import { Loader } from '@mantine/core';
import { SpecialOffers } from '@/components/searchproduct/special-offers';
import { Testimonials } from '@/components/searchproduct/testimonials';
import { Newsletter } from '@/components/searchproduct/newsletter';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
type Option = { value: string; label: string };

async function getRouteOptions(): Promise<{ from: Option[]; to: Option[] }> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) {
    return { from: [], to: [] };
  }
  const select = [
    'departureRoute:routes!fastboat_schedules_departureRouteId_fkey(id,name)',
    'arrivalRoute:routes!fastboat_schedules_arrivalRouteId_fkey(id,name)'
  ].join(',');
  const url = `${supabaseUrl}/rest/v1/fastboat_schedules?select=${encodeURIComponent(select)}&isActive=eq.true`;
  const res = await fetch(url, {
    headers: { apikey: serviceKey, Authorization: `Bearer ${serviceKey}` },
    cache: 'no-store',
  });
  if (!res.ok) {
    return { from: [], to: [] };
  }
  const items = await res.json();
  const fromMap = new Map<string, string>();
  const toMap = new Map<string, string>();
  for (const it of Array.isArray(items) ? items : []) {
    const dr = it?.departureRoute;
    const ar = it?.arrivalRoute;
    if (dr?.id && dr?.name) fromMap.set(dr.id, dr.name);
    if (ar?.id && ar?.name) toMap.set(ar.id, ar.name);
  }
  const from: Option[] = Array.from(fromMap.entries()).map(([value, label]) => ({ value, label }));
  const to: Option[] = Array.from(toMap.entries()).map(([value, label]) => ({ value, label }));
  return { from, to };
}

export default async function HomePage() {
  const { from, to } = await getRouteOptions();
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <SearchBar fromOptions={from} toOptions={to} />
      <SpecialOffers />
      <PlatformFeatures />
      <Suspense
        fallback={
          <div style={{ backgroundColor: '#f8f9fa', padding: '8px 0' }}>
            <div style={{ padding: '64px 16px', maxWidth: 1280, margin: '0 auto' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 224 }}>
                <Loader color="#284361" />
              </div>
            </div>
          </div>
        }
      >
        <PopularDestinations />
      </Suspense>
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
