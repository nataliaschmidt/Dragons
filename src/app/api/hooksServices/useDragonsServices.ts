import { useQuery } from '@tanstack/react-query';
import { DragonService } from '../services/dragons.service';
import { IDragon } from '@/app/types/dragons';

const QUERY_KEYS = {
  allDragons: 'dragons',
  dragonById: 'dragonById',
};

export const UseGetDragons = () => {
  return useQuery<IDragon[], Error>({
    queryKey: [QUERY_KEYS.allDragons],
    queryFn: DragonService.getAll,
  });
};

export const useGetDragonById = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.dragonById, id],
    queryFn: () => DragonService.getById(id),
    enabled: !!id,
  });
};
