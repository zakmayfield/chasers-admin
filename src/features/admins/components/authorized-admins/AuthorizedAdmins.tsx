import { ContainerFull } from '@/shared/components';
import { getAuthorizedAdmins } from '@/shared/services/queries/admins/getAuthorizedAdmins';
import { QueryKeys } from '@/shared/types';
import { merge } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';

interface AuthorizedAdminsProps {
  className?: string;
}

export const AuthorizedAdmins: FC<AuthorizedAdminsProps> = ({ className }) => {
  const {} = useQuery<any, Error>({
    queryKey: [QueryKeys.AUTHORIZED_ADMINS],
    queryFn: getAuthorizedAdmins,
  });

  return (
    <ContainerFull className={merge(`${className}`)}>
      <h2>Authorized Admins</h2>
    </ContainerFull>
  );
};
