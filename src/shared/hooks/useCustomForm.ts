'use client';
import { DefaultValues, Resolver, useForm } from 'react-hook-form';
import type { FormEventType, FormValues } from '@/shared/types';

export const useCustomForm = <T extends FormValues>({
  onSubmit,
  resolver,
  defaultValues,
  action,
}: {
  defaultValues: DefaultValues<T>;
  onSubmit?: (formValues: T) => void;
  resolver: Resolver<T>;
  action?: (data: T) => void;
}) => {
  const methods = useForm<T>({
    resolver,
    defaultValues,
  });

  // TODO: remove `handleSubmit` after refactoring `SignInForm`
  const handleSubmit = (e: FormEventType) => {
    e.preventDefault();
    const formValues = methods.getValues();
    methods.handleSubmit(() => onSubmit?.(formValues))();
  };

  const submitHandler = () => {
    const formValues = methods.getValues();
    submit(formValues);
  };

  const submit = (data: T) => {
    methods.handleSubmit(() => action?.(data))();
  };

  return { methods, handleSubmit, submitHandler };
};
