'use client';

import { FC, useEffect } from 'react';
import type { FieldError } from 'react-hook-form';
import { PiInfoDuotone } from 'react-icons/pi';

interface InputErrorProps {
  fieldError?: FieldError;
}

export const InputError: FC<InputErrorProps> = ({ fieldError }) => {
  useEffect(() => {
    console.log({ fieldError });
  }, [fieldError]);

  return (
    <div aria-hidden={!!!fieldError} className='h-7 flex items-center'>
      {fieldError && (
        <div className='flex items-center gap-3'>
          <PiInfoDuotone className='text-red-400' />
          <p className='text-base text-red-400'>{fieldError.message}</p>
        </div>
      )}
    </div>
  );
};
