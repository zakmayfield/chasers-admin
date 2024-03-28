import { DefaultValues, Resolver, useForm } from 'react-hook-form';
import type { FormEvent } from 'react';
import type { FormValues } from '@/shared/types';

export const useCustomForm = <T extends FormValues>({
  onSubmit,
  resolver,
  defaultValues,
}: {
  onSubmit: (formValues: T) => void;
  resolver: Resolver<T>;
  defaultValues: DefaultValues<T>;
}) => {
  const methods = useForm<T>({
    resolver,
    defaultValues,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValues = methods.getValues();
    methods.handleSubmit(() => onSubmit(formValues))();
  };

  return { methods, handleSubmit };
};
