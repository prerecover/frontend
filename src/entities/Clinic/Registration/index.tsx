'use client';
import { Text } from '@/components/ui/text';
import LeftParams from './left-params';
import RightParams from './right-params';
import { useEffect, useState } from 'react';
import { ICountry } from '@/shared/types/country.interface';
import ClinicActivity from './clinic-activity';
import Image from 'next/image';
import { useClinicRegStore } from '@/shared/store/clinicRegistration';
import ServiceCard from './service-card';
import { Button } from '@/components/ui/button';
import { IService, IServiceCategory } from '@/shared/types/service.interface';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import CheckboxBlock from './checkbox-block';
import QuantityBlock from './quantity-block';
import LocationBlock from './location-block';

const REGISTER_CLINIC = gql(`
mutation CreateService($registerData: RegisterClinicInput!){
    registerClinic(registerClinicInput: $registerData) {
        _id
}
    }
`);

export default function RegistrationClinic({
    countries,
    serviceCategories,
}: {
    countries: ICountry[];
    serviceCategories: IServiceCategory[];
}) {
    const {
        title,
        typeTitle,
        ageClinic,
        square,
        country,
        address,
        adminNumber,
        city,
        numbers,
        registryNumber,
        language,
        computerHave,
        elevatorHave,
        internetHave,
        numberOfFloors,
        totalDoctors,
        totalServices,
        mondayTime,
        tuesdayTime,
        wednesdayTime,
        thursdayTime,
        fridayTime,
        saturdayTime,
        sundayTime,
    } = useClinicRegStore();
    const { toast } = useToast();

    const router = useRouter();
    const [count, setCount] = useState([new Date()]);
    const [fetch, setFetch] = useState(false);
    const [mutate] = useMutation(REGISTER_CLINIC, {
        onCompleted() {
            router.replace('/login');
            toast({ variant: 'positive', title: 'Данные успешно добавлены' });
        },
    });
    const validate = () => {
        const data = [title, adminNumber, country, city];
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
                            title,
                            age: ageClinic,
                            square,
                            numberOfFloors,
                            mondayTime,
                            tuesdayTime,
                            wednesdayTime,
                            thursdayTime,
                            fridayTime,
                            saturdayTime,
                            sundayTime,
                            language,
                            numbers: numbers.filter((num) => num),
                            registryNumber,
                            computerHave,
                            elevatorHave,
                            internetHave,
                            totalServices,
                            totalDoctors,
                            typeTitle,
                            address,
                            adminNumber,
                            city,
                            countryName: country,
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
            <div className='flex gap-[30px] '>
                <div className='flex flex-col'>
                    <Text className='text-[28px] font-medium mt-[16px]' position='center'>
                        Информация о клинике
                    </Text>
                    <div className='bg-white max-w-[1175px] w-full rounded-[12px] mt-[9px] px-9'>
                        <Text className='text-[18px] font-medium mt-7'>Общие</Text>
                        <div className='flex gap-[30px] mt-2'>
                            <LeftParams />
                            <RightParams />
                        </div>
                        <div className='mt-4'>
                            <CheckboxBlock />
                        </div>
                        <div className='mt-7'>
                            <QuantityBlock />
                        </div>
                        <div className='mt-7'>
                            <LocationBlock countries={countries} />
                        </div>
                        <div className='mt-9 flex w-full'>
                            <ClinicActivity />
                        </div>
                    </div>
                    <div className='flex flex-col mt-9 gap-4'>
                        <Text position='center' className='text-[28px] font-medium'>
                            Добавление услуг
                        </Text>
                        <div className='flex flex-col bg-white px-[40px] py-[30px] rounded-[12px]'>
                            {count.map((_, pos) => (
                                <ServiceCard
                                    categories={serviceCategories}
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
            </div>
        </>
    );
}
