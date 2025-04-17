'use client';

import React from 'react';
import styles from '../styles/login.module.css';
import { useForm } from 'react-hook-form';
import Input from '../components/Input/Input';

type TFormValues = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { register, handleSubmit } = useForm<TFormValues>();

  const onSubmit = (data: TFormValues) => {
    console.log('Dados do formulário:', data);
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

            <button type="submit" className={styles.button}>
              Entrar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
