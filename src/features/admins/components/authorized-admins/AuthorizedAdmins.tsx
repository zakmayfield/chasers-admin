import {
  Button,
  ContainerFull,
  FlexCol,
  FlexRow,
  Loader,
} from '@/shared/components';
import { useCustomMutation, useCustomQuery } from '@/shared/hooks';
import { authorizeAdmin } from '@/shared/services/mutations';
import { getAuthorizedAdmins } from '@/shared/services/queries/admins';
import {
  AuthorizeAdminRequestData,
  AuthorizeAdminResponseData,
  GetAuthorizedAdminsResponseData,
  QueryKeys,
} from '@/shared/types';
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

  const { mutate } = useCustomMutation<
    AuthorizeAdminResponseData,
    AuthorizeAdminRequestData
  >({
    mutationFn: authorizeAdmin,
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
              <Loader />
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

        <Button
          content='authorize admin'
          action={() => mutate({ email: 'zakmayfield@gmail.com' })}
          className='border'
        />
      </FlexCol>
    </ContainerFull>
  );
};
