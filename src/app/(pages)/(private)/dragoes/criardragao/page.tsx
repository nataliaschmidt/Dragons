import Image from 'next/image';
import React from 'react';

import styles from './DragonCreatePage.module.css';

import DragonForm from '@/app/components/DragonForm';
import { SiRedragon } from 'react-icons/si';

export default function CreateDragonsPage() {
  return (
    <>
      <header>
        <SiRedragon size={44} />
        <h1>Crie seu dragão</h1>
      </header>
      <p className="introduction">
        Preencha as informações abaixo para registrar um novo dragão.
      </p>
      <p className="introduction">
        Após o cadastro, seu dragão aparecerá na lista principal.
      </p>

      <DragonForm />
      <Image
        className={styles.image}
        alt="Imagem de um dragão"
        src="/images/dragon_create_page.svg"
        width={500}
        height={500}
      />
    </>
  );
}
