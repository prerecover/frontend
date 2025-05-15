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
import React, { useEffect, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/app/(auth)/auth-wrapper';

export const MedBlock = ({
  form,
}: {
  form: UseFormReturn<{
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
}) => {
  const [full, setFull] = useState(false);
  const { user } = useAuth();

  const onSubmit = (data) => {
    console.log(data);
  };
  useEffect(() => {
    form.setValue('height', user.detail?.height?.toString() || '');
    form.setValue('weight', user.detail?.weight?.toString() || '');
    form.setValue(
      'pressureStart',
      user.detail?.pressureStart?.toString() || ''
    );
    form.setValue('pressureEnd', user.detail?.pressureEnd?.toString() || '');
    form.setValue('oxygen', user.detail?.oxygen?.toString() || '');
    form.setValue('pulse', user.detail?.pulse?.toString() || '');
    form.setValue('allergy', user.detail?.allergy?.toString() || '');
    form.setValue('sleepTime', user.detail?.sleepTime?.toString() || '');
    form.setValue('temperature', user.detail?.temperature?.toString() || '');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="mobile:bg-white mobile:px-4 mobile:mt-4 mobile:py-4 mobile:rounded-[12px] px-7">
      <div
        className="flex-between items-center cursor-pointer"
        onClick={() => setFull(!full)}
      >
        <Text type="p" className="text-[16px] font-medium">
          Основные медицинские показатели
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
      {full && (
        <Text
          type="p"
          className="text-[14px] font-medium bg-[#F7E6E8] p-3 rounded-[8px]"
        >
          Пожалуйста, заполните все показатели, иначе рассчитанная польза не
          будет определена
        </Text>
      )}
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
            className="flex-col gap-[10px] grid grid-cols-2 mt-3 relative"
          >
            <FormItem>
              <FormControl>
                <Input placeholder="Возраст" />
              </FormControl>
              <FormMessage />
            </FormItem>
            <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Рост"
                      onChange={(e) => {
                        const value = parseInt(e.target.value, 10);
                        field.onChange(isNaN(value) ? '0' : value);
                      }}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pressureStart"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Давление верхнее"
                      {...field}
                      onChange={(e) => {
                        const value = parseInt(e.target.value, 10);
                        field.onChange(isNaN(value) ? '0' : value);
                      }}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pressureEnd"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Давление нижнее"
                      {...field}
                      onChange={(e) => {
                        const value = parseInt(e.target.value, 10);
                        field.onChange(isNaN(value) ? '0' : value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="oxygen"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Кислород"
                      {...field}
                      onChange={(e) => {
                        const value = parseInt(e.target.value, 10);
                        field.onChange(isNaN(value) ? '0' : value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pulse"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Пульс"
                      {...field}
                      onChange={(e) => {
                        const value = parseInt(e.target.value, 10);
                        field.onChange(isNaN(value) ? '0' : value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="allergy"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Аллергия" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="temperature"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Температура тела"
                      {...field}
                      onChange={(e) => {
                        const value = parseInt(e.target.value, 10);
                        field.onChange(isNaN(value) ? '0' : value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sleepTime"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Продолжительность сна"
                      {...field}
                      onChange={(e) => {
                        const value = parseInt(e.target.value, 10);
                        field.onChange(isNaN(value) ? '0' : value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Вес"
                      {...field}
                      onChange={(e) => {
                        const value = parseInt(e.target.value, 10);
                        field.onChange(isNaN(value) ? '0' : value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </div>
  );
};
