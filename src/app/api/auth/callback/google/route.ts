import { client } from '@/lib/apollo';
import { IAuthByGoogle, IAuthByOther } from '@/shared/types';
import { gql } from '@apollo/client';
import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    const url = new URL(req.url);
    const code = url.searchParams.get('code');

    if (!code) {
        return new Response('Authorization code is missing', { status: 400 });
    }

    const oauth2Client = new google.auth.OAuth2(
        process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
        process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI,
    );

    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    const oauth2 = google.oauth2('v2');
    const userInfo = await oauth2.userinfo.v2.me.get({
        auth: oauth2Client,
    });

    const AUTH_MUTATION = gql(`
            mutation AuthByOther ($data: OtherAuthInput!, $key: String!){
                authByOther(authByOther: $data, key: $key) {
                    access_token
                }
            }`);

    const authUser = async (key: 'vk' | 'google', googleData: IAuthByGoogle) => {
        const data: IAuthByOther = {
            image: googleData.picture,
            name: googleData.name,
            id: googleData.id,
            email: googleData.email,
        };
        const { data: mutData } = await client.mutate({
            mutation: AUTH_MUTATION,
            variables: { data, key },
        });
        return mutData.authByOther.access_token;
    };
    return NextResponse.redirect('http://localhost:3001/', {
        headers: {
            'Set-Cookie': `access_token=${await authUser('google', userInfo.data as IAuthByGoogle)}; Path=/; Secure; `,
        },
    });
}
