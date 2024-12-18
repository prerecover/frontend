import { gql } from '@apollo/client';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { client } from './lib/apollo';

const publicRoutes = [
    '/login',
    '/registration',
    '/forgot-password',
    '/new-password',
    '/confirmation',
    '/',
    '/search',
    '/service/*',
];

// 1. Specify protected and public routes

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

        return data.getMe.isStaff;
    } catch {
        req.cookies.delete('access_token');
        return 'redirect';
    }
}

export default async function middleware(req: NextRequest) {
    const userToken = req.cookies.get('access_token')?.value;
    const path = req.nextUrl.pathname;
    const checkError = await checkStaff(userToken || '', req);
    if (!publicRoutes.includes(path) && !userToken) {
        return NextResponse.redirect(new URL('/login', req.nextUrl));
    }

    if (path.includes('admin') && userToken) {
        const isStaff = await checkStaff(userToken, req);
        if (isStaff) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL('/', req.nextUrl));
        }
    }
    if (userToken && checkError === true) {
        return NextResponse.redirect(new URL('/admin/dashboard', req.nextUrl));
    } else {
        return NextResponse.next();
    }
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|assets|.*\\.png$).*)', '/clinicRegistration/'],
};
