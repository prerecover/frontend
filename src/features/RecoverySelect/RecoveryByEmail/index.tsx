import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useCredStore } from "@/shared/store/credStore";
import { gql, useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const RECOVERY_BY_EMAIL = gql(`
        mutation ForgotPassword($email: String){
            forgotPassword(forgotPasswordInput: {email: $email})
    }
`)
export const RecoveryByEmail: FC = () => {
    const { setEmail } = useCredStore();
    const router = useRouter();
    const [mutate, { error, loading }] = useMutation(RECOVERY_BY_EMAIL, {
        onCompleted() {
            router.replace('/confirmation')
        },
    })
    const formSchema = z.object({
        email: z.string().email("Email no valid")
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    })
    async function onSubmit(values: z.infer<typeof formSchema>) {
        setEmail(values.email)
        mutate({ variables: { email: values.email } })
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
                        name="email"
                        render={({ field }) => (
                            <FormItem className="">
                                <FormControl>
                                    <Input placeholder="Введите эл.почту " {...field} />
                                </FormControl>
                                <FormMessage  />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        disabled={form.getValues().email.length ? false : true}
                    >
                        {!loading ? "Продолжить" : "Загрузка..."}
                    </Button>
                </form>
            </Form>
        </div >
    );
};
