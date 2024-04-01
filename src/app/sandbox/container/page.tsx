import {
  Container,
  ContainerFull,
  ContainerLg,
  ContainerMd,
  ContainerSm,
  FlexRow,
} from '@/shared/components';

export default function Page() {
  return (
    <>
      <ContainerFull className='border'>
        <FlexRow>
          <Container className='border'>
            <h3>
              Container <span className='text-slate-300'>(auto)</span>
            </h3>
          </Container>
          <ContainerSm className='border'>
            <h3>ContainerSm</h3>
          </ContainerSm>
          <ContainerMd className='border'>
            <h3>ContainerMd</h3>
          </ContainerMd>
          <ContainerLg className='border'>
            <h3>ContainerLg</h3>
          </ContainerLg>
          <ContainerFull className='border'>
            <h3>ContainerFull</h3>
          </ContainerFull>
        </FlexRow>
      </ContainerFull>
    </>
  );
}
