import Link from 'next/link';
import React from 'react';
import styles from './Menu.module.css';
import { usePathname, useRouter } from 'next/navigation';
import { IoIosLogOut } from 'react-icons/io';
import { logout } from '@/app/utils/auth';

export default function Menu() {
  const router = useRouter();
  const path = usePathname();

  const handleLogout = () => {
    logout();
    router.replace('/');
  };

  return (
    <div className={styles.container}>
      <h3>Bem-vindo!</h3>
      <nav className={styles.nav}>
        <Link
          href="/dragoes"
          className={`${styles.link} ${path === '/dragoes' ? styles.active : ''}`}
        >
          Dragões
        </Link>
        <Link
          href="/dragoes/criardragao"
          className={`${styles.link} ${path === '/dragoes/criardragao' ? styles.active : ''}`}
        >
          Criar dragão
        </Link>
      </nav>
      <button
        onClick={handleLogout}
        aria-label="Realizar logout"
        className={`${styles.button} ${styles.link}`}
      >
        <IoIosLogOut size={20} />
      </button>
    </div>
  );
}
