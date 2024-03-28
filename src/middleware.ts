import { getToken, type JWT } from 'next-auth/jwt';
import { NextResponse, type NextRequest } from 'next/server';

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest) {
  const token: JWT | null = await getToken({
    req,
    secret,
  });

  console.log('token from mw ---', token);

  if (!token) {
    return NextResponse.redirect(new URL('/', req.nextUrl));
  }
}

export const config = {
  matcher: ['/foobar'],
};
