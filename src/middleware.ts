import { gql } from '@apollo/client';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { client } from './lib/apollo';

const publicRoutes = ['/login', '/registration', '/forgot-password', '/new-password', '/confirmation'];

// 1. Specify protected and public routes

async function checkStaff(token: string) {
    const GET_ME = gql(`
query GetMe {
    getMe {
        isStaff
    }
}
`);
    const { data } = await client.query({
        query: GET_ME,
        context: { headers: { Authorization: `Bearer ${token}` } },
        fetchPolicy: 'no-cache',
    });
    return data.getMe.isStaff;
}

export default async function middleware(req: NextRequest) {
    const userToken = req.cookies.get('access_token')?.value;
    const path = req.nextUrl.pathname;

    if (!publicRoutes.includes(path) && !userToken) {
        return NextResponse.redirect(new URL('/login', req.nextUrl));
    }
    if (path.includes('clinicRegistration')) {
        return NextResponse.next();
    }
    if (path.includes('admin') && userToken) {
        const isStaff = await checkStaff(userToken);
        if (isStaff) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL('/', req.nextUrl));
        }
    }
    if (userToken && (await checkStaff(userToken))) {
        return NextResponse.redirect(new URL('/admin/dashboard', req.nextUrl));
    } else {
        return NextResponse.next();
    }
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)', '/clinicRegistration/'],
};
