import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicRoutes = ['/login', '/registration', '/forgot-password', '/new-password', '/confirmation'];

// 1. Specify protected and public routes

export default async function middleware(req: NextRequest) {
    // 2. Check if the current route is protected or public
    const userToken = req.cookies.get('access_token')?.value;
    const path = req.nextUrl.pathname;

    // 5. Redirect to /login if the user is not authenticated
    if (path.includes('clinicRegistration')) {
        return NextResponse.next()
    }
    if (!publicRoutes.includes(path) && !userToken) {
        return NextResponse.redirect(new URL('/login', req.nextUrl));
    }


    return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)', '/clinicRegistration/'],
};
