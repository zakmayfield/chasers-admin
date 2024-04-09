import { useQuery } from '@tanstack/react-query';
import { UseCustomQueryProps } from '@/shared/types';

export const useCustomQuery = <T>({
  queryKey,
  queryFn,
}: UseCustomQueryProps<T>) => {
  const { data, isLoading, error, isError } = useQuery<T, Error>({
    queryKey,
    queryFn,
  });

  return { data, isLoading, error, isError };
};
