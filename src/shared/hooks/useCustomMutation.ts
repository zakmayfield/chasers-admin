import { UseCustomMutationProps } from '@/shared/types';
import { useMutation } from '@tanstack/react-query';

export const useCustomMutation = <T>({
  mutationFn,
  onSuccessCallback,
  onErrorCallback,
}: UseCustomMutationProps<T>) => {
  const { mutate } = useMutation<T>({
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
