'use client';

import { FormProvider, UseFormReturn } from 'react-hook-form';
import { FormEventType, FormValues } from '@/shared/types';

type FormLayoutProps<T extends FormValues> = {
  children: React.ReactNode;
  handleSubmit: (e: FormEventType) => void;
  methods: UseFormReturn<T, any, undefined>;
};

export const FormLayout = <T extends FormValues>({
  children,
  handleSubmit,
  methods,
}: FormLayoutProps<T>) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit} className='max-w-lg mx-auto'>
        <div className='flex flex-col gap-3'>{children}</div>
      </form>
    </FormProvider>
  );
};
