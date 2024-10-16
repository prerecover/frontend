'use client';
import { useAuth } from '@/app/(auth)/auth-wrapper';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Loader from '@/components/ui/loader';
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
import { useForm } from 'react-hook-form';
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

export const FormBlock: FC = () => {
    const { setUser, user } = useAuth();
    const [firstName, setFirstName] = useState<string | null>('');
    const [lastName, setLastName] = useState<string | null>('');
    const [login, setLogin] = useState<string | null>('');
    const [address, setAddress] = useState<string | null>('');
    const [number, setNumber] = useState<string | null>('');
    const [email, setEmail] = useState<string | null>('');
    const [city, setCity] = useState<string | null>('');
    const [date, setDate] = useState<Date>(new Date());
    const [sex, setSex] = useState<boolean | null>(true);
    const formSchema = z.object({
        countryTitle: z.string(),
    });
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });
    const { toast } = useToast();
    const [token, setToken] = useState<string | undefined>();
    const { data: countries } = useQuery(GET_COUNTRIES);
    const [load, setLoad] = useState(true);
    const [mutate, { error, loading }] = useMutation(CHANGE_ME_MUTATION, {
        context: { headers: { Authorization: token ? `Bearer ${token}` : '' } },
        onCompleted(data) {
            toast({ title: 'Данные о профиле успешно изменены!', variant: 'positive' });
            setUser({ appointments: user.appointments, ...data.changeMe });
        },
    });
    useEffect(() => {
        form.setValue('countryTitle', user.country?.title || '');
        setFirstName(user.firstName || null);
        setLastName(user.lastName || null);
        setDate(new Date(user.birthday || 0));
        setLogin(user.login || null);
        setNumber(user.number || null);
        setEmail(user.email || null);
        setSex(user.sex || false);
        setAddress(user.address || null);
        setCity(user.city || null);
        setToken(getCookie('access_token'));
        setLoad(false);
    }, [error, toast, user, form]);

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const { countryTitle } = values;
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
            variables: {
                firstName,
                lastName,
                birthday: date,
                sex,
                number,
                email,
                login,
                countryTitle,
                city,
                address,
            },
        });
    }
    if (load)
        return (
            <div className='flex-center h-screen bg-white'>
                <Loader />
            </div>
        );
    return (
        <Form {...form}>
            <Text type='p' className='text-grey-700 text-[14px] font-medium reverse_pc:mt-7'>
                Основная информация
            </Text>
            <form
                action=''
                onSubmit={form.handleSubmit(onSubmit)}
                className='flex flex-col gap-[10px] desktop:grid desktop:grid-cols-2 mt-3 relative'>
                <AccountFormNameField field={firstName} setField={setFirstName} placeholder='Имя' />
                <AccountFormNameField field={lastName} setField={setLastName} placeholder='Фамилия' />
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant={'outline'}
                            className={cn(
                                'w-full pl-7 py-7 text-left font-normal h-full max-h-[58px]',
                                date && 'text-muted-foreground',
                            )}>
                            {date != new Date(0) ? formatDate(date) : <span>Выберите дату</span>}
                            <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent
                        className='w-full  bg-white border border-solid border-blue rounded-[12px]'
                        align='start'>
                        <Calendar setDate={setDate} isAccount={true} />
                    </PopoverContent>
                </Popover>
                <Select onValueChange={(e) => setSex(e == 'Мужчина')} value={sex ? 'Мужчина' : 'Женщина'}>
                    <FormControl>
                        <SelectTrigger className='w-full py-7 pr-5 pl-6 border-[1px] border-blue rounded-[8px] bg-[#fff]'>
                            <SelectValue
                                placeholder='Select a verified email to display'
                                defaultValue={sex ? 'Мужчина' : 'Женщина'}
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
                    value={login!}
                    onChange={(e) => setLogin(e.currentTarget.value)}
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
                <Input
                    value={city!}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    className='border-blue'
                    placeholder='Город'
                />
                <Input
                    value={address!}
                    onChange={(e) => setAddress(e.currentTarget.value)}
                    className='border-blue'
                    placeholder='Адрес'
                />

                <Text type='p' className='text-grey-700 text-[14px] font-medium mobile:mt-7 desktop:col-span-2'>
                    Защита профиля
                </Text>
                <div
                    className={cn(
                        'bg-white rounded-[12px] border-solid border-[1px] border-blue flex justify-between relative',
                        number && 'border-green',
                    )}>
                    <div className='flex flex-col w-full p-4'>
                        <Text type='p' className='text-[14px] font-medium text-grey-700'>
                            Номер
                        </Text>
                        <input type='text' value={number!} onChange={(e) => setNumber(e.currentTarget.value)} />
                    </div>
                    <Image
                        src={'/assets/tick-circle.svg'}
                        width={20}
                        height={20}
                        alt='success'
                        className={cn('mx-4', !number && 'hidden')}
                    />
                </div>
                <div
                    className={cn(
                        'bg-white rounded-[12px] border-solid border-[1px] border-blue flex justify-between relative',
                        email && 'border-green',
                    )}>
                    <div className='flex flex-col w-full p-4'>
                        <Text type='p' className='text-[14px] font-medium text-grey-700'>
                            Эл.почта
                        </Text>
                        <input type='email' value={email!} onChange={(e) => setEmail(e.currentTarget.value)} />
                    </div>
                    <Image
                        src={'/assets/tick-circle.svg'}
                        width={20}
                        height={20}
                        alt='success'
                        className={cn('mx-4', !email && 'hidden')}
                    />
                </div>
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
    );
};
