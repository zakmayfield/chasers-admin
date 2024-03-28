import { DefaultValues, Resolver, useForm } from 'react-hook-form';
import type { Event, FormValues } from '@/shared/types';

export const useCustomForm = <T extends FormValues>({
  onSubmit,
  resolver,
  defaultValues,
}: {
  onSubmit: (e: Event, formValues: T) => void;
  resolver: Resolver<T>;
  defaultValues: DefaultValues<T>;
}) => {
  const methods = useForm<T>({
    resolver,
    defaultValues,
  });

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const formValues = methods.getValues();
    methods.handleSubmit(() => onSubmit(e, formValues))();
  };

  return { methods, handleSubmit };
};
