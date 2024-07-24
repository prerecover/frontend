"use client"
import { FC, useState } from "react";
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PasswordInputField } from "@/components/ui/password-input"
import { Text } from "@/components/ui/text"
import { useToast } from "@/components/ui/use-toast"
import { setCookie } from "@/shared/lib/hooks/useCookie"
import { gql, useMutation } from "@apollo/client"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Policy } from "./Policy";
import { useCredStore } from "@/shared/store/credStore";
import { useRouteStore } from "@/shared/store/prevRouter";

const RECOVERY_BY_REGISTER = gql(`
mutation sendRegistrationMessage($email: String!){
    resendVerifyCode(email: $email)
}
`)


const REGISTRATION_MUTATION = gql(`
    mutation RegistrationUser($email: String!, $password: String!){
        registrationUser(
            registrationInput: { email: $email, password: $password }
    ) {
        _id
    }
}
`)

export const RegistrationForm: FC = () => {
    const [checked, setChecked] = useState<boolean>(false);
    const { setEmail, email } = useCredStore();
    const { setRoute } = useRouteStore();
    const path = usePathname();
    const router = useRouter();
    const [mutate, { error, loading }] = useMutation(REGISTRATION_MUTATION, {
        onCompleted(data) {
            setRoute(path)
            router.replace('/confirmation')
        },
    })
    const { toast } = useToast();
    useEffect(() => {
        if (error) {
            toast({ title: error.message, description: error.extraInfo, variant: 'destructive' })
        }
    }, [error, toast])
    const formSchema = z.object({
        email: z.string().email("No valid email"),
        password: z.string().
            min(8, {
                message: "No valid password"
            }).
            max(50, {
                message: "No valid password"
            }),
        password2: z.string().
            min(8, {
                message: "No valid password"
            }).
            max(50, {
                message: "No valid password"
            }),
    }).refine((data) => data.password === data.password2, {
        message: "Passwords don't match",
        path: ["password2"]
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            password2: ""
        },
    })
    async function onSubmit(values: z.infer<typeof formSchema>) {
        mutate({
            variables: {
                email: values.email, password: values.password
            }
        })
        setEmail(values.email)
    }
    return (
        <>
            <Form {...form}>
                <form action="" onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-[10px]">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="">
                                <FormControl>
                                    <Input placeholder="Введите эл.почту " type="email"{...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <PasswordInputField onChange={field.onChange} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password2"
                        render={({ field }) => (
                            <FormItem className="mb-[15px]">
                                <FormControl>
                                    <PasswordInputField onChange={field.onChange} placeholder="Подтвердите пароль" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Policy isChecked={checked} setIsChecked={setChecked} />
                    <Button type="submit" className="mt-[15px]">{loading ? "Загрузка" : "Зарегистрироваться"}</Button>
                </form>
            </Form>

        </>
    )
}
