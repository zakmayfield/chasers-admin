import {
  ContainerFull,
  ContentContainer,
  FlexCol,
  FlexRow,
  Spinner,
} from '@/shared/components';
import { queryKeys } from '@/shared/constants';
import { getAdmins } from '@/shared/services/queries';
import { GetAdminsData } from '@/shared/types';
import { merge } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';

interface AllAdminsProps {
  className?: string;
}

export const AllAdmins: FC<AllAdminsProps> = ({ className }) => {
  const { data, isLoading, error } = useQuery<GetAdminsData, Error>({
    queryKey: [queryKeys.admins.all],
    queryFn: getAdmins,
  });

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
            <FlexCol>
              <ContentContainer className='border'>Admin 1</ContentContainer>
              <ContentContainer className='border'>Admin 2</ContentContainer>
            </FlexCol>
          )}
        </ContainerFull>
      </FlexCol>
    </ContainerFull>
  );
};
