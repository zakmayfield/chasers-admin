import { useMutation } from '@tanstack/react-query';
import { createAdmin } from '@/shared/services/mutations';

interface UseMutateOptions<T> {
  onSuccessCallback(data: T): void;
  onErrorCallback(error: Error): void;
}

export const useMutate = <T,>({
  onSuccessCallback,
  onErrorCallback,
}: UseMutateOptions<T>) => {
  const { mutate } = useMutation<T, Error, void, unknown>({
    mutationFn: createAdmin,
    onSuccess(data) {
      onSuccessCallback?.(data);
    },
    onError(error) {
      onErrorCallback?.(error);
    },
  });
  return { mutate };
};
