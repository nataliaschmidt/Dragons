import { useEffect, useState } from 'react';
import styles from './Toast.module.css';

type TToastProps = {
  message: string;
  onClose: () => void;
};

export const Toast = ({ message, onClose }: TToastProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return <div className={styles.toast}>{message}</div>;
};
