import React, { SetStateAction } from 'react';
import styles from './Modal.module.css';

type TModalProps = {
  text: string;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
};

export default function Modal({ text, setOpen }: TModalProps) {
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <p>{text}</p>
        <button onClick={() => setOpen(false)} className={styles.button}>
          OK
        </button>
      </div>
    </div>
  );
}
