import { FC, useEffect, useState } from 'react';
import { Text } from './text';
import { gql, useMutation } from '@apollo/client';
import { useToast } from './use-toast';
import { useCredStore } from '@/shared/store/credStore';
import { useRouteStore } from '@/shared/store/prevRouter';

const RECOVERY_BY_EMAIL = gql(`
        mutation ForgotPassword($email: String){
            forgotPassword(forgotPasswordInput: {email: $email})
    }
`);

const RECOVERY_BY_REGISTER = gql(`
mutation sendRegistrationMessage($email: String!){
    resendVerifyCode(email: $email)
}
`);
const RECOVERY_BY_NUMBER = gql(`
        mutation ForgotPassword($number: String){
            forgotPassword(forgotPasswordInput: {number: $number})
    }
`);
export const Timer: FC = () => {
    const [seconds, setSeconds] = useState(60);
    const { email, number } = useCredStore();
    const { route: prevRoute } = useRouteStore();
    const [mutate, { error }] = useMutation(number.length > 0 ? RECOVERY_BY_NUMBER : RECOVERY_BY_EMAIL);
    const [registerMutate] = useMutation(RECOVERY_BY_REGISTER);
    const { toast } = useToast();

    useEffect(() => {
        if (error) {
            toast({ title: error.message, description: error.extraInfo, variant: 'destructive' });
        }
        let interval: NodeJS.Timeout;

        if (seconds > 0) {
            interval = setInterval(() => {
                setSeconds((prev) => prev - 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [seconds, error, toast]);

    return (
        <>
            {seconds === 0 ? (
                <Text
                    type='p'
                    fw={400}
                    position='center'
                    className={'cursor-pointer text-[14px] underline underline-offset-4'}
                    onClick={() => {
                        prevRoute == '/registration'
                            ? registerMutate({ variables: { email: email } })
                            : mutate({
                                  variables: {
                                      email: email.length > 0 && email,
                                      number: number.length > 0 && number,
                                  },
                              });
                        setSeconds(60);
                    }}>
                    Выслать код повторно
                </Text>
            ) : seconds === 60 ? (
                <Text type='p' position='center' className='text-[20px] text-[#262626]' fw={400}>
                    1:00
                </Text>
            ) : (
                <Text type='p' position='center' className='text-[20px] text-[#262626]' fw={400}>
                    {`00:${seconds < 10 ? `0${seconds}` : seconds}`}
                </Text>
            )}
        </>
    );
};
