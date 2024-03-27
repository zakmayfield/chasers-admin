import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

interface InputProps {
  label: string;
  name: string;
  props: {
    placeholder: string;
  };
}

export const Input: FC<InputProps> = ({ label, name, props }) => {
  const { register } = useFormContext();
  return (
    <>
      <div>{label}</div>
      <input {...register(name)} {...props} />
    </>
  );
};
