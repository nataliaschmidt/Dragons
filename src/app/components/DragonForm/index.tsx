'use client';

import React, { useEffect } from 'react';
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

type TFormValues = {
  name: string;
  type: string;
};

export default function DragonForm({ dragonId }: { dragonId?: string }) {
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

  const { data: dragon, isLoading: isLoadingGetDragonId } = useGetDragonById(
    dragonId as string
  );

  const { mutate: updateDragon, isPending: isLoadingUpdateDragon } =
    useUpdateDragon();

  const isLoading = isLoadingCreateDragon || isLoadingUpdateDragon;

  const onSubmit = (data: TFormValues) => {
    dragonId
      ? updateDragon(
          {
            id: dragonId,
            data,
          },
          {
            onSuccess: () => {
              router.push('/dragoes');
            },
            onError: (error) => {
              console.error('Erro ao atualizar dragão:', error);
            },
          }
        )
      : createDragon(data, {
          onSuccess: () => {
            router.push('/dragoes');
          },
          onError: (error) => {
            console.error('Erro ao criar dragão:', error);
          },
        });
  };

  useEffect(() => {
    if (dragonId && dragon) {
      reset({
        name: dragon.name,
        type: dragon.type,
      });
    }
  }, [dragonId, dragon]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <label>
        Nome do dragão <span className="alert">*</span>
        <Input
          field={register('name', { required: true })}
          type="text"
          placeholder="Digite o nome do seu dragão"
        />
      </label>

      <label>
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
  );
}
