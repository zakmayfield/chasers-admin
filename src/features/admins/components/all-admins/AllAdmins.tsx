import { ContainerFull, FlexCol, FlexRow, Loader } from '@/shared/components';
import { useCustomQuery } from '@/shared/hooks';
import { getAdmins } from '@/shared/services/queries';
import { QueryKeys } from '@/shared/types';
import { merge } from '@/utils';
import { FC } from 'react';

interface AllAdminsProps {
  className?: string;
}

export const AllAdmins: FC<AllAdminsProps> = ({ className }) => {
  const { data, isLoading, error, isError } = useCustomQuery({
    queryKey: [QueryKeys.ALL_ADMINS],
    queryFn: getAdmins,
  });

  return (
    <ContainerFull className={merge(`${className ?? ''}`)}>
      <FlexCol className='h-full'>
        <h2>All Admins</h2>

        <ContainerFull className='h-full min-h-[16.5rem] bg-chasers-primary'>
          {isLoading ? (
            <Loader />
          ) : (
            <FlexRow>
              {data?.map((admin) => (
                <FlexCol key={admin.id} className='w-full'>
                  <ContainerFull className='border h-full'>
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
                  </ContainerFull>
                </FlexCol>
              ))}
            </FlexRow>
          )}
        </ContainerFull>
      </FlexCol>
    </ContainerFull>
  );
};
