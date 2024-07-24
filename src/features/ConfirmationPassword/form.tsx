"use client"
import { FC, useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { Timer } from "@/components/ui/timer";
import { useRouter } from "next/navigation";
import { gql, useMutation } from "@apollo/client";
import { useToast } from "@/components/ui/use-toast";
import { useCredStore } from "@/shared/store/credStore";
import { useRouteStore } from "@/shared/store/prevRouter";
import { Text } from "@/components/ui/text";
interface ConfirmationProps {
    type: "registration" | "reset"
}

const VERIFY_CODE = gql(`
    mutation VerifyCode($email: String!, $code: Int!) {
        verifyCode(verifyCodeInput: { code: $code, email: $email})
}
`)
export const ConfirmationForm: FC<ConfirmationProps> = () => {
    const { route: prevRoute } = useRouteStore();
    const { number, email } = useCredStore();
    const router = useRouter()
    const { toast } = useToast();
    const [mutate, { data, error }] = useMutation(VERIFY_CODE, {
        onCompleted() {
            prevRoute == '/registration' ? router.replace('/login') : router.replace('/new-password')
        }
    })
    const formSchema = z.object({
        pin: z.string().min(4, {
            message: "Your one-time password must be 4 characters.",
        }),
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            pin: "",
        },
    })
    useEffect(() => {
        if (error) {
            toast({ title: error.message, description: error.extraInfo, variant: 'destructive' })
        }
    }, [error, toast])
    async function onSubmit(values: z.infer<typeof formSchema>) {
        mutate({ variables: { email: email, code: parseInt(values.pin) } })

    }
    return (
        <>
            <Text type="h2" position="center" className="text-[20px] text-center" >{prevRoute == "/registration" ? "Завершение регистрации" : "Запрос на восстановление"}</Text>
            <Text type="p" position="center" className="text-[14px] text-grey-700 ">Введите код который был отправлен, для {prevRoute == "/registration" ? "завершения регистрации" : "восстановления доступа"}</Text>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col ">
                    <FormField
                        control={form.control}
                        name="pin"
                        render={({ field }) => (
                            <FormItem className="m-auto mb-[30px]">
                                <FormControl>
                                    <InputOTP maxLength={4} {...field}>
                                        <InputOTPGroup className="gap-8">
                                            <InputOTPSlot index={0} className={`${error ? "border-red-400" : data ? "border-green" : ""}`} />
                                            <InputOTPSlot index={1} className={`${error ? "border-red-400" : data ? "border-green" : ""}`} />
                                            <InputOTPSlot index={2} className={`${error ? "border-red-400" : data ? "border-green" : ""}`} />
                                            <InputOTPSlot index={3} className={`${error ? "border-red-400" : data ? "border-green" : ""}`} />
                                        </InputOTPGroup>
                                    </InputOTP>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Timer />
                    <Button type="submit" className="mt-[30px] ">Продолжить</Button>
                </form>
            </Form>
        </>
    )
}
