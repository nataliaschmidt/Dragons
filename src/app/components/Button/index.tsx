import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  onClick,
  type = 'button',
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      type={type}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
