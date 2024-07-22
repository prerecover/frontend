"use client"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PasswordInputField } from "@/components/ui/password-input";
import { Text } from "@/components/ui/text";
import Link from "next/link";
import { gql, useMutation } from "@apollo/client";
import { useToast } from "@/components/ui/use-toast";
import { useCookie } from "@/shared/lib/hooks/useCookie";

const LOGIN_MUTATION = gql(`
        mutation Login($email: String, $number: String, $password: String!){
            signIn(signIn: {email: $email, password: $password, number: $number}){
                access_token
        }
    }
`)

export const UserLogin: FC = () => {
    const { setCookie } = useCookie();
    const [mutate, { data, error, loading }] = useMutation(LOGIN_MUTATION, {
        onCompleted(data) {
            setCookie('access_token', data.signIn.access_token, 90)
        },
    })
    const { toast } = useToast();
    useEffect(() => {
        if (error) {
            toast({ title: error.message, description: error.extraInfo, variant: 'destructive' })
        }
    }, [error, toast])
    const formSchema = z.object({
        emailOrNumber: z.string().
            min(8, {
                message: "Email or password must be at least 8 characters"
            }).
            max(50, {
                message: "Email or number must be at less 50 characters."
            }),
        password: z.string().
            min(8, {
                message: "No valid password"
            }).
            max(50, {
                message: "No valid password"
            }),
    })
    if (data) console.log(data.signIn.access_token)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            emailOrNumber: "",
        },
    })
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const email = values.emailOrNumber.includes("@") ? values.emailOrNumber : null
        const number = !values.emailOrNumber.includes("@") ? values.emailOrNumber : null
        mutate({ variables: { email: email, number: number, password: values.password } })
    }
    return (
        <>
            <Form {...form}>
                <form action="" onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-[10px]">
                    <FormField
                        control={form.control}
                        name="emailOrNumber"
                        render={({ field }) => (
                            <FormItem className="">
                                <FormControl>
                                    <Input placeholder="Введите номер или почту" {...field} />
                                </FormControl>
                                <FormMessage className="flex-center text-red-400" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <div className="">
                                        <PasswordInputField onChange={field.onChange} />
                                    </div>
                                </FormControl>
                                <FormMessage className="flex-center text-red-400" />
                            </FormItem>
                        )}
                    />
                    <Link href={"/forgot-password"}>
                        <Text type="p" position="end" className="text-grey text-[12px]" >Забыли пароль?</Text>
                    </Link>
                    <Button type="submit" className="mt-3">{loading ? "Загрузка..." : "Войти"}</Button>
                    <div className="flex-center my-3 gap-1">
                        <Text type="p" className="text-[16px] text-grey">
                            Нет учетной записи?
                        </Text>
                        <Link href={"/registration"}>
                            <Text type="p" className="text-[16px] text-blue">
                                Зарегистрироваться
                            </Text>
                        </Link>
                    </div>
                </form>
            </Form>
        </>
    )
}
