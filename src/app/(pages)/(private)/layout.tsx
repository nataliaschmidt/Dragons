'use client';

import PrivateRoute from '@/app/components/PrivateRoute';

type TPrivateLayoutProps = {
  children: React.ReactNode;
};

export default function PrivateLayout({ children }: TPrivateLayoutProps) {
  return <PrivateRoute>{children}</PrivateRoute>;
}
