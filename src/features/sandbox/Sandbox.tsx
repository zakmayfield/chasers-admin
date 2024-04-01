import Link from 'next/link';
import { FC } from 'react';

interface SandboxProps {}

export const Sandbox: FC<SandboxProps> = ({}) => {
  return (
    <div>
      <nav>
        <Link href='/sandbox/container'>container</Link>
      </nav>
    </div>
  );
};
