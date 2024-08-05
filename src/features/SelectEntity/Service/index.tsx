'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Text } from '@/components/ui/text';
import { ICountry } from '@/shared/types/country.interface';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { useEffect, useState } from 'react';
import { MultiRange } from './multi-range';
import { Button } from '@/components/ui/button';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useSelectedServicesStore } from '@/shared/store/selectedServicesStore';
import { useToast } from '@/components/ui/use-toast';

const SELECT_SERVICES = gql(`
mutation SelectServices($countryTitle: String!, $startPrice: Int!, $endPrice: Int!) {
    selectServices(
        selectServiceInput: { countryTitle: $countryTitle, startPrice: $startPrice, endPrice: $endPrice}
    ) {
        _id
        createdAt
        description
        duration
        img
        offline
        online
        price
        title
        updatedAt
    }
}


`);

export default function SelectService({ countries }: { countries: ICountry[] }) {
    const { setServices } = useSelectedServicesStore();
    const router = useRouter();
    const [country, setCountry] = useState<string>('Выберите страну');
    const [city, setCity] = useState<string>('');
    const [startPrice, setStartPrice] = useState<string>('500');
    const [endPrice, setEndPrice] = useState<string>('5000');
    const [mutate, { data, loading }] = useMutation(SELECT_SERVICES, {
        onError(error) {
            toast({ title: error.message, description: error.extraInfo, variant: 'destructive' });
        },
    });
    const [online, setOnline] = useState<boolean>(true);
    const [offline, setOffline] = useState<boolean>(true);
    const [distance, setDistance] = useState<number[]>([100]);
    const { toast } = useToast();
    const rangesData = ['Помощь в лечении', 'Ответственность', 'Точность в расчетах', 'Точность в лечении'];

    useEffect(() => {
        console.log('mutate');
        mutate({
            variables: {
                countryTitle: country,
                startPrice: parseInt(startPrice) || 10,
                endPrice: parseInt(endPrice) || 100000,
            },
        });
    }, [country, startPrice, endPrice, mutate]);

    const handleClick = () => {
        setServices(data.selectServices);
        router.push('/service/select/result');
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
                {rangesData.map((el) => (
                    <MultiRange title={el} key={el} />
                ))}
                {}
                <Button onClick={handleClick}>
                    {loading ? 'Загрузка...' : data ? `Найти(${data.selectServices.length})` : 'Найти'}{' '}
                </Button>
            </div>
        </div>
    );
}
