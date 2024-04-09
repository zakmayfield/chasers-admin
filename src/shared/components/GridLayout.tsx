import { FC } from 'react';
import { merge } from '@/utils';
import { Container } from '@/shared/components';

interface GridLayoutProps {
  children: React.ReactNode;
  columns?: Sizes;
  gap?: Sizes;
  className?: string;
}

type Sizes = 'xs' | 'sm' | 'default' | 'lg' | 'xl';

const GRID_SIZES = {
  xs: 'grid-cols-2',
  sm: 'grid-cols-4',
  default: 'grid-cols-6',
  lg: 'grid-cols-8',
  xl: 'grid-cols-12',
};

const GAP_SIZES = {
  xs: 'gap-1',
  sm: 'gap-2',
  default: 'gap-3',
  lg: 'gap-6',
  xl: 'gap-12',
};

export const GridLayout: FC<GridLayoutProps> = ({
  children,
  columns = 'default',
  gap = 'default',
  className,
}) => {
  return (
    <Container
      className={merge(`
        grid 
        ${columns && GRID_SIZES[columns]}
        ${gap && GAP_SIZES[gap]}
        ${className ?? ''}
      `)}
    >
      {children}
    </Container>
  );
};
