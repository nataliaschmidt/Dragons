import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './Input.module.css';

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'> {
  field: UseFormRegisterReturn;
}

export default function Input({ field, className = '', ...props }: InputProps) {
  return (
    <input {...field} {...props} className={`${styles.input} ${className}`} />
  );
}
