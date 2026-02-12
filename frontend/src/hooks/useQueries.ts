import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useGetInfo() {
  const { actor, isFetching } = useActor();

  return useQuery<string>({
    queryKey: ['info'],
    queryFn: async () => {
      if (!actor) return '';
      return actor.getInfo();
    },
    enabled: !!actor && !isFetching,
  });
}
