'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { REFETCH_INTERVAL_TIME } from '@/common/constants/common';

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  return (
    <SessionProvider refetchInterval={REFETCH_INTERVAL_TIME} refetchOnWindowFocus={false}>
      {children}
    </SessionProvider>
  );
}
