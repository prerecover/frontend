import { client } from '@/lib/apollo';
import { IAuthByOther, IAuthByVk } from '@/shared/types';
import { gql } from '@apollo/client';
import { NextResponse } from 'next/server';

const AUTH_MUTATION = gql(`
            mutation AuthByOther ($data: OtherAuthInput!, $key: String!){
                authByOther(authByOther: $data, key: $key) {
                    access_token
                }
            }`);

export async function GET(request: Request) {
    const code = new URL(request.url).searchParams.get('code');
    const clientId = process.env.NEXT_PUBLIC_VK_CLIENT_ID;
    const clientSecret = process.env.NEXT_PUBLIC_VK_CLIENT_SECRET;
    const redirectUri = process.env.NEXT_PUBLIC_VK_REDIRECT_URI;

    if (!code) {
        return NextResponse.json({ error: 'Authorization code not provided' }, { status: 400 });
    }

    const tokenResponse = await fetch(
        `https://oauth.vk.com/access_token?client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${encodeURIComponent(
            redirectUri!,
        )}&code=${code}`,
        { method: 'GET' },
    );

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
        return NextResponse.json({ error: tokenData.error_description }, { status: 400 });
    }

    const { access_token, user_id, email } = tokenData;

    const userResponse = await fetch(
        `https://api.vk.com/method/users.get?access_token=${access_token}&v=5.131&fields=photo`,
    );

    const userData = await userResponse.json();
    const authUser = async (key: 'vk' | 'google', vkData: IAuthByVk) => {
        const data: IAuthByOther = {
            image: vkData.photo,
            name: vkData.first_name,
            id: vkData.id,
            email: vkData.email,
        };
        const { data: mutData } = await client.mutate({
            mutation: AUTH_MUTATION,
            variables: { data, key },
        });
        return mutData.authByOther.access_token;
    };
    const user = {
        id: user_id.toString(),
        email: email || null,
        photo: userData.response[0].photo,
        first_name: userData.response[0].first_name,
        last_name: userData.response[0].last_name,
    };

    console.log(user);
    if (userData.error) {
        return NextResponse.json({ error: userData.error.error_msg }, { status: 400 });
    }
    return NextResponse.redirect(process.env.NEXT_PUBLIC_FRONTEND_ROOT!, {
        headers: {
            'Set-Cookie': `access_token=${await authUser('vk', user as IAuthByVk)}; Path=/; Secure; `,
        },
    });
}
