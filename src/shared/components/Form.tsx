'use client';

import { FormProvider, UseFormReturn } from 'react-hook-form';
import { FormEventType, FormValues } from '@/shared/types';
import { merge } from '@/utils';

type FormProps<T extends FormValues> = {
  children: React.ReactNode;
  handleSubmit: (e: FormEventType) => void;
  methods: UseFormReturn<T, any, undefined>;
  classname?: string;
};

export const Form = <T extends FormValues>({
  children,
  handleSubmit,
  methods,
  classname,
}: FormProps<T>) => {
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit}
        className={merge(`max-w-lg mx-auto p-6 ${classname ?? ''}`)}
      >
        <div className='flex flex-col gap-3'>{children}</div>
      </form>
    </FormProvider>
  );
};
