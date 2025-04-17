import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './input.module.css';

type TInputProps = {
  field: UseFormRegisterReturn;
  type?: string;
  disabled?: boolean;
  placeholder?: string;
};

export default function Input({
  field,
  type = 'text',
  disabled = false,
  placeholder = '',
}: TInputProps) {
  return (
    <input
      {...field}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      className={styles.input}
    />
  );
}
