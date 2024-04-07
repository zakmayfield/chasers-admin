import { ContainerFull } from '@/shared/components';
import { merge } from '@/utils';
import { FC } from 'react';

interface AuthorizedAdminsProps {
  className?: string;
}

export const AuthorizedAdmins: FC<AuthorizedAdminsProps> = ({ className }) => {
  return (
    <ContainerFull className={merge(`${className}`)}>
      <h2>Authorized Admins</h2>
    </ContainerFull>
  );
};
