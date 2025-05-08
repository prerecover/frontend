import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Text } from '@/components/ui/text';
import React, { useEffect, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import AccountFormNameField from '../AccountBlock/fields/name';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { formatDate } from '@/shared/utils/formatDate';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { useAuth } from '@/app/(auth)/auth-wrapper';
import { gql, useMutation, useQuery } from '@apollo/client';
import { ICountry } from '@/shared/types/country.interface';
import { toast } from '@/components/ui/use-toast';
import { getCookie } from '@/shared/lib/hooks/useCookie';
import Language from './language';
import { MedBlock } from './med-block';

const CHANGE_ME_MUTATION = gql(`
        mutation ChangeMe(
            $changeInput: UpdateUserInput!
){
            changeMe(changeMeInput: $changeInput){
        _id
        userId
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

const GET_COUNTRIES = gql(`
query Countries {
    countries {
        _id
        slug
        title
    }
}
`);

interface IMainBlockProps {
  form: UseFormReturn<{
    firstName?: string;
    lastName?: string;
    number?: string;
    email?: string;
    login?: string;
    address?: string;
    city?: string;
    birthday?: Date;
    sex?: boolean;
    countryTitle?: string;
  }>;
  medForm: UseFormReturn<{
    age?: number;
    height?: string;
    weight?: string;
    pressureStart?: string;
    pressureEnd?: string;
    oxygen?: string;
    pulse?: string;
    allergy?: string;
    sleepTime?: string;
    temperature?: string;
  }>;

  language: string;
  setLanguage: React.ComponentState;
}
export const MainBlock = ({
  form,
  medForm,
  language,
  setLanguage,
}: IMainBlockProps) => {
  const { user, setUser } = useAuth();
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
  const [token, setToken] = useState<string | undefined>();
  const [mutate] = useMutation(CHANGE_ME_MUTATION, {
    context: { headers: { Authorization: token ? `Bearer ${token}` : '' } },
    onCompleted(data) {
      setUser({ appointments: user.appointments, ...data.changeMe });
    },
  });
  async function onSubmit(values: any) {
    console.log(values);
    const age = Math.abs(new Date().getUTCFullYear() - date.getUTCFullYear());
    console.log(age);
    if (age < 18) {
      toast({ title: 'Ваш возраст меньше 18 лет!', variant: 'destructive' });
      return;
    }
    mutate({
      variables: {
        changeInput: {
          ...form.getValues(),
        },
      },
    });
  }
  const [date, setDate] = useState<Date>(new Date());
  const { data: countries } = useQuery(GET_COUNTRIES);
  const [full, setFull] = useState(false);

  useEffect(() => {
    if (!full && token) {
      mutate({
        variables: {
          changeInput: {
            ...form.getValues(),
            detail: {
              height: parseInt(medForm.watch('height')),
              weight: parseInt(medForm.watch('weight')),
              oxygen: parseInt(medForm.watch('oxygen')),
              sleepTime: parseInt(medForm.watch('sleepTime')),
              temperature: parseInt(medForm.watch('temperature')),
              pressureStart: parseInt(medForm.watch('pressureStart')),
              pressureEnd: parseInt(medForm.watch('pressureEnd')),
              pulse: parseInt(medForm.watch('pulse')),
              allergy: medForm.watch('allergy'),
            },
          },
        },
      });
    }
  }, [full]);
  return (
    <div className="">
      <div
        className="flex-between items-center mt-3 mb-3"
        onClick={() => setFull(!full)}
      >
        <Text type="p" className="text-[16px] font-medium">
          Основная информация
        </Text>
        <Image
          src={
            full ? '/assets/grey-arrow-up.svg' : '/assets/grey-arrow-down.svg'
          }
          width={30}
          height={30}
          alt="arrow"
        />
      </div>
      <div
        className={cn(
          'w-full mt-4 rounded-[12px] transition-all',
          !full && 'hidden'
        )}
      >
        <Form {...form}>
          <form
            action=""
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-[10px] tablet:grid tablet:grid-cols-2 mt-3 relative"
          >
            <AccountFormNameField
              field={form.watch('firstName')}
              setField={form.setValue}
              placeholder="Имя"
            />
            <AccountFormNameField
              field={form.watch('lastName')}
              setField={form.setValue}
              placeholder="Фамилия"
            />
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-full pl-7  t-left font-normal h-[49px]',
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
                className="w-full  bg-white border border-solid border-blue rounded-[12px]"
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
                <SelectTrigger className="w-full  pr-5 pl-6 border-[1px] border-blue rounded-[8px] bg-[#fff] h-[49px]">
                  <SelectValue
                    placeholder="Select a verified email to display"
                    defaultValue={form.watch('sex') ? 'Мужчина' : 'Женщина'}
                  />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="border-blue fixed bg-white rounded-[12px] flex flex-col gap-10">
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
              className="border-blue h-[49px]"
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
                      <SelectTrigger className="w-full pr-5 pl-6 border-[1px] border-blue rounded-[8px] bg-[#fff] h-[49px]">
                        <SelectValue placeholder={user?.country?.title} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="border-blue bg-white rounded-[12px] flex flex-col gap-10 ">
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
                    <Input
                      placeholder="Город"
                      className="border-blue h-[49px]"
                      {...field}
                    />
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
                    <Input
                      placeholder="Адрес"
                      className="border-blue h-[49px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Text
              type="p"
              className="text-grey-700 text-[14px] font-medium mobile:mt-7 desktop:col-span-2"
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
                        'bg-white rounded-[12px] border-solid border-[1px] border-blue flex justify-between relative',
                        field.value && 'border-green'
                      )}
                    >
                      <div className="flex flex-col w-full p-4">
                        <Text
                          type="p"
                          className="text-[14px] font-medium text-grey-700"
                        >
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
                        'bg-white rounded-[12px] border-solid border-[1px] border-blue flex justify-between relative',
                        field.value && 'border-green'
                      )}
                    >
                      <div className="flex flex-col w-full p-4">
                        <Text
                          type="p"
                          className="text-[14px] font-medium text-grey-700"
                        >
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
            />
          </form>
        </Form>
      </div>
      <MedBlock form={medForm} />
      <Language language={language} setLanguage={setLanguage} />
    </div>
  );
};
