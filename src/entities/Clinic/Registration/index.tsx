'use client';
import { Text } from '@/components/ui/text';
import DisabledBlock from './disabled-block';
import LeftParams from './left-params';
import RightParams from './right-params';
import { useEffect, useState } from 'react';
import { ICountry } from '@/shared/types/country.interface';
import ClinicActivity from './clinic-activity';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { useClinicRegStore } from '@/shared/store/clinicRegistration';
import ServiceCard from './service-card';
import { Button } from '@/components/ui/button';
import { IService } from '@/shared/types/service.interface';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const REGISTER_CLINIC = gql(`
mutation CreateService($registerData: RegisterClinicInput!){
    registerClinic(registerClinicInput: $registerData) {
        _id
}
    }
`);

export default function RegistrationClinic({ countries, email }: { countries: ICountry[]; email: string }) {
    const { workdays, startTime, name, endTime, country, address, adminNumber, site, city, debet, setDebet } =
        useClinicRegStore();
    const { toast } = useToast();

    const router = useRouter();
    const [count, setCount] = useState([new Date()]);
    const [fetch, setFetch] = useState(false);
    const [mutate] = useMutation(REGISTER_CLINIC, {
        onCompleted() {
            router.replace('/login');
            toast({ variant: 'positive', title: 'Ваши данные успешно добавлены' });
        },
    });
    const validate = () => {
        const data = [name, adminNumber, country, city, workdays, startTime, endTime];
        data.forEach((field) => {
            if (field.length == 0) {
                toast({ variant: 'destructive', title: 'Указаны не все поля' });
                return false;
            }
        });
        return true;
    };

    const serviceArray: Partial<IService>[] = [];
    const addEl = () => {
        setFetch(false);
        setCount([...count, new Date()]);
    };
    useEffect(() => {
        if (serviceArray.length > 0 && fetch) {
            if (validate()) {
                mutate({
                    variables: {
                        registerData: {
                            address,
                            adminNumber,
                            city,
                            site,
                            card: debet,
                            countryName: country,
                            endTime: parseInt(endTime),
                            startTime: parseInt(startTime),
                            email,
                            title: name,
                            workdays: workdays.join(','),
                            services: serviceArray,
                        },
                    },
                });
            }
            setFetch(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [serviceArray]);
    const handleReg = () => {
        setFetch(true);
    };
    return (
        <>
            <div className='flex ml-[163px] mt-[49px] gap-[30px] mr-[50px]'>
                <div className='flex flex-col'>
                    <div className='bg-white max-w-[1175px] w-full rounded-[12px] mt-[9px] px-9'>
                        <Text className='text-[28px] font-medium mt-[46px]' position='center'>
                            Информация о клинике
                        </Text>
                        <div className='flex gap-[30px] mt-9'>
                            <LeftParams />
                            <RightParams countries={countries} />
                        </div>
                        <div className='mt-9 flex w-full'>
                            <ClinicActivity />
                        </div>
                        <div className='flex flex-col mt-9'>
                            <Text className='text-[18px] font-medium '>
                                Используете ли вы электронный календарь для записи?
                            </Text>
                            <div className='flex'>
                                <RadioGroup defaultValue='option-one' className='flex mt-3 gap-6'>
                                    <div className='flex items-center space-x-2'>
                                        <RadioGroupItem value='option-one' id='option-one' />
                                        <Label htmlFor='option-one'>Да</Label>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <RadioGroupItem value='option-two' id='option-two' />
                                        <Label htmlFor='option-two'>Нет</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                        </div>
                        <div className='flex flex-col mt-9 gap-4 mb-[40px]'>
                            <div className='flex-between'>
                                <div className='flex flex-col gap-4'>
                                    <Text className='text-[18px] font-medium '>Предоставьте свою платежную карту?</Text>
                                    <Input
                                        value={debet}
                                        onChange={(e) => setDebet(e.currentTarget.value)}
                                        type='number'
                                        className='w-[400px]'
                                        placeholder='AAA - BBB - CCC'
                                    />
                                    <Image
                                        src={'/assets/cards-block.svg'}
                                        width={270}
                                        height={28}
                                        alt='cards-block'
                                        priority
                                    />
                                </div>
                                <Image src={'/assets/card-policy.svg'} width={636} height={167} alt='card-policy' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col mt-9 gap-4'>
                        <Text position='center' className='text-[28px] font-medium'>
                            Добавление услуг
                        </Text>
                        <div className='flex flex-col bg-white px-[40px] py-[30px] rounded-[12px]'>
                            {count.map((_, pos) => (
                                <ServiceCard
                                    key={pos}
                                    pos={pos + 1}
                                    fetch={fetch}
                                    setFetch={setFetch}
                                    serviceArray={serviceArray}
                                />
                            ))}
                            <div className='flex flex-col mt-[10px] items-center'>
                                <Image
                                    src={'/assets/blue-plus.svg'}
                                    width={32}
                                    height={32}
                                    className='w-[32px] h-[32px] cursor-pointer'
                                    alt='add service'
                                    onClick={addEl}
                                />
                                <div className='w-full h-[2px] bg-blue-100 my-[10px]'></div>
                            </div>
                        </div>
                        <Button onClick={handleReg} className='w-full'>
                            Зарегистрироваться
                        </Button>
                    </div>
                </div>
                <DisabledBlock email={email} />
            </div>
        </>
    );
}
