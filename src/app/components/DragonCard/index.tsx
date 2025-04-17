import React from 'react';
import styles from './dragonCard.module.css';

type TDragonCardProps = {
  children: React.ReactNode;
};

export default function DragonCard({ children }: TDragonCardProps) {
  return <div className={styles.container}>{children}</div>;
}
