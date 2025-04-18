'use client';

import DragonForm from '@/app/components/DragonForm';
import { useParams } from 'next/navigation';
import React from 'react';
import { SiRedragon } from 'react-icons/si';
import styles from './DragonEditPage.module.css';
import Image from 'next/image';

export default function EditDragon() {
  const { id } = useParams();

  return (
    <>
      <header>
        <SiRedragon size={44} />
        <h1>Edite seu dragão</h1>
      </header>
      <p className="introduction">
        Preencha as informações abaixo para editar seu dragão.
      </p>
      <p className="introduction">
        Após a edição, seu dragão atualizará na lista principal.
      </p>

      <DragonForm dragonId={id as string} />
      <Image
        className={styles.image}
        alt="Imagem de um dragão"
        src="/images/dragon_edit_page.svg"
        width={600}
        height={600}
      />
    </>
  );
}
