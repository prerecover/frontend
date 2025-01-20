import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { Textarea } from '@/components/ui/textarea';
import { IDoctorCreate } from '@/shared/types/doctor.interface';
import {
    IServiceCategory,
    IServiceCreate,
    PAYMENT_METHOD,
    PAYMENT_METHOD_ARRAY,
} from '@/shared/types/service.interface';
import { useEffect, useState } from 'react';
import AddDoctorsBlock from './add-doctors';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { AvatarLoad } from '@/components/ui/avatar-load';
import { Checkbox } from '@/components/ui/checkbox';
import { DurationDiapasonInput } from '@/components/ui/duration-diapason';
import { PriceDiaposonInput } from '@/components/ui/price-diaposon';

export default function ServiceCard({
    fetch,
    categories,
    serviceArray,
}: {
    // setFetch,
    serviceArray: Partial<IServiceCreate>[];
    pos: number;
    fetch: boolean;
    categories: IServiceCategory[];
    setFetch: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const serviceSchema = z.object({
        avatar: z.custom<File>().optional(),
        online: z.boolean(),
        offline: z.boolean(),
        title: z.string(),
        description: z.string(),
        paymentMethods: z.custom<string[]>(),
        category: z.string(),
        priceMin: z.number().optional(),
        priceMax: z.number().optional(),
        durationMin: z.number().optional(),
        durationMax: z.number().optional(),
    });
    const form = useForm<z.infer<typeof serviceSchema>>({
        resolver: zodResolver(serviceSchema),
        defaultValues: {
            paymentMethods: [],
        },
    });

    const changePaymentsState = (index: number, value: string) => {
        console.log(service.paymentMethods);
        const newState = [...service.paymentMethods];
        newState[index] = value;
        setService({ ...service, paymentMethods: newState });
    };
    const [service, setService] = useState<Partial<IServiceCreate>>({ doctors: [], paymentMethods: [] });
    const [durationStatus, setDurationStatus] = useState('диапазон');
    const [priceStatus, setPriceStatus] = useState('диапазон');
    const [countPaymentMethods, setCountPaymentMethods] = useState(['']);
    const [doctors, setDoctors] = useState<Partial<IDoctorCreate[]>>([]);
    const [priceMin, setMinPrice] = useState<number>(0);
    const [priceMax, setMaxPrice] = useState<number>(0);
    const [durationMin, setMinDuration] = useState<number>(0);
    const [durationMax, setMaxDuration] = useState<number>(0);
    const [avatar, setAvatar] = useState<File>(null);
    console.log(form.watch('paymentMethods'));
    useEffect(() => {
        setService({ ...service, durationMin: null });
        setService({ ...service, durationMax: null });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [durationStatus]);
    useEffect(() => {
        setService({ ...service, priceMin: null });
        setService({ ...service, priceMax: null });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [priceStatus]);
    console.log(form.getValues());
    useEffect(() => {
        if (fetch) serviceArray.push({ ...service, priceMax, priceMin, durationMax, durationMin, avatar, doctors });
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                <div className='flex gap-[60px] max-w-[1180px]'>
                    <Form {...form}>
                        <div className='flex flex-col gap-[18px] w-full'>
                            <Text className='text-[18px] font-medium '>Основные данные</Text>
                            <AvatarLoad setAvatar={setAvatar} className='w-[178px] px-5 py-3' />
                            <div className='flex gap-3 items-center'>
                                <div className='flex gap-1 items-center'>
                                    <Checkbox
                                        className='rounded-full w-[20px] h-[20px] '
                                        onCheckedChange={() => {
                                            setService({ ...service, online: service.online });
                                        }}
                                    />

                                    <Text>Онлайн</Text>
                                </div>
                                <div className='flex gap-1 items-center '>
                                    <Checkbox
                                        className='rounded-full w-[20px] h-[20px]'
                                        onCheckedChange={() => {
                                            setService({ ...service, offline: service.offline });
                                        }}
                                    />
                                    <Text>Оффлайн</Text>
                                </div>
                            </div>
                            <Input
                                placeholder='Название'
                                onChange={(e) => setService({ ...service, title: e.currentTarget.value })}
                            />
                            <Textarea
                                placeholder='Описание'
                                onChange={(e) => setService({ ...service, description: e.currentTarget.value })}
                            />

                            <Select
                                onValueChange={(e) =>
                                    // @ts-ignore
                                    setService({ ...service, category: categories.find((el) => el.title === e).title })
                                }>
                                <SelectTrigger className='w-full py-7 pr-5 pl-6 border-[1px] border-blue-100 bg-[#fff] rounded-[12px]'>
                                    {service.category === undefined && <Text className='text-grey'>Категория*</Text>}

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
                                <Select onValueChange={(e) => changePaymentsState(index, e)} key={index}>
                                    <SelectTrigger className='w-full py-7 pr-5 pl-6 border-[1px] border-blue-100 bg-[#fff] rounded-[12px]'>
                                        {!service.paymentMethods[index] && (
                                            <Text className='text-grey'>Выбрать из списка*</Text>
                                        )}

                                        <SelectValue className='text-[20px]' />
                                    </SelectTrigger>
                                    <SelectContent className='bg-white rounded-[12px] flex flex-col gap-4'>
                                        {PAYMENT_METHOD_ARRAY.map((method, i) => (
                                            <SelectItem key={i} value={method} className='cursor-pointer'>
                                                {PAYMENT_METHOD[method]}
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
                                        <DurationDiapasonInput setDuration={setMinDuration} />
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <Text className='text-[18px]'>до</Text>
                                        <DurationDiapasonInput setDuration={setMaxDuration} />
                                    </div>
                                </>
                            ) : durationStatus == 'точная' ? (
                                <>
                                    <div className='flex items-center gap-4'>
                                        <Text className='text-[18px]'>от</Text>
                                        <DurationDiapasonInput setDuration={setMinDuration} />
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
                                        <PriceDiaposonInput setPrice={setMinPrice} />
                                        <Text className='text-[18px]'>до</Text>
                                        <PriceDiaposonInput setPrice={setMaxPrice} />
                                    </div>
                                </>
                            ) : priceStatus == 'точная' ? (
                                <>
                                    <PriceDiaposonInput setPrice={setMinPrice} />
                                </>
                            ) : (
                                <></>
                            )}
                        </div>
                    </Form>
                    <div className='w-[1px] bg-blue-100'></div>
                    <AddDoctorsBlock doctors={doctors} setDoctors={setDoctors} />
                </div>
            </div>
        </div>
    );
}
