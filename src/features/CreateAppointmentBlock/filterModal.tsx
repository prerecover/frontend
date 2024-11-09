import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { useAppointmentFilterStore } from '@/shared/store/appointmentFiltersStore';
import { useBlurStore } from '@/shared/store/blurStore';
import { ICountry } from '@/shared/types/country.interface';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
// import { InputOTP, InputOTPSlot } from '@/components/ui/input-otp';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { gql, useMutation } from '@apollo/client';
import { useSelectedClinicsStore } from '@/shared/store/selectedClinicsStore';
import { MultiRange } from '@/components/ui/multi-range';

// const SELECT_SERVICES = gql(`
// mutation SelectServices($countryTitle: String!, $startPrice: Int!, $endPrice: Int!) {
//     selectServices(
//         selectServiceInput: { countryTitle: $countryTitle, startPrice: $startPrice, endPrice: $endPrice}
//     ) {
//         _id
//         createdAt
//         description
//         duration
//         img
//         offline
//         online
//         price
//         title
//         updatedAt
//     }
// }
//
//
// `);

const SELECT_CLINICS = gql(`
mutation SelectClinics($countryTitle: String!, $online: Boolean!, $offline: Boolean!) {
    selectClinics(
        selectClinicInput: { countryTitle: $countryTitle, offline: $offline, online: $online}
    ) {
        _id
        title
    }
}

`);

export default function FilterModal({ countries }: { countries: ICountry[] }) {
    const { setBlur } = useBlurStore();
    const { setIsOpen, isOpen } = useAppointmentFilterStore();
    const router = useRouter();

    const handleClose = () => {
        setIsOpen(false);
        setBlur(false);
    };
    const { setClinics } = useSelectedClinicsStore();
    const [country, setCountry] = useState<string>('Выберите страну');
    const [city, setCity] = useState<string>('');
    // const [exp, setExp] = useState<string>('1');
    const [mutate, { data, loading }] = useMutation(SELECT_CLINICS);
    const [online, setOnline] = useState<boolean>(true);
    const [offline, setOffline] = useState<boolean>(true);
    const [distance, setDistance] = useState<number[]>([100]);
    // const [treatTotal, setTreatTotal] = useState<string>('1000');
    const rangesData = ['Помощь в лечении', 'Ответственность', 'Точность в расчетах', 'Точность в лечении'];
    const [startPrice, setStartPrice] = useState<string>('500');
    const [endPrice, setEndPrice] = useState<string>('5000');

    useEffect(() => {
        console.log('mutate');
        mutate({
            variables: {
                countryTitle: country,
                online,
                offline,
            },
        });
    }, [country, online, offline, mutate]);

    const handleClick = () => {
        setClinics(data.selectClinics);
        router.push('/clinic/select/result');
    };
    return (
        <div
            className={cn(
                'flex desktop:w-[957px] desktop:h-[691px] w-full h-full bg-white rounded-[12px] flex-col fixed z-[350] left-0 right-0 mx-auto top-0 bottom-0 my-auto ',
                !isOpen && 'hidden',
            )}>
            <div className='flex justify-center gap-2 mt-[30px] text-[22px]'>
                <Text className='font-medium'>Фильтры для</Text>
                <Text className='text-blue font-semibold'>клиник</Text>
                <Image
                    src={'/assets/close-i.svg'}
                    width={28}
                    height={28}
                    alt='close'
                    className='absolute right-3 top-[18px] z-[400] cursor-pointer'
                    onClick={() => handleClose()}
                />
            </div>
            <div className='flex flex-col gap-[22px] text-[16px] font-medium p-4 border-solid border-[1px] border-blue-100 m-4 rounded-[12px]'>
                <Select onValueChange={(value) => setCountry(value)}>
                    <SelectTrigger className='w-full py-7 pr-5 pl-6 border-[1px] border-blue-100 rounded-[8px] bg-[#fff]'>
                        <SelectValue placeholder='Страна' />
                    </SelectTrigger>
                    <SelectContent className='border-blue bg-white rounded-[12px] flex flex-col gap-10 fixed z-[600] '>
                        {countries.map((country: ICountry) => (
                            <SelectItem key={country._id} value={country.title} className='cursor-pointer'>
                                {country.title}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Input placeholder='Введите город' value={city} onChange={(e) => setCity(e.currentTarget.value)} />
                <div className='flex '>
                    <div className='flex flex-col w-full gap-[28px] mt-3'>
                        <div className='flex-between mr-10'>
                            <Text type='h2'>Онлайн записи</Text>
                            <Checkbox
                                className='w-6 h-6 rounded-[5px]'
                                defaultChecked={true}
                                onCheckedChange={() => setOnline(!online)}
                            />
                        </div>
                        <div className='flex-between  mr-10'>
                            <Text type='h2'>Офлайн записи</Text>
                            <Checkbox
                                className='w-6 h-6 rounded-[5px]'
                                defaultChecked={true}
                                onCheckedChange={() => setOffline(!offline)}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col w-full justify-between gap-[18px]'>
                        <div className='flex-between'>
                            <Text type='h2'>Цена</Text>
                            <div className='flex gap-3 items-center'>
                                <Text type='p'>от</Text>
                                <Input
                                    className='h-[42px] w-[60px] px-1 flex text-center'
                                    pattern={REGEXP_ONLY_DIGITS}
                                    maxLength={5}
                                    value={startPrice}
                                    onChange={(e) => setStartPrice(e.currentTarget.value)}
                                />
                                <Text type='p'>до</Text>
                                <Input
                                    className='h-[42px] w-[60px] px-1 text-center'
                                    pattern={REGEXP_ONLY_DIGITS}
                                    maxLength={5}
                                    value={endPrice}
                                    onChange={(e) => setEndPrice(e.currentTarget.value)}
                                />
                            </div>
                        </div>
                        <div className='flex flex-col gap-[18px]'>
                            <div className='flex-between'>
                                <Text type='h2'>Расстояние</Text>
                                <Text type='h2'>{distance[0] === 100 ? 'Не ограничено' : `${distance} км`}</Text>
                            </div>
                            <Slider
                                defaultValue={distance}
                                max={100}
                                min={0}
                                onValueChange={(value) => setDistance(value)}
                            />
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-7'>
                    {rangesData.map((el) => (
                        <MultiRange title={el} key={el} />
                    ))}
                </div>
                <Button onClick={handleClick} className='mt-7'>
                    {loading ? 'Загрузка...' : data ? `Найти(${data.selectClinics.length})` : 'Найти'}{' '}
                </Button>
            </div>
        </div>
    );
}
