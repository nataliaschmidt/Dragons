'use client';

import { useGetDragonById } from '@/app/api/hooksServices/useDragonsServices';
import DragonCard from '@/app/components/DragonCard';
import Spinner from '@/app/components/Spinner';
import { useParams } from 'next/navigation';
import React from 'react';
import styles from './DragonDetailPage.module.css';
import Image from 'next/image';
import { SiRedragon } from 'react-icons/si';

export default function DragonDetailPage() {
  const { id } = useParams();

  const { data: dragon, isLoading } = useGetDragonById(id as string);

  return (
    <>
      <header>
        <SiRedragon size={44} />
        <h1>Detalhes do dragão</h1>
      </header>
      <p className="introduction">Conheça melhor o seu dragão!</p>
      <p className="introduction">
        Abaixo estão os registros oficiais da criatura — nome, tipo e a data em
        que surgiu no nosso mundo.
      </p>
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
      <Image
        className={styles.image}
        alt="Imagem de um dragão no topo de uma montanha, ele está cuspindo fogo"
        src="/images/dragon_create.png"
        width={350}
        height={350}
      />
    </>
  );
}
