import { gql } from '@apollo/client';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { client } from './lib/apollo';

const PUBLIC_ROUTES = [
  '/login',
  '/registration',
  '/confirmation',
  '/forgot-password',
];

async function checkStaff(token: string, req: NextRequest) {
  const GET_ME = gql(`
    query GetMe {
      getMe {
        isStaff
      }
    }
  `);

  try {
    const { data } = await client.query({
      query: GET_ME,
      context: { headers: { Authorization: `Bearer ${token}` } },
      fetchPolicy: 'no-cache',
    });

    if (!data?.getMe) {
      req.cookies.delete('access_token');
      return false;
    }

    return data.getMe.isStaff;
  } catch (error) {
    console.error('Auth error:', error);
    req.cookies.delete('access_token');
    return false;
  }
}

async function checkAuthorized(token: string, req: NextRequest) {
  const GET_ME = gql(`
    query GetMe {
      getMe {
        isStaff
      }
    }
  `);

  try {
    const { data } = await client.query({
      query: GET_ME,
      context: { headers: { Authorization: `Bearer ${token}` } },
      fetchPolicy: 'no-cache',
    });

    if (!data?.getMe) {
      req.cookies.delete('access_token');
      return false;
    }

    return true;
  } catch (error) {
    console.error('Auth error:', error);
    req.cookies.delete('access_token');
    return false;
  }
}

export default async function middleware(req: NextRequest) {
  const userToken = req.cookies.get('access_token')?.value;
  const path = req.nextUrl.pathname;
  console.log('123');

  if (PUBLIC_ROUTES.some((route) => path.startsWith(route))) {
    return NextResponse.next();
  }
  console.log('321');
  if (!userToken) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }
  const authorized = await checkAuthorized(userToken, req);
  if (!authorized) {
    const response = NextResponse.redirect(new URL('/login', req.nextUrl));
    response.cookies.delete('access_token');
    return response;
  }

  if (path.includes('admin')) {
    const isStaff = await checkStaff(userToken, req);

    if (isStaff === false) {
      const response = NextResponse.redirect(new URL('/login', req.nextUrl));
      response.cookies.delete('access_token');
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|.*\\.png$).*)',
    '/clinicRegistration/',
  ],
};