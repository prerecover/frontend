import { FormField, FormItem, FormControl, FormMessage, Form } from '@/components/ui/form';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { PropsWithClassName } from '@/shared/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { z } from 'zod';

export default function AccountMedForm({
    className,
    form,
}: {
    className: string;
    form: UseFormReturn<{
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
}) {
    return (
        <div className={cn('bg-red-400 w-full h-fit', className)}>
            <Form {...form}>
                <Text type='p' className='text-[20px] font-medium'>
                    Добавьте основные медицинские показатели
                </Text>
                <form action='' className='flex flex-col gap-[10px] desktop:grid desktop:grid-cols-3 mt-3 relative'>
                    <FormField
                        control={form.control}
                        name='age'
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder='Возраст' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='height'
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder='Рост' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='weight'
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder='Вес' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className='flex gap-[10px]'>
                        <FormField
                            control={form.control}
                            name='pressureStart'
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder='Давление' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='pressureEnd'
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder='Давление' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name='oxygen'
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder='Кислород' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='pulse'
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder='Пульс (в основном)' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='allergy'
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder='Аллергия' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='sleepTime'
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder='Продолжительность сна' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='temperature'
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder='Температура тела' {...field} />
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
