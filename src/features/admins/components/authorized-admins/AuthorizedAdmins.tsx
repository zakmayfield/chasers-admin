import {
  Button,
  ContainerFull,
  ContentContainer,
  FlexCol,
  FlexRow,
  Spinner,
} from '@/shared/components';
import { useCustomMutation, useCustomQuery } from '@/shared/hooks';
import { getAuthorizedAdmins } from '@/shared/services/queries/admins/getAuthorizedAdmins';
import { GetAuthorizedAdminsResponseData, QueryKeys } from '@/shared/types';
import { merge } from '@/utils';
import { FC } from 'react';

interface AuthorizedAdminsProps {
  className?: string;
}

export const AuthorizedAdmins: FC<AuthorizedAdminsProps> = ({ className }) => {
  const { data, isLoading } = useCustomQuery<GetAuthorizedAdminsResponseData>({
    queryKey: [QueryKeys.AUTHORIZED_ADMINS],
    queryFn: getAuthorizedAdmins,
  });

  const { mutate } = useCustomMutation({
    mutationFn: async () => {
      throw new Error('whoopsie');
    },
    onSuccessCallback(data) {
      console.log('mutation:success', { data });
    },
    onErrorCallback(error) {
      console.log('mutation:error', { error });
    },
  });

  return (
    <ContainerFull className={merge(`${className}`)}>
      <FlexCol className='h-full'>
        <h2>Authorized Admins</h2>

        <ContainerFull className='h-full bg-chasers-primary'>
          {isLoading ? (
            <FlexRow className='h-full items-center'>
              <Spinner className='text-4xl' />
            </FlexRow>
          ) : (
            <FlexCol>
              {data?.map((admin) => (
                <ContainerFull key={admin.id} className='border'>
                  {admin.email}
                </ContainerFull>
              ))}
            </FlexCol>
          )}
        </ContainerFull>

        <Button content='authorize admin' action={mutate} className='border' />
      </FlexCol>
    </ContainerFull>
  );
};
