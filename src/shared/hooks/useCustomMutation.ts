import { UseCustomMutationProps } from '@/shared/types';
import { useMutation } from '@tanstack/react-query';

export const useCustomMutation = <T, V>({
  mutationFn,
  onSuccessCallback,
  onErrorCallback,
}: UseCustomMutationProps<T, V>) => {
  const { mutate } = useMutation<T, Error, V, unknown>({
    mutationFn,
    onSuccess(data) {
      onSuccessCallback?.(data);
    },
    onError(error) {
      onErrorCallback?.(error);
    },
  });

  return { mutate };
};
