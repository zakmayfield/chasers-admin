'use client';

import { FC } from 'react';
import { InfoIcon } from '@/shared/components/Icons';
import type { FieldError } from 'react-hook-form';

interface InputErrorProps {
  fieldError?: FieldError;
}

export const InputError: FC<InputErrorProps> = ({ fieldError }) => {
  return (
    <div aria-hidden={!!!fieldError} className='h-7 flex items-center'>
      {fieldError && (
        <div className='flex items-center gap-3'>
          <InfoIcon className='text-error' />
          <p className='text-base text-error'>{fieldError.message}</p>
        </div>
      )}
    </div>
  );
};
