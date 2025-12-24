"use client";

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export function TourRedirector() {
  const router = useRouter();
  const search = useSearchParams();

  useEffect(() => {
    const next = search.get('next');
    if (next === 'addons') {
      router.replace('/tour/book/addons');
    }
  }, [router, search]);

  return null;
}