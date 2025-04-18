import { IDragon, TBodyDragon } from '@/app/types/dragons';

const BASE_URL = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon';

export const DragonService = {
  getAll: async (sortByName = false): Promise<IDragon[]> => {
    try {
      const res = await fetch(BASE_URL);
      if (!res.ok) throw new Error('Erro ao carregar a listagem de dragões');

      const data: IDragon[] = await res.json();

      return sortByName
        ? data.sort((a, b) => a.name.localeCompare(b.name))
        : data;
    } catch (error) {
      console.error('Erro no serviço de listagem de dragões:', error);
      throw error;
    }
  },

  getById: async (id: string): Promise<IDragon> => {
    try {
      const res = await fetch(`${BASE_URL}/${id}`);
      if (!res.ok) throw new Error('Erro ao buscar dragão');
      return res.json();
    } catch (error) {
      console.error('Erro no serviço ao buscar os detalhes do dragão', error);
      throw error;
    }
  },

  create: async (data: TBodyDragon) => {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Erro ao criar dragão');
    return res.json();
  },
};
