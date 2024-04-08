import {
  Container,
  ContainerFull,
  ContentContainer,
  FlexCol,
  FlexRow,
  Spinner,
} from '@/shared/components';
import { getAdmins } from '@/shared/services/queries';
import { GetAdminsData, QueryKeys } from '@/shared/types';
import { merge } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';

interface AllAdminsProps {
  className?: string;
}

export const AllAdmins: FC<AllAdminsProps> = ({ className }) => {
  const { data, isLoading, error } = useQuery<GetAdminsData, Error>({
    queryKey: [QueryKeys.ALL_ADMINS],
    queryFn: getAdmins,
  });

  // TODO: loading / error layout components

  return (
    <ContainerFull className={merge(`${className ?? ''}`)}>
      <FlexCol className='h-full'>
        <h2>All Admins</h2>

        <ContainerFull className='border h-full min-h-[16.5rem] bg-chasers-tertiary'>
          {isLoading ? (
            <FlexRow className='h-full items-center'>
              <Spinner className='text-4xl' />
            </FlexRow>
          ) : (
            <FlexRow>
              {data?.map((admin) => (
                <FlexCol key={admin.id} className=''>
                  <ContentContainer className='border h-full min-w-sm max-w-sm'>
                    <FlexCol className='gap-0 mb-6'>
                      <h3 className='text-green-200'>{admin.username}</h3>
                      <p className='text-gray-300'>{admin.email}</p>
                    </FlexCol>

                    <ContainerFull className='border'>
                      <p className='mb-3'>Permissions</p>
                      <FlexRow>
                        {admin.permissions.map((permission) => (
                          <p
                            key={permission.permissionId}
                            className='text-gray-300 text-base'
                          >
                            {permission.permission.name}
                          </p>
                        ))}
                      </FlexRow>
                    </ContainerFull>
                  </ContentContainer>
                </FlexCol>
              ))}
            </FlexRow>
          )}
        </ContainerFull>
      </FlexCol>
    </ContainerFull>
  );
};
