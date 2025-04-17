'use client';

import Menu from '@/app/components/Menu';
import PrivateRoute from '@/app/components/PrivateRoute';

type TPrivateLayoutProps = {
  children: React.ReactNode;
};

export default function PrivateLayout({ children }: TPrivateLayoutProps) {
  return (
    <PrivateRoute>
      <Menu />
      <main>{children}</main>
    </PrivateRoute>
  );
}
