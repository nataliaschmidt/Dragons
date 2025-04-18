'use client';

import {
  useDeleteDragon,
  UseGetDragons,
} from '@/app/api/hooksServices/useDragonsServices';
import DragonCard from '@/app/components/DragonCard';
import Modal from '@/app/components/Modal';
import Spinner from '@/app/components/Spinner';
import { IDragon } from '@/app/types/dragons';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaEdit, FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { SiRedragon } from 'react-icons/si';

export default function DragonsListPage() {
  const { data: allDragonsList, isLoading: isLoadingList } =
    UseGetDragons(true);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedDragonId, setSelectedDragonId] = useState<string | null>(null);
  const router = useRouter();
  const { mutate: deleteDragon } = useDeleteDragon();

  const handleDelete = (id: string) => {
    setOpenModal(true);
    setSelectedDragonId(id);
  };

  return (
    <>
      <header>
        <SiRedragon size={44} />
        <h1>Lista de dragões</h1>
      </header>
      <p className="introduction">
        Aqui você encontra todos os dragões cadastrados!
      </p>
      <p className="introduction">
        Você pode visualizar os detalhes de cada dragão, editar suas informações
        ou até removê-los se necessário.
      </p>
      <p className="introduction">
        Use os botões abaixo de cada dragão para realizar essas ações.
      </p>
      {isLoadingList ? (
        <Spinner size={56} />
      ) : allDragonsList && allDragonsList.length > 0 ? (
        <div className="list-container">
          {allDragonsList.map((dragon: IDragon) => (
            <DragonCard key={dragon.id}>
              <div>
                <h3>{dragon.name}</h3>
              </div>
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
                  onClick={() => handleDelete(dragon.id)}
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
      {openModal && (
        <Modal
          text="Você realmente deseja deletar este dragão?"
          onConfirm={() => {
            if (selectedDragonId) {
              deleteDragon({ id: selectedDragonId });
              setSelectedDragonId(null);
            }
            setOpenModal(false);
          }}
          onCancel={() => {
            setOpenModal(false);
            setSelectedDragonId(null);
          }}
        />
      )}
    </>
  );
}
