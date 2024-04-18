'use client';
import { merge } from '@/utils';
import { FC } from 'react';

interface ChangePasswordProps {
  className?: string;
}

export const ChangePassword: FC<ChangePasswordProps> = ({ className }) => {
  return <div className={merge(`${className ?? ''}`)}>component</div>;
};
