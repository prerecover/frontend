'use client';
import { Text } from '@/components/ui/text';
import DisabledBlock from './disabled-block';
import LeftParams from './left-params';
import RightParams from './right-params';
import { useEffect, useRef, useState } from 'react';
import { ICountry } from '@/shared/types/country.interface';
import ClinicActivity from './clinic-activity';
import Image from 'next/image';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { useClinicRegStore } from '@/shared/store/clinicRegistration';
import ServiceCard from './service-card';
import { Button } from '@/components/ui/button';
import { IService } from '@/shared/types/service.interface';
import { gql, useMutation } from '@apollo/client';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';

const REGISTER_CLINIC = gql(`
mutation CreateService($registerData: RegisterClinicInput!){
    registerClinic(registerClinicInput: $registerData) {
        _id
}
    }
`);

export default function RegistrationClinic({ countries }: { countries: ICountry[] }) {
    const {
        workdays,
        startTime,
        name,
        endTime,
        country,
        telegram,
        address,
        adminNumber,
        site,
        city,
        setTelegram,
        avatar,
        setAvatar,
        debet,
        setDebet,
    } = useClinicRegStore();
    const imageRef = useRef<HTMLInputElement | null>(null);
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
                            countryName: country,
                            endTime: parseInt(endTime),
                            avatar,
                            startTime: parseInt(startTime),
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
    const handleImg = (e: any) => {
        const file = e.target.files[0];
        setAvatar(file);
    };
    return (
        <>
            <div className='flex ml-[163px] mt-[49px] gap-[30px] mr-[50px]'>
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
                        <Text className='text-[18px] font-medium '>Фото клиники</Text>
                        <input type='file' onChange={(e) => handleImg(e)} className='hidden' ref={imageRef} />
                        <div
                            className='flex-center border-blue bg-blue-100 max-w-[330px] h-[200px] rounded-[12px] mt-4 border-solid border-[1px] cursor-pointer'
                            onClick={() => imageRef.current?.click()}>
                            <Image
                                src={!avatar ? '/assets/blue-plus.svg' : URL.createObjectURL(avatar)}
                                width={330}
                                height={200}
                                className={cn(!avatar ? 'w-[50px] h-[50px]' : 'w-[330px] h-[220px]', 'object-cover')}
                                alt='add image'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col mt-9'>
                        <Text className='text-[18px] font-medium '>Имеется ли у вас telegram</Text>
                        <div
                            className='flex items-center gap-4 cursor-pointer mt-4'
                            onClick={() => setTelegram(!telegram)}>
                            <Checkbox className='w-[24px] h-[24px] rounded-[5px]' checked={telegram} />
                            <Text>Да</Text>
                            <Checkbox className='w-[24px] h-[24px] rounded-[5px]' checked={!telegram} />
                            <Text>Нет</Text>
                        </div>
                        {telegram === false && (
                            <Text className='text-grey font-normal text-[16px] mt-4'>
                                После заполнения формы - вы будете переведены на установщик{' '}
                            </Text>
                        )}
                    </div>
                    <div className='flex flex-col mt-9 gap-4'>
                        <Text className='text-[18px] font-medium '>Предоставьте свою платежную карту?</Text>
                        <Input value={debet} onChange={(e) => setDebet(e.currentTarget.value)} className='w-[400px]' />
                        <div className='flex flex-col text-[14px]'>
                            <Text>
                                Если предоставить карту - оплата будет происходить сразу с сайта и количество пациентов
                                будет больше
                            </Text>
                            <Text>Если не предоставить карту - вам пизда</Text>
                        </div>

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
                    <Button onClick={handleReg}>Зарегистрироваться</Button>
                </div>
                <DisabledBlock />
            </div>
            <div className='flex mt-[400px]'></div>
        </>
    );
}
