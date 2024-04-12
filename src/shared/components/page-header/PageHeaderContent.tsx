import { FC } from 'react';
import { Container } from '../Containers';
import { FlexCol } from '../Flex';

interface PageHeaderContentProps {
  title: string;
  username?: string | null;
}

export const PageHeaderContent: FC<PageHeaderContentProps> = ({
  title,
  username,
}) => {
  return (
    <Container className='flex-grow flex items-center'>
      <FlexCol className='gap-0'>
        <h1 className='rounded-smoother'>{title}</h1>
        <p className='text-gray-200'>{username}</p>
      </FlexCol>
    </Container>
  );
};
