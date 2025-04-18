'use client';

import DragonForm from '@/app/components/DragonForm';
import { useParams } from 'next/navigation';
import React from 'react';

export default function EditDragon() {
  const { id } = useParams();

  return (
    <>
      <header>Crie seu dragão</header>
      <p className="introduction">
        Preencha as informações abaixo para editar seu dragão.
      </p>
      <p className="introduction">
        Após a edição, seu dragão atualizará na lista principal.
      </p>

      <DragonForm dragonId={id as string} />
    </>
  );
}
