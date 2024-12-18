'use client';
import { Text } from '@/components/ui/text';
import LeftParams from './left-params';
import RightParams from './right-params';
import { useEffect, useState } from 'react';
import { ICountry } from '@/shared/types/country.interface';
import ClinicActivity from './clinic-activity';
import { useClinicRegStore } from '@/shared/store/clinicRegistration';
import { Button } from '@/components/ui/button';
import { IService } from '@/shared/types/service.interface';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import CheckboxBlock from './checkbox-block';
import QuantityBlock from './quantity-block';
import LocationBlock from './location-block';
import { IClinic } from '@/shared/types/clinic.interface';

const UPDATE_CLINIC = gql(`
mutation UpdateClinic ($updateClinicInput: UpdateClinicInput!, $clinicId: String!){
    updateClinic(
        _id: $clinicId
        updateClinicInput: $updateClinicInput
    ) {
        _id
    }
}
`);

export default function ModificationClinic({
    clinic,
    countries,
    // serviceCategories,
}: {
    countries: ICountry[];
    clinic: IClinic;
    // serviceCategories: IServiceCategory[];
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
    // const [count, setCount] = useState([new Date()]);
    const [fetch, setFetch] = useState(false);
    const [mutate] = useMutation(UPDATE_CLINIC, {
        onCompleted() {
            router.replace('/admin/clinics');
            router.refresh();
            toast({ variant: 'positive', title: 'Данные успешно обновлены' });
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
    // const addEl = () => {
    //     setFetch(false);
    //     setCount([...count, new Date()]);
    // };
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
        mutate({
            variables: {
                clinicId: clinic._id,
                updateClinicInput: {
                    title,
                    age: ageClinic,
                    square,
                    numberOfFloors,
                    // mondayTime,
                    // tuesdayTime,
                    // wednesdayTime,
                    // thursdayTime,
                    // fridayTime,
                    // saturdayTime,
                    // sundayTime,
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
                    // services: serviceArray,
                },
            },
        });
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
                            <LeftParams
                                numbers={clinic?.detail.numbers || []}
                                title={clinic?.title || ''}
                                typeTitle={clinic?.typeTitle || ''}
                                adminNumber={clinic?.detail.adminNumber || ''}
                                registryNumber={clinic?.detail.registryNumber || ''}
                            />
                            <RightParams
                                language={clinic?.detail.language || ''}
                                ageClinic={clinic?.age || 0}
                                square={clinic?.detail.square || 0}
                                numbers={clinic?.detail.numbers || []}
                            />
                        </div>
                        <div className='mt-4'>
                            <CheckboxBlock
                                internetHave={clinic.detail.internetHave}
                                elevatorHave={clinic.detail.elevatorHave}
                                computerHave={clinic.detail.computerHave}
                            />
                        </div>
                        <div className='mt-7'>
                            <QuantityBlock
                                totalDoctors={clinic.detail.totalDoctors}
                                totalServices={clinic.detail.totalServices}
                                numberOfFlooors={clinic.detail.numberOfFloors}
                            />
                        </div>
                        <div className='mt-7'>
                            <LocationBlock
                                countries={countries}
                                country={clinic.country}
                                city={clinic.city}
                                address={clinic.address}
                            />
                        </div>
                        <div className='mt-9 flex w-full'>
                            <ClinicActivity />
                        </div>
                    </div>
                    <div className='flex flex-col mt-9 gap-4'>
                        {/* <Text position='center' className='text-[28px] font-medium'> */}
                        {/*     Добавление услуг */}
                        {/* </Text> */}
                        {/* <div className='flex flex-col bg-white px-[40px] py-[30px] rounded-[12px]'> */}
                        {/*     {count.map((_, pos) => ( */}
                        {/*         <ServiceCard */}
                        {/*             categories={serviceCategories} */}
                        {/*             key={pos} */}
                        {/*             pos={pos + 1} */}
                        {/*             fetch={fetch} */}
                        {/*             setFetch={setFetch} */}
                        {/*             serviceArray={serviceArray} */}
                        {/*         /> */}
                        {/*     ))} */}
                        {/*     <div className='flex flex-col mt-[10px] items-center'> */}
                        {/*         <Image */}
                        {/*             src={'/assets/blue-plus.svg'} */}
                        {/*             width={32} */}
                        {/*             height={32} */}
                        {/*             className='w-[32px] h-[32px] cursor-pointer' */}
                        {/*             alt='add service' */}
                        {/*             onClick={addEl} */}
                        {/*         /> */}
                        {/*         <div className='w-full h-[2px] bg-blue-100 my-[10px]'></div> */}
                        {/*     </div> */}
                        {/* </div> */}
                        <Button onClick={handleReg} className='w-full'>
                            Сохранить
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
