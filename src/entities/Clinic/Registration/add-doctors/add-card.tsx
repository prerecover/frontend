import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { IDoctor } from '@/shared/types/doctor.interface';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function AddDoctorCard({
    doctors,
    setShow,
    setDoctors,
}: {
    doctors: Partial<IDoctor>[];
    setDoctors: React.Dispatch<React.SetStateAction<Partial<IDoctor>[]>>;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const formSchema = z.object({
        firstName: z.string().min(2).max(50),
        lastName: z.string().min(2).max(50),
        exp: z.string().nonempty(),
        age: z.coerce.number().gte(18, 'Age mut be 18 and above'),
        specialization: z.string().min(2),
    });
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            exp: '',
            age: undefined,
            specialization: '',
        },
    });
    function onSubmit(values: z.infer<typeof formSchema>) {
        const { firstName, lastName, exp, specialization } = values;
        setDoctors([...doctors, { firstName, lastName, workExp: parseInt(exp), specialization }]);
        setShow(false);
    }

    return (
        <div className='flex gap-[37px]'>
            <div className='flex flex-col w-full gap-4'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                        <FormField
                            control={form.control}
                            name='firstName'
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder='Имя' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='lastName'
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder='Фамилия' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='age'
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder='Возраст (лет)' {...field} type='number' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='exp'
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder='Опыт (лет)' {...field} type='number' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='specialization'
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder='Специальность' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button variant={'outline'} className='h-[60px]' type='submit'>
                            Добавить
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
