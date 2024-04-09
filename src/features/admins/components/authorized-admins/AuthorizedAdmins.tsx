import {
  ContainerFull,
  ContentContainer,
  FlexCol,
  FlexRow,
  Spinner,
} from '@/shared/components';
import { getAuthorizedAdmins } from '@/shared/services/queries/admins/getAuthorizedAdmins';
import { AuthorizedAdminsResponseData, QueryKeys } from '@/shared/types';
import { merge } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';

interface AuthorizedAdminsProps {
  className?: string;
}

export const AuthorizedAdmins: FC<AuthorizedAdminsProps> = ({ className }) => {
  const { data, isLoading, error } = useQuery<
    AuthorizedAdminsResponseData,
    Error
  >({
    queryKey: [QueryKeys.AUTHORIZED_ADMINS],
    queryFn: getAuthorizedAdmins,
  });

  return (
    <ContainerFull className={merge(`${className}`)}>
      <FlexCol className='h-full'>
        <h2>Authorized Admins</h2>

        <ContainerFull className='bg-chasers-primary'>
          {isLoading ? (
            <FlexRow className='h-full items-center'>
              <Spinner className='text-4xl' />
            </FlexRow>
          ) : (
            <FlexCol>
              {data?.map((admin) => (
                <ContentContainer key={admin.id} className='border'>
                  {admin.email}
                </ContentContainer>
              ))}
            </FlexCol>
          )}
        </ContainerFull>
      </FlexCol>
    </ContainerFull>
  );
};
