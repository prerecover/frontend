'use client';
import { useAuth } from '@/app/(auth)/auth-wrapper';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Text } from '@/components/ui/text';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { getCookie } from '@/shared/lib/hooks/useCookie';
import { ICountry } from '@/shared/types/country.interface';
import { formatDate } from '@/shared/utils/formatDate';
import { gql, useMutation, useQuery } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarIcon } from 'lucide-react';
import { FC, useEffect, useState } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import AccountFormNameField from './fields/name';
import Image from 'next/image';

const GET_COUNTRIES = gql(`
query Countries {
    countries {
        _id
        slug
        title
    }
}
`);
const CHANGE_ME_MUTATION = gql(`
        mutation ChangeMe(
            $changeInput: UpdateUserInput!
){
            changeMe(changeMeInput: $changeInput){
        _id
        address
        avatar
        birthday
        email
        city
        country{
            _id
            title 
        }
        firstName
        lastName
        login
        number
        sex
        surname
        }
    }
`);

export default function AccountMainForm({
    className,
}: {
    className: string;
    medForm: UseFormReturn<{
        age: number;
        height: number;
        weight: number;
        pressureStart: number;
        pressureEnd: number;
        oxygen: number;
        pulse: number;
        allergy: string;
        sleepTime: number;
        temperature: number;
    }>;
    form: UseFormReturn<{
        firstName: string;
        lastName: string;
        number: string;
        email: string;
        login: string;
        address: string;
        city: string;
        birthday: Date;
        sex: boolean;
        countryTitle: string;
    }>;
}) {
    const { setUser, user } = useAuth();
    const [date, setDate] = useState<Date>(new Date());
    const formSchema = z.object({
        firstName: z.string(),
        lastName: z.string(),
        number: z.string(),
        email: z.string(),
        login: z.string(),
        address: z.string(),
        city: z.string(),
        birthday: z.date(),
        sex: z.boolean(),
        countryTitle: z.string(),
    });
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            birthday: new Date(),
        },
    });
    const { toast } = useToast();
    const [token, setToken] = useState<string | undefined>();
    const { data: countries } = useQuery(GET_COUNTRIES);
    const [mutate, { loading }] = useMutation(CHANGE_ME_MUTATION, {
        context: { headers: { Authorization: token ? `Bearer ${token}` : '' } },
        onCompleted(data) {
            toast({ title: 'Данные о профиле успешно изменены!', variant: 'positive' });
            setUser({ appointments: user.appointments, ...data.changeMe });
        },
    });
    console.log(user);
    useEffect(() => {
        form.setValue('countryTitle', user.country?.title || '');
        form.setValue('firstName', user.firstName || '');
        form.setValue('lastName', user.lastName || '');
        form.setValue('birthday', new Date(user.birthday || 0));
        form.setValue('login', user.login || '');
        form.setValue('number', user.number || '');
        form.setValue('email', user.email || '');
        form.setValue('sex', user.sex || false);
        form.setValue('address', user.address || '');
        form.setValue('city', user.city || '');
        setToken(getCookie('access_token'));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const { birthday } = values;
        const age = Math.abs(new Date().getUTCFullYear() - date.getUTCFullYear());
        console.log(age);
        if (age < 18) {
            toast({ title: 'Ваш возраст меньше 18 лет!', variant: 'destructive' });
            return;
        }
        // [lastName, firstName, login, sex, city, email, number].forEach((val) => {
        //     if (val == '') {
        //         toast({ title: `Указаны не все поля`, variant: 'destructive' });
        //     }
        // });
        mutate({
            variables: { changeInput: { ...form.getValues() } },
        });
    }
    return (
        <div className={className}>
            <Form {...form}>
                <Text type='p' className='text-[20px] font-medium'>
                    Основная информация
                </Text>
                <form
                    action=''
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='flex flex-col gap-[10px] desktop:grid desktop:grid-cols-2 mt-3 relative'>
                    <AccountFormNameField field={form.watch('firstName')} setField={form.setValue} placeholder='Имя' />
                    <AccountFormNameField
                        field={form.watch('lastName')}
                        setField={form.setValue}
                        placeholder='Фамилия'
                    />
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={'outline'}
                                className={cn(
                                    'w-full pl-7 py-7 text-left font-normal h-full max-h-[58px]',
                                    form.watch('birthday') && 'text-muted-foreground',
                                )}>
                                {form.watch('birthday') != new Date(0) ? (
                                    formatDate(form.watch('birthday'))
                                ) : (
                                    <span>Выберите дату</span>
                                )}
                                <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent
                            className='w-full  bg-white border border-solid border-blue rounded-[12px]'
                            align='start'>
                            <Calendar setDate={setDate} isAccount={true} />
                        </PopoverContent>
                    </Popover>
                    <Select
                        onValueChange={(e) => form.setValue('sex', e == 'Мужчина')}
                        value={form.watch('sex') ? 'Мужчина' : 'Женщина'}>
                        <FormControl>
                            <SelectTrigger className='w-full py-7 pr-5 pl-6 border-[1px] border-blue rounded-[8px] bg-[#fff]'>
                                <SelectValue
                                    placeholder='Select a verified email to display'
                                    defaultValue={form.watch('sex') ? 'Мужчина' : 'Женщина'}
                                />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent className='border-blue fixed bg-white rounded-[12px] flex flex-col gap-10'>
                            <SelectItem value='Мужчина' className='cursor-pointer'>
                                Мужчина
                            </SelectItem>
                            <SelectItem value='Женщина' className='cursor-pointer'>
                                Женщина
                            </SelectItem>
                        </SelectContent>
                    </Select>
                    <Input
                        value={form.watch('login')}
                        onChange={(e) => form.setValue('login', e.currentTarget.value)}
                        className='border-blue'
                        placeholder='Логин'
                    />
                    <FormField
                        control={form.control}
                        name='countryTitle'
                        render={({ field }) => (
                            <FormItem>
                                <Select onValueChange={field.onChange} defaultValue={user?.country?.title}>
                                    <FormControl>
                                        <SelectTrigger className='w-full py-7 pr-5 pl-6 border-[1px] border-blue rounded-[8px] bg-[#fff]'>
                                            <SelectValue placeholder={user?.country?.title} />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className='border-blue bg-white rounded-[12px] flex flex-col gap-10 '>
                                        {countries?.countries.map((country: ICountry) => (
                                            <SelectItem
                                                key={country._id}
                                                value={country.title}
                                                className='cursor-pointer'>
                                                {country.title}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='city'
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder='Город' className='border-blue' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='address'
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder='Адрес' className='border-blue' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Text type='p' className='text-grey-700 text-[14px] font-medium mobile:mt-7 desktop:col-span-2'>
                        Защита профиля
                    </Text>
                    <FormField
                        control={form.control}
                        name='number'
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <div
                                        className={cn(
                                            'bg-white rounded-[12px] border-solid border-[1px] border-blue flex justify-between relative',
                                            field.value && 'border-green',
                                        )}>
                                        <div className='flex flex-col w-full p-4'>
                                            <Text type='p' className='text-[14px] font-medium text-grey-700'>
                                                Номер
                                            </Text>
                                            <input {...field} />
                                        </div>
                                        <Image
                                            src={'/assets/tick-circle.svg'}
                                            width={20}
                                            height={20}
                                            alt='success'
                                            className={cn('mx-4', !field.value && 'hidden')}
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <div
                                        className={cn(
                                            'bg-white rounded-[12px] border-solid border-[1px] border-blue flex justify-between relative',
                                            field.value && 'border-green',
                                        )}>
                                        <div className='flex flex-col w-full p-4'>
                                            <Text type='p' className='text-[14px] font-medium text-grey-700'>
                                                Эл.почта
                                            </Text>
                                            <input {...field} />
                                        </div>
                                        <Image
                                            src={'/assets/tick-circle.svg'}
                                            width={20}
                                            height={20}
                                            alt='success'
                                            className={cn('mx-4', !field.value && 'hidden')}
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className='desktop:hidden' type='submit'>
                        {loading ? 'Сохранение...' : 'Сохранить'}
                    </Button>
                    <button
                        type='submit'
                        className='col-span-2 flex justify-end text-[18px] text-blue font-medium mt-3 mobile:hidden'>
                        Сохранить
                    </button>
                </form>
            </Form>
        </div>
    );
}
