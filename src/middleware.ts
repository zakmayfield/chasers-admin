import { Path } from '@/shared/types';
import { getToken, type JWT } from 'next-auth/jwt';
import { NextResponse, type NextRequest } from 'next/server';
import { Roles } from './shared/types';
import { paths } from './shared/constants';

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest) {
  const token: JWT | null = await getToken({
    req,
    secret,
  });

  if (!token) {
    return NextResponse.redirect(new URL('/', req.nextUrl));
  }

  const { role } = token;

  if (role !== Roles.SUPER && req.nextUrl.pathname.includes(paths.admins)) {
    return NextResponse.redirect(new URL(paths.dashboard, req.nextUrl));
  }
}

export const config: {
  matcher: Path[];
} = {
  matcher: ['/dashboard', '/orders', '/users', '/admins', '/sandbox'],
};
