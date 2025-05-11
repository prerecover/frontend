'use client';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { medFormSchema } from './data/med-form-schema.data';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { useEffect } from 'react';
import { useAuth } from '@/app/(auth)/auth-wrapper';
import { Button } from '@/components/ui/button';

export const MedForm = () => {
  const { user } = useAuth();

  const form = useForm<z.infer<typeof medFormSchema>>({
    resolver: zodResolver(medFormSchema),
  });

  const formHandler = (data: z.infer<typeof medFormSchema>) => {
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
  }, []);

  return (
    <Form {...form}>
      <form
        action=""
        onSubmit={form.handleSubmit(formHandler)}
        className="flex-col gap-[10px] grid grid-cols-2 mt-3 relative"
      >
        <FormItem>
          <FormControl>
            <Input type="number" placeholder="Возраст" />
          </FormControl>
          <FormMessage />
        </FormItem>
        <FormField
          control={form.control}
          name="height"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="number" placeholder="Рост" {...field} />
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
                  type="number"
                  placeholder="Давление верхнее"
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
                <Input type="number" placeholder="Давление нижнее" {...field} />
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
                <Input type="number" placeholder="Кислород" {...field} />
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
                <Input type="number" placeholder="Пульс" {...field} />
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
                  type="number"
                  placeholder="Температура тела"
                  {...field}
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
                <Input placeholder="Продолжительность сна (ч)" {...field} />
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
                <Input type="number" placeholder="Вес (кг)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="col-span-2" type="submit">
          Сохранить
        </Button>
      </form>
    </Form>
  );
};
