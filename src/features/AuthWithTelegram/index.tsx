'use client';
import AuthWith from '@/components/ui/auth-with';
import tgImg from '/public/assets/tg.svg';
import { gql, useMutation } from '@apollo/client';
import { IAuthByTelegram } from '@/shared/types';
import { setCookie } from '@/shared/utils/cookie';

const TELEGRAM_AUTH_MUTATION = gql(`
mutation AuthByTelegram ($input: TelegramAuthInput!){
    authByTelegram(authByTelegram: $input) {
        access_token
    }
}


`);
export default function AuthWithTelegram() {
    const [mutate] = useMutation(TELEGRAM_AUTH_MUTATION, {
        onCompleted(data) {
            setCookie('access_token', data.authByTelegram.access_token, 90);
            window.location.reload();
            window.location.replace('/');
        },
    });
    const tgAuth = () => {
        window.Telegram.Login.auth(
            {
                bot_id: process.env.NEXT_PUBLIC_TELEGRAM_TOKEN,
                request_access: true,
            },
            (data: IAuthByTelegram) => {
                data.id = data.id.toString();
                mutate({ variables: { input: data } });
            },

            // (data: any) => console.log(data),
        );
    };
    return (
        <div onClick={() => tgAuth()} className='cursor-pointer'>
            <AuthWith img={tgImg} text='Войти с помощью Telegram' />
        </div>
    );
}
