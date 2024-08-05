'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { InputOTP, InputOTPSlot } from '@/components/ui/input-otp';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Text } from '@/components/ui/text';
import { ICountry } from '@/shared/types/country.interface';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { useEffect, useState } from 'react';
import { MultiRange } from './multi-range';
import { Button } from '@/components/ui/button';
import { gql, useMutation } from '@apollo/client';
import { useSelectedClinicsStore } from '@/shared/store/selectedClinicsStore';
import { useRouter } from 'next/navigation';

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

export default function SelectClinic({ countries }: { countries: ICountry[] }) {
    const { setClinics } = useSelectedClinicsStore();
    const router = useRouter();
    const [country, setCountry] = useState<string>('Выберите страну');
    const [city, setCity] = useState<string>('');
    const [exp, setExp] = useState<string>('1');
    const [mutate, { data, loading }] = useMutation(SELECT_CLINICS);
    const [online, setOnline] = useState<boolean>(true);
    const [offline, setOffline] = useState<boolean>(true);
    const [distance, setDistance] = useState<number[]>([100]);
    const [treatTotal, setTreatTotal] = useState<string>('1000');
    const rangesData = ['Помощь в лечении', 'Ответственность', 'Точность в расчетах', 'Точность в лечении'];

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
        <div className='flex flex-col bg-white p-4'>
            <div className='flex flex-col gap-[22px] text-[16px] font-medium'>
                <Select onValueChange={(value) => setCountry(value)}>
                    <SelectTrigger className='w-full py-7 pr-5 pl-6 border-[1px] border-blue-100 rounded-[8px] bg-[#fff]'>
                        <SelectValue placeholder='Страна' />
                    </SelectTrigger>
                    <SelectContent className='border-blue bg-white rounded-[12px] flex flex-col gap-10 '>
                        {countries.map((country: ICountry) => (
                            <SelectItem key={country._id} value={country.title} className='cursor-pointer'>
                                {country.title}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Input placeholder='Введите город' value={city} onChange={(e) => setCity(e.currentTarget.value)} />
                <div className='flex flex-col'>
                    <div className='flex-between'>
                        <Text type='h2'>Расстояние</Text>
                        <Text type='h2'>{distance[0] === 100 ? 'Не ограничено' : `${distance} км`}</Text>
                    </div>
                </div>
                <Slider defaultValue={distance} max={100} min={0} onValueChange={(value) => setDistance(value)} />

                <div className='mt-[22px] flex flex-col'>
                    <div className='flex-between py-4'>
                        <Text type='h2'>Онлайн записи</Text>
                        <Checkbox
                            className='w-6 h-6 rounded-[5px]'
                            defaultChecked={true}
                            onCheckedChange={() => setOnline(!online)}
                        />
                    </div>
                    <div className='flex-between py-4'>
                        <Text type='h2'>Офлайн записи</Text>
                        <Checkbox
                            className='w-6 h-6 rounded-[5px]'
                            defaultChecked={true}
                            onCheckedChange={() => setOffline(!offline)}
                        />
                    </div>
                </div>
                <div className='flex-between'>
                    <Text type='h2'>Опыт лечения</Text>
                    <div className='flex gap-3 items-center'>
                        <Text type='p'>от</Text>
                        <InputOTP
                            maxLength={1}
                            value={exp}
                            onChange={(value) => setExp(value)}
                            pattern={REGEXP_ONLY_DIGITS}>
                            <InputOTPSlot index={0} className='h-[42px]' />
                        </InputOTP>
                        <Text type='p'>лет</Text>
                    </div>
                </div>
                {rangesData.map((el) => (
                    <MultiRange title={el} key={el} />
                ))}
                <div className='flex-between'>
                    <Text type='h2'>Лечилось всего</Text>
                    <div className='flex gap-3 items-center'>
                        <Text type='p'>от</Text>
                        <InputOTP
                            maxLength={1}
                            value={treatTotal}
                            onChange={(value) => setTreatTotal(value)}
                            pattern={REGEXP_ONLY_DIGITS}>
                            <InputOTPSlot index={0} className='h-[42px]' />
                        </InputOTP>
                    </div>
                </div>
                <div className='flex-between py-4'>
                    <Text type='h2'>Включить врача</Text>
                    <Checkbox className='w-6 h-6 rounded-[5px]' defaultChecked={true} />
                </div>
                {}
                <Button onClick={handleClick}>
                    {loading ? 'Загрузка...' : data ? `Найти(${data.selectClinics.length})` : 'Найти'}{' '}
                </Button>
            </div>
        </div>
    );
}
