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
import { encodeDate } from '@/shared/utils/formatDate';
import { gql, useMutation, useQuery } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { FC, MutableRefObject, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
            $email: String, 
            $number: String,
            $firstName: String,
            $lastName: String,
            $birthday: Date,
            $sex: Boolean,
            $login: String,
            $countryTitle: String,
            $city: String,
            $address: String
){
            changeMe(changeMeInput: {
                email: $email,
                number: $number, 
                firstName: $firstName,
                lastName: $lastName,
                birthday: $birthday,
                sex: $sex, 
                login: $login,
                countryTitle: $countryTitle,
                city: $city,
                address: $address
        }){
        _id
        address
        avatar
        birthday
        createdAt
        email
        city
        country{
            _id
            title 
        }
        firstName
        isStaff
        isVerfied
        lastName
        login
        number
        online
        sex
        surname
        updatedAt
        verificationCode
        }
    }
`);

interface FormBlockProps {
    imageRef: MutableRefObject<HTMLInputElement | null>;
}

export const FormBlock: FC<FormBlockProps> = ({ imageRef }) => {
    const { setUser, user } = useAuth();
    const formSchema = z.object({
        firstName: z.string(),
        lastName: z.string(),
        birthday: z.date(),
        sex: z.string(),
        login: z.string(),
        countryTitle: z.string(),
        city: z.string(),
        address: z.string(),
    });
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: '',
            lastName: user?.lastName,
            birthday: new Date(user?.birthday || 0),
            sex: user?.sex ? 'Мужчина' : 'Женщина',
            login: user?.login,
            countryTitle: user?.country?.title,
            city: user?.city,
            address: user?.address,
        },
    });
    const { toast } = useToast();
    const [token, setToken] = useState<string | undefined>();
    const { data: countries } = useQuery(GET_COUNTRIES);
    const [mutate, { error }] = useMutation(CHANGE_ME_MUTATION, {
        context: { headers: { Authorization: token ? `Bearer ${token}` : '' } },
        onCompleted(data) {
            console.log(data);
            setUser(data.changeMe);
            console.log(user);
        },
    });
    useEffect(() => {
        form.setValue('firstName', user?.firstName || '');
        form.setValue('lastName', user?.lastName || '');
        form.setValue('sex', user?.sex ? 'Мужчина' : 'Женщина');
        form.setValue('login', user?.login || '');
        setToken(getCookie('access_token'));
        if (error) {
            toast({ title: error.message, description: error.extraInfo, variant: 'destructive' });
        }
    }, [error, toast, user, form]);

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const { firstName, lastName, birthday, sex, login, countryTitle, city, address } = values;
        mutate({
            variables: {
                firstName: firstName,
                lastName,
                birthday: encodeDate(birthday),
                sex: sex == 'Мужчина' ? true : false,
                login,
                countryTitle,
                city,
                address,
            },
        });
    }
    const handleImg = (event: any) => {
        const file = event.target.files[0];
        console.log(file);
    };
    const today = new Date();
    const now_18 = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    return (
        <Form {...form}>
            <form action='' onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-[10px]'>
                <Text type='p' className='text-grey-700 text-[14px] font-medium mt-7'>
                    Основная информация
                </Text>
                {/* <FormField */}
                {/*     control={form.control} */}
                {/*     name='avatar' */}
                {/*     render={() => ( */}
                {/*         <FormItem className='hidden'> */}
                {/*             <FormControl> */}
                {/*                 <input type='file' ref={imageRef} onChange={(e) => handleImg(e)} /> */}
                {/*             </FormControl> */}
                {/*             <FormMessage /> */}
                {/*         </FormItem> */}
                {/*     )} */}
                {/* /> */}
                <FormField
                    control={form.control}
                    name='firstName'
                    render={({ field }) => (
                        <FormItem className=''>
                            <FormControl>
                                <Input defaultValue={field.value} {...field} className='border-blue' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='lastName'
                    render={({ field }) => (
                        <FormItem className=''>
                            <FormControl>
                                <Input
                                    placeholder={user?.lastName}
                                    {...field}
                                    defaultValue={user?.lastName}
                                    className='border-blue'
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='birthday'
                    render={({ field }) => (
                        <FormItem className=''>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={'outline'}
                                            className={cn(
                                                'w-full pl-7 py-7 text-left font-normal',
                                                !field.value && 'text-muted-foreground',
                                            )}>
                                            {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                                            <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className='w-auto p-0' align='start'>
                                    <Calendar
                                        mode='single'
                                        className='bg-white'
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        fromDate={field.value}
                                        defaultMonth={new Date(user?.birthday || now_18)}
                                        disabled={(date) => date < new Date(new Date().getFullYear() - 18)}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='sex'
                    render={({ field }) => (
                        <FormItem>
                            <Select onValueChange={field.onChange} defaultValue={field.value ? 'true' : 'false'}>
                                <FormControl>
                                    <SelectTrigger className='w-full py-7 pr-5 pl-6 border-[1px] border-blue rounded-[8px] bg-[#fff]'>
                                        <SelectValue placeholder='Select a verified email to display' />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className='border-blue fixed bg-white rounded-[12px] flex flex-col gap-10'>
                                    <SelectItem value='true' className='cursor-pointer'>
                                        Мужчина
                                    </SelectItem>
                                    <SelectItem value='false' className='cursor-pointer'>
                                        Женщина
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='login'
                    render={({ field }) => (
                        <FormItem className=''>
                            <FormControl>
                                <Input
                                    placeholder='Логин'
                                    {...field}
                                    defaultValue={user?.login}
                                    className='border-blue'
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
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
                                        <SelectItem key={country._id} value={country.title} className='cursor-pointer'>
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
                        <FormItem className=''>
                            <FormControl>
                                <Input
                                    placeholder='Город'
                                    {...field}
                                    defaultValue={user?.city}
                                    className='border-blue'
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='address'
                    render={({ field }) => (
                        <FormItem className=''>
                            <FormControl>
                                <Input
                                    placeholder='Адрес'
                                    {...field}
                                    defaultValue={user?.address}
                                    className='border-blue'
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className='mb-20' type='submit'>
                    Сохранить
                </Button>
            </form>
        </Form>
    );
};
