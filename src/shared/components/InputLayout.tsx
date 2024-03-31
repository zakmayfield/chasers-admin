import { FC } from 'react';

interface InputLayoutProps {
  children: React.ReactNode;
}

export const InputLayout: FC<InputLayoutProps> = ({ children }) => {
  return <div className='flex flex-col gap-3'>{children}</div>;
};
