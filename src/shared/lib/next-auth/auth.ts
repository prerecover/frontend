import NextAuth from 'next-auth';
// import AppleProvider from 'next-auth/providers/apple';
import GoogleProvider from 'next-auth/providers/google';

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
        }),
    ],
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    callbacks: {
        signIn(params) {
            console.log('SIGN IN WORKED GOOD');
            console.log(params);
            return true;
        },
    },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
