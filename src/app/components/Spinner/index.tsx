import React from 'react';
import styles from './spinner.module.css';
import { PiSpinnerGap } from 'react-icons/pi';

type TSpinnerProps = {
  size: number;
};

export default function Spinner({ size }: TSpinnerProps) {
  return (
    <div className={styles.container}>
      <PiSpinnerGap
        size={size}
        className={styles.spinner}
        aria-label="Carregando conteúdo, por favor aguarde"
      />
    </div>
  );
}
