'use client';

import Menu from '@/app/components/Menu';

type TPrivateLayoutProps = {
  children: React.ReactNode;
};

export default function PrivateLayout({ children }: TPrivateLayoutProps) {
  return (
    <>
      <Menu />
      <main>{children}</main>
    </>
  );
}
