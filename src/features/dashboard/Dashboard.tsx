'use client';

import { FC } from 'react';

interface DashboardProps {
  email: string;
}

export const Dashboard: FC<DashboardProps> = ({ email }) => {
  return (
    <div>
      <h1>Hello, {email}</h1>
    </div>
  );
};
