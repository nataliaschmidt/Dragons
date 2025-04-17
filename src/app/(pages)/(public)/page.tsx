'use client';

import React, { useState } from 'react';
import styles from '../../styles/login.module.css';
import { useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';
import { login } from '@/app/utils/auth';
import { userMock } from '@/app/api/mocks/userMock';
import Input from '@/app/components/Input/Input';

type TFormValues = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { register, handleSubmit } = useForm<TFormValues>();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const router = useRouter();

  const onSubmit = (data: TFormValues) => {
    const { email, password } = data;
    if (email === userMock.email && password === userMock.password) {
      login({ email });
      router.push('/dragoes');
    } else {
      setErrorMessage('Usuário ou senha incorreta');
    }
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Dragões</h1>
        <p>Acesse seu mundo de fantasias!</p>
      </header>

      <main className={styles.container}>
        <div className={styles.form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputs}>
              <Input
                field={register('email')}
                type="email"
                placeholder="Digite seu e-mail"
              />

              <Input
                field={register('password')}
                type="password"
                placeholder="Digite sua senha"
              />
            </div>
            <p className={styles.error}>{errorMessage}</p>
            <button type="submit" className={styles.button}>
              Entrar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
