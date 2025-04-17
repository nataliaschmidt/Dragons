'use client';

import { useRouter } from 'next/navigation';
import React, { Children, useEffect, useState } from 'react';
import { isAuthenticated } from '../utils/auth';

type TPrivateRouteProps = {
  children: React.ReactNode;
};

export default function PrivateRoute({ children }: TPrivateRouteProps) {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace('/');
    }
  }, []);

  return <>{children}</>;
}
