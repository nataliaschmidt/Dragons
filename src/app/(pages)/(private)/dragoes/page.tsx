'use client';

import { UseGetDragons } from '@/app/api/hooksServices/useDragonsServices';
import DragonCard from '@/app/components/DragonCard';
import Modal from '@/app/components/Modal';
import Spinner from '@/app/components/Spinner';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

export default function DragonsList() {
  const { data: allDragonsList, isLoading: isLoadingList } = UseGetDragons();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const router = useRouter();

  return (
    <>
    <header>Lista de dragões</header>
    {isLoadingList ? (
      <Spinner size={56} />
    ) : allDragonsList && allDragonsList.length > 0 ? (
      <div className="list-container">
        {allDragonsList.map((dragon) => (
          <DragonCard key={dragon.id}>
            <h3>{dragon.name}</h3>
            <div className="simple-container">
              <FaEye
                size={20}
                cursor={'pointer'}
                aria-label="Clique para visualizar detalhes do dragão"
                onClick={() => router.push(`/dragoes/${dragon.id}`)}
              />
              <MdDelete
                size={20}
                cursor={'pointer'}
                aria-label="Clique para deletar o dragão"
              />
            </div>
          </DragonCard>
        ))}
      </div>
    ) : (
      <div className='simple-container'>

        <p>Não há dragões cadastrados.</p>
      </div>
    )}
    {openModal && <Modal text="lalallalaal" setOpen={setOpenModal} />}
  </>
  );
}
