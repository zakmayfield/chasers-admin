import {
  ContainerFull,
  ContentContainer,
  FlexCol,
  FlexRow,
  Spinner,
} from '@/shared/components';
import { useCustomQuery } from '@/shared/hooks';
import { getAuthorizedAdmins } from '@/shared/services/queries/admins/getAuthorizedAdmins';
import { GetAuthorizedAdminsResponseData, QueryKeys } from '@/shared/types';
import { merge } from '@/utils';
import { FC } from 'react';

interface AuthorizedAdminsProps {
  className?: string;
}

export const AuthorizedAdmins: FC<AuthorizedAdminsProps> = ({ className }) => {
  const { data, isLoading, error, isError } =
    useCustomQuery<GetAuthorizedAdminsResponseData>({
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
