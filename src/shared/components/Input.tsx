'use client';

import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

interface InputProps {
  label: string;
  name: string;
  invalid: boolean;
  props: {
    placeholder: string;
    type?: string;
    required?: boolean;
  };
}

export const Input: FC<InputProps> = ({ label, name, invalid, props }) => {
  const { register } = useFormContext();
  return (
    <>
      <div>{label}</div>
      <input aria-invalid={invalid} {...register(name)} {...props} />
    </>
  );
};
