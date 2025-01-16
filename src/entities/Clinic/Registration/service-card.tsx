import { Input } from '@/components/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Text } from '@/components/ui/text';
import { Textarea } from '@/components/ui/textarea';
import { IDoctor } from '@/shared/types/doctor.interface';
import { IService, IServiceCategory, PAYMENT_METHOD, PAYMENT_METHOD_ARRAY } from '@/shared/types/service.interface';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { useEffect, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import AddDoctorsBlock from './add-doctors';
import { FilterBox } from '@/components/ui/filter-box';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, FormControl, FormItem } from '@/components/ui/form';
import { AvatarLoad } from '@/components/ui/avatar-load';
import { Checkbox } from '@/components/ui/checkbox';
import { DurationDiapasonInput } from '@/components/ui/duration-diapason';
import { PriceDiaposonInput } from '@/components/ui/price-diaposon';

export default function ServiceCard({
    pos,
    setFetch,
    fetch,
    categories,
    serviceArray,
}: {
    // setFetch,
    serviceArray: Partial<IService>[];
    pos: number;
    fetch: boolean;
    categories: IServiceCategory[];
    setFetch: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const serviceSchema = z.object({
        avatar: z.custom<File>(),
        online: z.boolean(),
        offline: z.boolean(),
        title: z.string(),
        description: z.string(),
        paymentMethods: z.custom<PAYMENT_METHOD[]>(),
        category: z.string(),
        doctors: z.custom<Partial<IDoctor>[]>(),
        priceMin: z.number().optional(),
        priceMax: z.number().optional(),
        durationMin: z.number().optional(),
        durationMax: z.number().optional(),
    });
    const form = useForm<z.infer<typeof serviceSchema>>({
        resolver: zodResolver(serviceSchema),
        defaultValues: {
            paymentMethods: [],
            doctors: [],
        },
    });
    const changePaymentsState = (index: number, value: string) => {
        const newState = [...form.watch('paymentMethods')];
        newState[index] = value;
        form.setValue('paymentMethods', newState);
    };
    const [durationStatus, setDurationStatus] = useState<'диапазон' | 'точная' | 'неизвестно'>('диапазон');
    const [priceStatus, setPriceStatus] = useState<'диапазон' | 'точная' | 'неизвестно'>('диапазон');
    const [countPaymentMethods, setCountPaymentMethods] = useState(['']);
    console.log(form.watch('paymentMethods'));
    useEffect(() => {
        form.setValue('durationMin', null);
        form.setValue('durationMax', null);
    }, [durationStatus]);
    useEffect(() => {
        form.setValue('priceMin', null);
        form.setValue('priceMax', null);
    }, [priceStatus]);
    console.log(form.getValues());
    useEffect(() => {
        if (fetch) serviceArray.push(form.getValues());
    }, [fetch]);
    return (
        <div className='flex flex-col w-full'>
            {/* <div className='flex-between w-full'> */}
            {/* <Button onClick={() => { */}
            {/*     const newArr = posArr.filter((el) => el !== posArr[pos - 1]) */}
            {/*     setPosArr(newArr) */}
            {/**/}
            {/* }}>delete</Button> */}
            {/* <Image */}
            {/*     src={'/assets/black-arrow-down.svg'} */}
            {/*     width={28} */}
            {/*     height={28} */}
            {/*     alt='close' */}
            {/*     className='w-[28px] h-[28px] cursor-pointer' */}
            {/*     onClick={() => setShow(!show)} */}
            {/* /> */}
            {/* </div> */}
            <div>
                <div className='flex gap-[60px]'>
                    <Form {...form}>
                        <div className='flex flex-col gap-[18px] w-full'>
                            <Text className='text-[18px] font-medium '>Основные данные</Text>
                            <AvatarLoad
                                imgState={form.watch('avatar')}
                                formSetState={form.setValue}
                                className='w-[178px] px-5 py-3'
                            />
                            <div className='flex gap-3 items-center'>
                                <div className='flex gap-1 items-center'>
                                    <Checkbox
                                        className='rounded-full w-[20px] h-[20px] '
                                        onCheckedChange={() => {
                                            form.setValue('online', !form.watch('online'));
                                        }}
                                    />

                                    <Text>Онлайн</Text>
                                </div>
                                <div className='flex gap-1 items-center '>
                                    <Checkbox
                                        className='rounded-full w-[20px] h-[20px]'
                                        onCheckedChange={() => {
                                            form.setValue('offline', !form.watch('offline'));
                                        }}
                                    />
                                    <Text>Оффлайн</Text>
                                </div>
                            </div>
                            <FormField
                                control={form.control}
                                name='title'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder='Название' {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='description'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea placeholder='Описание' {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <Select
                                onValueChange={(e) =>
                                    form.setValue('category', categories.find((el) => el.title === e)?.title)
                                }>
                                <SelectTrigger className='w-full py-7 pr-5 pl-6 border-[1px] border-blue-100 bg-[#fff] rounded-[12px]'>
                                    {form.watch('category') === undefined && (
                                        <Text className='text-grey'>Категория*</Text>
                                    )}

                                    <SelectValue className='text-[20px]' />
                                </SelectTrigger>
                                <SelectContent className='bg-white rounded-[12px] flex flex-col gap-4'>
                                    {categories.map((category: IServiceCategory) => (
                                        <SelectItem
                                            key={category._id}
                                            value={category.title}
                                            className='cursor-pointer'>
                                            {category.title}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Text className='text-[18px] font-medium '>Оплата</Text>
                            {countPaymentMethods.map((_, index) => (
                                <Select onValueChange={(e) => changePaymentsState(index, e)}>
                                    <SelectTrigger className='w-full py-7 pr-5 pl-6 border-[1px] border-blue-100 bg-[#fff] rounded-[12px]'>
                                        {!form.watch('paymentMethods')[index] && (
                                            <Text className='text-grey'>Выбрать из списка*</Text>
                                        )}

                                        <SelectValue className='text-[20px]' />
                                    </SelectTrigger>
                                    <SelectContent className='bg-white rounded-[12px] flex flex-col gap-4'>
                                        {PAYMENT_METHOD_ARRAY.map((method, i) => (
                                            <SelectItem key={i} value={method} className='cursor-pointer'>
                                                {method}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            ))}
                            <Text
                                className='text-[12px] text-blue cursor-pointer '
                                onClick={() => setCountPaymentMethods([...countPaymentMethods, ''])}>
                                + Добавить способ оплаты
                            </Text>
                            <div className='flex-between'>
                                <Text className='text-[18px] font-medium '>Длительность</Text>
                                <Select onValueChange={(e) => setDurationStatus(e)} defaultValue='диапазон'>
                                    <SelectTrigger className='w-fit py-7 pr-5 pl-6 border-none'>
                                        <SelectValue className='text-[20px]' />
                                    </SelectTrigger>
                                    <SelectContent className='bg-white rounded-[12px] flex flex-col gap-4'>
                                        <SelectItem value={'диапазон'} className='cursor-pointer'>
                                            диапазон
                                        </SelectItem>
                                        <SelectItem value={'точная'} className='cursor-pointer'>
                                            точная
                                        </SelectItem>
                                        <SelectItem value={'неизвестно'} className='cursor-pointer'>
                                            неизвестно
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            {durationStatus == 'диапазон' ? (
                                <>
                                    <div className='flex items-center gap-4'>
                                        <Text className='text-[18px]'>от</Text>
                                        <DurationDiapasonInput durationPos='min' formSetState={form.setValue} />
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <Text className='text-[18px]'>до</Text>
                                        <DurationDiapasonInput durationPos='max' formSetState={form.setValue} />
                                    </div>
                                </>
                            ) : durationStatus == 'точная' ? (
                                <>
                                    <div className='flex items-center gap-4'>
                                        <Text className='text-[18px]'>от</Text>
                                        <DurationDiapasonInput durationPos='min' formSetState={form.setValue} />
                                    </div>
                                </>
                            ) : (
                                <></>
                            )}
                            <div className='flex-between'>
                                <Text className='text-[18px] font-medium '>Цена</Text>
                                <Select onValueChange={(e) => setPriceStatus(e)} defaultValue='диапазон'>
                                    <SelectTrigger className='w-fit py-7 pr-5 pl-6 border-none'>
                                        <SelectValue className='text-[20px]' />
                                    </SelectTrigger>
                                    <SelectContent className='bg-white rounded-[12px] flex flex-col gap-4'>
                                        <SelectItem value={'диапазон'} className='cursor-pointer'>
                                            диапазон
                                        </SelectItem>
                                        <SelectItem value={'точная'} className='cursor-pointer'>
                                            точная
                                        </SelectItem>
                                        <SelectItem value={'неизвестно'} className='cursor-pointer'>
                                            неизвестно
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            {priceStatus == 'диапазон' ? (
                                <>
                                    <div className='flex items-center gap-4'>
                                        <Text className='text-[18px]'>от</Text>
                                        <PriceDiaposonInput pricePos='min' formSetState={form.setValue} />
                                        <Text className='text-[18px]'>до</Text>
                                        <PriceDiaposonInput pricePos='max' formSetState={form.setValue} />
                                    </div>
                                </>
                            ) : priceStatus == 'точная' ? (
                                <>
                                    <PriceDiaposonInput pricePos='min' formSetState={form.setValue} />
                                </>
                            ) : (
                                <></>
                            )}
                        </div>
                    </Form>

                    <div className='w-[1px] bg-blue-100'></div>
                    <AddDoctorsBlock doctors={form.watch('doctors')} setDoctors={form.setValue} />
                </div>
            </div>
        </div>
    );
}
