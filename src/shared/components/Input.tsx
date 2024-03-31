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
      <label htmlFor={name}>{label}</label>
      <input id={name} aria-invalid={invalid} {...register(name)} {...props} />
    </>
  );
};
