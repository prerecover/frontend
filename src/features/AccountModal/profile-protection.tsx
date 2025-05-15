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
import { UseFormReturn } from 'react-hook-form';
import { IUser } from '@/shared/types';

interface IProfileProtectionProps {
  form: UseFormReturn<{
    number?: string;
    email?: string;
  }>;
  user: IUser;
}

export default function ProfileProtection({
  form,
  user,
}: IProfileProtectionProps) {
  useEffect(() => {
    form.setValue('number', user.number || '');
    form.setValue('email', user.email || '');
  }, []);

  return (
    <div className="px-7">
      <Form {...form}>
        <form>
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
                      'bg-white rounded-[12px] border-solid border-[1px] border-blue flex justify-between relative mt-3',
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
