import { FC } from 'react';
import Link from 'next/link';
import { merge } from '@/utils';

interface StyledLinkProps {
  path: string;
  content: string;
  className?: string;
}

export const StyledLink: FC<StyledLinkProps> = ({
  path,
  content,
  className,
}) => {
  return (
    <Link href={path} className={merge(`hover:opacity-65 ${className}`)}>
      {content}
    </Link>
  );
};
