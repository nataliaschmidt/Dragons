'use client';

import { UseGetDragons } from '@/app/api/hooksServices/useDragonsServices';
import DragonCard from '@/app/components/DragonCard';
import Modal from '@/app/components/Modal';
import Spinner from '@/app/components/Spinner';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaEdit, FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

export default function DragonsListPage() {
  const { data: allDragonsList, isLoading: isLoadingList } =
    UseGetDragons(true);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const router = useRouter();

  return (
    <>
      <header>Lista de dragões</header>
      <p className="introduction">
        Aqui você encontra todos os dragões cadastrados!
      </p>
      <p className="introduction">
        Você pode visualizar os detalhes de cada dragão, editar suas informações
        ou até removê-los se necessário.
      </p>
      <p className="introduction">
        Use os botões ao lado de cada dragão para realizar essas ações com
        facilidade.
      </p>
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
                <FaEdit
                  size={20}
                  cursor={'pointer'}
                  aria-label="Clique para editar seu dragão"
                  onClick={() =>
                    router.push(`/dragoes/editardragao/${dragon.id}`)
                  }
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
        <div className="simple-container">
          <p>Não há dragões cadastrados.</p>
        </div>
      )}
      {openModal && <Modal text="lalallalaal" setOpen={setOpenModal} />}
    </>
  );
}
