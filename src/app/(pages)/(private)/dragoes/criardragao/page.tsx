import Image from 'next/image';
import React from 'react';

import styles from './CreateDragonsPage.module.css';

import DragonForm from '@/app/components/DragonForm';

export default function CreateDragonsPage() {
  return (
    <>
      <header>Crie seu dragão</header>
      <p className="introduction">
        Preencha as informações abaixo para registrar um novo dragão.
      </p>
      <p className="introduction">
        Após o cadastro, seu dragão aparecerá na lista principal.
      </p>

      <DragonForm />
    </>
  );
}
