
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useResetPasswordStore } from "@/shared/store/resetPasswordStore";
import { gql, useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const RECOVERY_BY_NUMBER = gql(`
        mutation ForgotPassword($number: String){
            forgotPassword(forgotPasswordInput: {number: $number})
    }
`)
export const RecoveryByNumber: FC = () => {
    const { setNumber } = useResetPasswordStore();
    const router = useRouter();
    const [mutate, { data, error, loading }] = useMutation(RECOVERY_BY_NUMBER, {
        onCompleted() {
            router.replace('/confirmation')
        },
    })
    const formSchema = z.object({
        number: z.string().min(8, "Number no valid")
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            number: "",
        },
    })
    async function onSubmit(values: z.infer<typeof formSchema>) {
        setNumber(values.number)
        mutate({ variables: { number: values.number } })
    }
    const { toast } = useToast();
    useEffect(() => {
        if (error) {
            toast({ title: error.message, description: error.extraInfo, variant: 'destructive' })
        }
    }, [error, toast])
    return (
        <div className="grid gap-5 ">
            <Form {...form}>
                <form action="" onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-[10px]">
                    <FormField
                        control={form.control}
                        name="number"
                        render={({ field }) => (
                            <FormItem className="">
                                <FormControl>
                                    <Input placeholder="Введите номер телефона" {...field} />
                                </FormControl>
                                <FormMessage className="flex-center text-red-400" />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        disabled={form.getValues().number.length ? false : true}
                    >
                        {!loading ? "Продолжить" : "Загрузка..."}
                    </Button>
                </form>
            </Form>
        </div >
    );
};
