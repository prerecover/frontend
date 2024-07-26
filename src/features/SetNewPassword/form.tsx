'use client';
import { FC, useEffect, useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { gql, useMutation } from '@apollo/client';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { useCredStore } from '@/shared/store/credStore';

const SET_NEW_PASSWORD = gql(`
mutation NewPassword($email: String!, $password: String!){
    newPassword(
        newPasswordInput: { email: $email, password: $password })
}
`);
export const SetNewPasswordForm: FC = () => {
    const { number, email } = useCredStore();
    const router = useRouter();
    const { toast } = useToast();
    const [mutate, { error }] = useMutation(SET_NEW_PASSWORD, {
        onCompleted() {
            router.replace('/');
            toast({ title: 'Password successfully changed!', variant: 'positive' });
        },
    });
    const formSchema = z
        .object({
            password: z
                .string()
                .min(8, {
                    message: 'No valid password',
                })
                .max(50, {
                    message: 'No valid password',
                }),
            password2: z
                .string()
                .min(8, {
                    message: 'No valid password',
                })
                .max(50, {
                    message: 'No valid password',
                }),
        })
        .refine((data) => data.password === data.password2, {
            message: "Passwords don't match",
            path: ['password'],
        });
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: '',
            password2: '',
        },
    });
    useEffect(() => {
        if (error) {
            toast({ title: error.message, description: error.extraInfo, variant: 'destructive' });
        }
    }, [error, toast]);

    async function onSubmit(values: z.infer<typeof formSchema>) {
        mutate({ variables: { email: email, password: values.password } });
    }
    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col '>
                    <FormField
                        control={form.control}
                        name='password'
                        render={({ field }) => (
                            <FormItem className='mb-[30px]'>
                                <FormControl>
                                    <Input placeholder='Введите новый пароль' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='password2'
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder='Подтвердите пароль' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type='submit' className='mt-[30px] '>
                        Продолжить
                    </Button>
                </form>
            </Form>
        </>
    );
};
