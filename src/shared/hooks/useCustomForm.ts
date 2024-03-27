import { DefaultValues, Resolver, useForm } from 'react-hook-form';

type FormValues = {
  [key: string]: string;
};

export const useCustomForm = <T extends FormValues>({
  onSubmit,
  resolver,
  defaultValues,
}: {
  onSubmit: () => void;
  resolver: Resolver<T>;
  defaultValues: DefaultValues<T>;
}) => {
  const methods = useForm<T>({
    resolver,
    defaultValues,
  });

  return { methods };
};
