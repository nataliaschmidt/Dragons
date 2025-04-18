import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { DragonService } from '../services/dragons.service';
import { IDragon, TBodyDragon } from '@/app/types/dragons';

const QUERY_KEYS = {
  allDragons: 'dragons',
  dragonById: 'dragonById',
};

export const UseGetDragons = (sortByName = false) => {
  return useQuery<IDragon[], Error>({
    queryKey: [QUERY_KEYS.allDragons, sortByName],
    queryFn: () => DragonService.getAll(sortByName),
  });
};

export const useGetDragonById = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.dragonById, id],
    queryFn: () => DragonService.getById(id),
    enabled: !!id,
  });
};

export const useCreateDragon = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TBodyDragon) => DragonService.create(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.allDragons] });
    },
  });
};

export const useUpdateDragon = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: TBodyDragon }) =>
      DragonService.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.allDragons] });
    },
  });
};
