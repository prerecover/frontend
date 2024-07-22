"use client"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PasswordInputField } from "@/components/ui/password-input";
import { Text } from "@/components/ui/text";
import Link from "next/link";

export const UserLogin: FC = () => {
    const formSchema = z.object({
        emailOrPassword: z.string().
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
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            emailOrPassword: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }
    return (
        <>
            <Form {...form}>
                <form action="" onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-[10px]">
                    <FormField
                        control={form.control}
                        name="emailOrPassword"
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
                    <Button type="submit" className="mt-3">Войти</Button>
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
