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

export default function RegistrationClinic({ countries }: { countries: ICountry[] }) {
    const imageRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState<string>('');
    const [adminNumber, setAdminNumber] = useState<string>('');
    const [site, setSite] = useState<string>('');
    const [country, setCountry] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [avatar, setAvatar] = useState<any>();

    const [workDays, setWorkDays] = useState<string[]>([]);
    const [startTime, setStartTime] = useState<string>('');
    const [endTime, setEndTime] = useState<string>('');
    const [telegram, setTelegram] = useState<boolean>(false);
    useEffect(() => {
        console.log(avatar);
    }, [avatar]);
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
                        <LeftParams
                            name={name}
                            setName={setName}
                            setSite={setSite}
                            site={site}
                            adminNumber={adminNumber}
                            setAdminNumber={setAdminNumber}
                        />
                        <RightParams
                            countries={countries}
                            country={country}
                            setCountry={setCountry}
                            city={city}
                            setCity={setCity}
                            address={address}
                            setAddress={setAddress}
                        />
                    </div>
                    <div className='mt-9 flex w-full'>
                        <ClinicActivity
                            active={workDays}
                            setActive={setWorkDays}
                            startTime={startTime}
                            endTime={endTime}
                            setStartTime={setStartTime}
                            setEndTime={setEndTime}
                        />
                    </div>
                    <div className='flex flex-col mt-9'>
                        <Text className='text-[18px] font-medium '>Фото клиники</Text>
                        <input type='file' onChange={(e) => handleImg(e)} className='hidden' ref={imageRef} />
                        <div
                            className='flex-center border-blue bg-blue-100 max-w-[330px] h-[200px] rounded-[12px] mt-4 border-solid border-[1px] cursor-pointer'
                            onClick={() => imageRef.current?.click()}>
                            <Image
                                src={'/assets/blue-plus.svg'}
                                width={60}
                                height={60}
                                className='w-[50px] h-[50px]'
                                alt='add image'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col mt-9'>
                        <Text className='text-[18px] font-medium '>
                            Имеется ли у вас telegram
                        </Text>
                        <div className='flex items-center gap-4 cursor-pointer mt-4' onClick={(e) => setTelegram(!telegram)}>
                            <Checkbox
                                className='w-[24px] h-[24px] rounded-[5px]'
                                checked={telegram}
                            />
                            <Text>Да</Text>
                            <Checkbox
                                className='w-[24px] h-[24px] rounded-[5px]'
                                checked={!telegram}
                            />
                            <Text>Нет</Text>
                        </div>
                        {telegram === false && <Text className='text-grey font-normal text-[16px] mt-4'>После заполнения формы - вы будете переведены на установщик </Text>}
                    </div>
                </div>
                <DisabledBlock email={'maks.chikezov@gmail.com'} number='+9 (999) 999-99-99' />
            </div>
            <div className="flex mt-[400px]"></div>
        </>
    );
}
