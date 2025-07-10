import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { mainInfoFormSchema } from './MainInfoForm/data/main-info-form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '@/app/(auth)/auth-wrapper';
import { useMutation } from '@apollo/client';
import { CHANGE_ME_MUTATION } from './MainInfoForm/utils/main-info-form-queries.util';
import { getCookie } from '@/shared/lib/hooks/useCookie';


export default function ProfileProtection() {
  const { user, setUser } = useAuth();
  const form = useForm<z.infer<typeof mainInfoFormSchema>>({
    resolver: zodResolver(mainInfoFormSchema),
    defaultValues: {
      number: '',
      email: '',
    } as z.infer<typeof mainInfoFormSchema>,
  });
  
  
  useEffect(() => {
    form.setValue('number', user.number || '');
    form.setValue('email', user.email || '');
  }, []);
  
  const [mutate] = useMutation(CHANGE_ME_MUTATION, {
    context: { headers: { Authorization: getCookie('access_token') } },
    onCompleted(data) {
      setUser({ appointments: user.appointments, ...data.changeMe });
    },
  });

  const formHandler = (data: z.infer<typeof mainInfoFormSchema>) => {
    mutate({
      variables: {
        changeInput: {
          ...data,
        },
      },
    });
  };
  
  return (
    <div className='mt-6'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(formHandler)}
        >
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
                      'bg-white rounded-[12px] border-solid border-[1px] border-blue flex justify-between relative mt-3 max-h-18',
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
                      'bg-white rounded-[12px] border-solid border-[1px] border-blue flex justify-between relative mt-3',
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
  );
}
