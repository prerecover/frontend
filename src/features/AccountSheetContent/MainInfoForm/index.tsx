'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { mainInfoFormSchema } from './data/main-info-form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { toast } from '@/components/ui/use-toast';
import { useAuth } from '@/app/(auth)/auth-wrapper';
import { getCookie } from '@/shared/lib/hooks/useCookie';
import { formatDate } from '@/shared/utils/formatDate';
import { ICountry } from '@/shared/types/country.interface';
import {
  CHANGE_ME_MUTATION,
  GET_COUNTRIES,
} from './utils/main-info-form-queries.util';

export const MainInfoForm = () => {
  const { user, setUser } = useAuth();
  const [date, setDate] = useState<Date>(new Date());
  const form = useForm<z.infer<typeof mainInfoFormSchema>>({
    resolver: zodResolver(mainInfoFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      number: '',
      email: '',
      login: '',
      address: '',
      city: '',
      birthday: date,
      sex: true,
      countryTitle: '',
    } as z.infer<typeof mainInfoFormSchema>,
  });

  const [mutate] = useMutation(CHANGE_ME_MUTATION, {
    context: { headers: { Authorization: getCookie('access_token') } },
    onCompleted(data) {
      setUser({ appointments: user.appointments, ...data.changeMe });
    },
  });

  const { data: countries } = useQuery(GET_COUNTRIES);

  useEffect(() => {
    if (!user) return;

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
  }, [user]);

  const formHandler = (data: z.infer<typeof mainInfoFormSchema>) => {
    const date = new Date();
    const age = Math.abs(new Date().getUTCFullYear() - date.getUTCFullYear());

    if (age < 18) {
      toast({ title: 'Ваш возраст меньше 18 лет!', variant: 'destructive' });
      return;
    }

    mutate({
      variables: {
        changeInput: {
          ...data,
        },
      },
    });
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-[10px] tablet:grid tablet:grid-cols-2 mt-3 relative"
        onSubmit={form.handleSubmit(formHandler)}
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Имя" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Фамилия" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={'outline'}
              className={cn(
                'w-full t-left font-normal h-12 border-blue-200 hover:border-blue',
                form.watch('birthday') && 'text-muted-foreground'
              )}
            >
              {form.watch('birthday') != new Date(0) ? (
                formatDate(form.watch('birthday'))
              ) : (
                <span>Выберите дату</span>
              )}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-full  bg-white border border-solid border-blue-200"
            align="start"
          >
            <Calendar setDate={setDate} isAccount={true} />
          </PopoverContent>
        </Popover>
        <Select
          onValueChange={(e) => form.setValue('sex', e == 'Мужчина')}
          value={form.watch('sex') ? 'Мужчина' : 'Женщина'}
        >
          <FormControl>
            <SelectTrigger>
              <SelectValue
                placeholder="Select a verified email to display"
                defaultValue={form.watch('sex') ? 'Мужчина' : 'Женщина'}
              />
            </SelectTrigger>
          </FormControl>
          <SelectContent className=" fixed bg-white rounded-[12px] flex flex-col gap-10">
            <SelectItem value="Мужчина" className="cursor-pointer">
              Мужчина
            </SelectItem>
            <SelectItem value="Женщина" className="cursor-pointer">
              Женщина
            </SelectItem>
          </SelectContent>
        </Select>
        <Input
          value={form.watch('login')}
          onChange={(e) => form.setValue('login', e.currentTarget.value)}
          placeholder="Логин"
        />
        <FormField
          control={form.control}
          name="countryTitle"
          render={({ field }) => (
            <FormItem>
              <Select
                onValueChange={field.onChange}
                defaultValue={user?.country?.title}
              >
                <FormControl>
                  <SelectTrigger className="w-full pr-5 pl-6 border  rounded-lg bg-white h-12">
                    <SelectValue placeholder={user?.country?.title} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white flex flex-col gap-10 ">
                  {countries?.countries.map((country: ICountry) => (
                    <SelectItem
                      key={country._id}
                      value={country.title}
                      className="cursor-pointer"
                    >
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
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Город" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Адрес" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <Text
          type="p"
          className="text-grey-700 text-sm font-medium mobile:mt-7 desktop:col-span-2"
        >
          Защита профиля
        </Text>
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div
                  className={cn(
                    'bg-white rounded-xl border border-blue-200 flex justify-between relative ease-linear duration-200',
                    field.value && 'border-green'
                  )}
                >
                  <div className="flex flex-col w-full p-3 px-4">
                    <Text type="p" className="text-sm text-grey-700">
                      Номер
                    </Text>
                    <input {...field} />
                  </div>
                  <Image
                    src={'/assets/tick-circle.svg'}
                    width={20}
                    height={20}
                    alt="success"
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div
                  className={cn(
                    'bg-white rounded-xl border-solid border flex justify-between relative ease-linear duration-200',
                    field.value && 'border-green'
                  )}
                >
                  <div className="flex flex-col w-full p-3 px-4">
                    <Text type="p" className="text-sm text-grey-700">
                      Эл.почта
                    </Text>
                    <input {...field} />
                  </div>
                  <Image
                    src={'/assets/tick-circle.svg'}
                    width={20}
                    height={20}
                    alt="success"
                    className={cn('mx-4', !field.value && 'hidden')}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        <Button type="submit">Сохранить</Button>
      </form>
    </Form>
  );
};
