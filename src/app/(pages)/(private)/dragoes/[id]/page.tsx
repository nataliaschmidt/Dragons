'use client';

import { useGetDragonById } from '@/app/api/hooksServices/useDragonsServices';
import DragonCard from '@/app/components/DragonCard';
import Spinner from '@/app/components/Spinner';
import { useParams } from 'next/navigation';
import React from 'react';
import styles from './details.module.css';

export default function DragonDetail() {
  const { id } = useParams();

  const { data: dragon, isLoading } = useGetDragonById(id as string);

  return (
    <>
      <header>Detalhes do dragão</header>
      <div className={styles.container}>
        {isLoading ? (
          <Spinner size={56} />
        ) : dragon ? (
          <DragonCard>
            <h3>{dragon.name}</h3>
            <p>Tipo: {dragon.type || '-'}</p>
            <p>
              Criado em:{' '}
              {dragon.createdAt
                ? new Date(dragon.createdAt).toLocaleDateString()
                : '-'}
            </p>
          </DragonCard>
        ) : (
          <p>Não há detalhes disponíveis</p>
        )}
      </div>
    </>
  );
}
