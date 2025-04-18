'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../Input';
import Button from '../Button';
import styles from './DragonForm.module.css';
import {
  useCreateDragon,
  useGetDragonById,
  useUpdateDragon,
} from '@/app/api/hooksServices/useDragonsServices';
import { useRouter } from 'next/navigation';
import Spinner from '../Spinner';
import { IDragon } from '@/app/types/dragons';
import EditDragon from '@/app/(pages)/(private)/dragoes/editardragao/[id]/page';
import { Toast } from '../Toast';

type TFormValues = {
  name: string;
  type: string;
};

export default function DragonForm({ dragon }: { dragon?: IDragon }) {
  const [toastMessage, setToastMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<TFormValues>({
    mode: 'onChange',
    defaultValues: { name: '', type: '' },
  });
  const router = useRouter();
  const { mutate: createDragon, isPending: isLoadingCreateDragon } =
    useCreateDragon();

  const { mutate: updateDragon, isPending: isLoadingUpdateDragon } =
    useUpdateDragon();

  const isLoading = isLoadingCreateDragon || isLoadingUpdateDragon;

  const onSubmit = (data: TFormValues) => {
    const handleSuccess = () => {
      router.push('/dragoes');
    };

    const handleError = (error: Error) => {
      setToastMessage(error.message);
    };

    if (dragon) {
      updateDragon(
        {
          id: dragon.id,
          data,
        },
        {
          onSuccess: handleSuccess,
          onError: handleError,
        }
      );
    } else {
      createDragon(data, {
        onSuccess: handleSuccess,
        onError: handleError,
      });
    }
  };

  useEffect(() => {
    if (dragon) {
      reset({
        name: dragon.name,
        type: dragon.type,
      });
    }
  }, [dragon]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label className={styles.label}>
          Nome do dragão <span className="alert">*</span>
          <Input
            field={register('name', { required: true })}
            type="text"
            placeholder="Digite o nome do seu dragão"
          />
        </label>

        <label className={styles.label}>
          Tipo do dragão
          <Input
            field={register('type')}
            type="text"
            placeholder="Digite o tipo do seu dragão"
          />
        </label>

        <Button type="submit" disabled={!isValid}>
          {isLoading ? <Spinner size={24} /> : 'Salvar'}
        </Button>
      </form>

      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage('')} />
      )}
    </>
  );
}
