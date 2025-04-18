import React, { SetStateAction } from 'react';
import styles from './Modal.module.css';
import Button from '../Button';

type TModalProps = {
  text: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function Modal({ text, onConfirm, onCancel }: TModalProps) {
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <p>{text}</p>
        <div className={styles.container}>
          <Button onClick={onConfirm}>Confirmar</Button>
          <Button onClick={onCancel}>Cancelar</Button>
        </div>
      </div>
    </div>
  );
}
