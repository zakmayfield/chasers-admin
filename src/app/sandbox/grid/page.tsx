import { ContainerMd, ContainerSm, GridLayout } from '@/shared/components';
import { Container } from '@/shared/components';

export default function Page() {
  return (
    <GridLayout
      columns='default'
      gap='lg'
      className='border bg-chasers-tertiary'
    >
      <Container className='border col-span-2 bg-chasers-primary'> </Container>
      <Container className='border col-span-4 bg-chasers-primary'> </Container>
      <Container className='border col-span-full bg-chasers-primary'>
        {' '}
      </Container>
      <Container className='border col-span-4 bg-chasers-primary'> </Container>
      <Container className='border col-span-2 bg-chasers-primary'> </Container>

      <Container className='border col-start-4 col-span-full bg-chasers-primary'>
        {' '}
      </Container>
      <Container className='border col-start-5 col-span-full bg-chasers-primary'>
        {' '}
      </Container>
      <Container className='border col-start-6 col-span-full bg-chasers-primary'>
        {' '}
      </Container>

      <Container className='border col-start-1 col-span-1 row-start-5 bg-chasers-primary'>
        {' '}
      </Container>
      <Container className='border col-start-2 col-span-1 row-start-6 bg-chasers-primary'>
        {' '}
      </Container>
      <Container className='border col-start-3 col-span-1 row-start-7 bg-chasers-primary'>
        {' '}
      </Container>
      <Container className='border col-start-4 col-span-1 row-start-8 bg-chasers-primary'>
        {' '}
      </Container>
      <Container className='border col-start-5 col-span-1 row-start-9 bg-chasers-primary'>
        {' '}
      </Container>
      <Container className='border col-start-6 col-span-1 row-start-10 bg-chasers-primary'>
        {' '}
      </Container>

      <Container className='border col-start-1 col-span-1 row-start-7 bg-chasers-primary'>
        {' '}
      </Container>
      <Container className='border col-start-1 col-span-2 row-start-8 bg-chasers-primary'>
        {' '}
      </Container>
      <Container className='border col-start-1 col-span-3 row-start-9 bg-chasers-primary'>
        {' '}
      </Container>
      <Container className='border col-start-1 col-span-4 row-start-10 bg-chasers-primary'>
        {' '}
      </Container>
    </GridLayout>
  );
}
