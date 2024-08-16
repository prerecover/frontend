'use client';

import { FilterBox } from '@/components/ui/filter-box';
import { Text } from '@/components/ui/text';
import ClinicAddAppmntCard from '@/entities/Clinic/ClinicAddAppmntCard';
import ServiceAddAppmntCard from '@/entities/Service/ServiceAddAppmntCard';
import { useCurrServiceStore } from '@/shared/store/currServiceStore';
import { useEffect, useState } from 'react';
import SelectDoctor from './select-doctor';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { gql, useMutation } from '@apollo/client';
import { getCookie } from '@/shared/lib/hooks/useCookie';
import { useToast } from '@/components/ui/use-toast';
import { formatDate } from '@/shared/utils/formatDate';
import ClinicDesktop from '@/entities/Common/clinic-desktop';
import Image from 'next/image';
import ServiceInfo from '@/entities/Service/ServiceMain/service-info';
import UnionParams from '@/entities/Common/UnionParams';
import { DoughnutBlock } from '@/entities/Clinic/ClinicMain/doughnut-block';
import NewsListDesktop from '@/entities/Common/news-desktop';
import AppointmentPopupDesktop from './desktop-popup';
import CalendarBlock from './calendar-block';

const CREATE_APPOINTMENT = gql(`
mutation CreateAppointment ($clinicId: String!, $doctorId: String!, $online: Boolean, $serviceId: String!, $timeStart: Date!, $duration: Int!){
    createAppointment(
        createAppointmentInput: {
            clinicId: $clinicId,
            doctorId: $doctorId,
            online: $online, 
            serviceId: $serviceId,
            timeStart: $timeStart
            duration: $duration
        }
    ) {
        _id
        createdAt
        file
        notify
        online
        specialCheck
        status
        timeStart
        title
        doctor{
            firstName   
            lastName 
            surname
        }   
        updatedAt
    }
}
`);

export default function AddAppointmentBlock() {
    const { service } = useCurrServiceStore();
    const filters = ['Онлайн', 'Оффлайн'];
    const router = useRouter();
    const [filter, setFilter] = useState<string>('Онлайн');
    const [token, setToken] = useState<string | undefined>();
    const [doctorId, setDoctorId] = useState<string>('empty');
    const { toast } = useToast();
    const [date, setDate] = useState<Date>(new Date());
    const [time, setTime] = useState<string>('10:30');
    const [mutate] = useMutation(CREATE_APPOINTMENT, {
        context: { headers: { Authorization: token ? `Bearer ${token}` : '' } },
        onError(error) {
            toast({ title: error.message, variant: 'destructive' });
        },
        onCompleted(data) {
            const doctor = data.createAppointment.doctor;
            router.replace('/appointments');
            toast({
                variant: 'warning',
                title: 'Ваша запись добавлена на рассмотрение',
                description: `Дата: ${formatDate(date)}. Врач: ${doctor?.lastName} ${doctor?.firstName?.charAt(0) + '.'} ${doctor?.surname?.charAt(0) + '.'}`,
            });
        },
    });

    useEffect(() => {
        setToken(getCookie('access_token'));
        if (!service) {
            router.back();
        }
    }, [router, service, date]);

    const parseTime = (time: string) => {
        const hours = parseInt(time.slice(0, 2));
        const minutes = parseInt(time.slice(3, 5));
        return { hours, minutes };
    };

    const handleAppointment = () => {
        const { hours, minutes } = parseTime(time);
        date.setHours(hours, minutes);

        date.setHours(date.getHours() - 3);
        console.log(service?.doctors![0]._id);
        doctorId == 'empty' && setDoctorId((service?.doctors && service?.doctors[0]._id) || '');
        mutate({
            variables: {
                clinicId: service?.clinic?._id,
                doctorId: doctorId == 'empty' ? service?.doctors![0]?._id : doctorId,
                online: filter == 'Онлайн',
                serviceId: service?._id,
                timeStart: date.getTime(),
                duration: service?.duration,
            },
        });
    };
    return (
        <>
            <motion.div className='flex reverse_pc:hidden transition-all opacity-15'>
                <ClinicDesktop clinic={service?.clinic} />
                <div className='flex flex-col'>
                    <div className='bg-blue-200 h-[60px] w-dvw flex-between pl-[30px] '>
                        <div className='flex-center gap-[18px] cursor-pointer' onClick={() => router.back()}>
                            <Image
                                src={'/assets/arrow-left.svg'}
                                width={28}
                                height={28}
                                className='w-[28px] h-[28px]'
                                alt='back'
                            />
                            <Text type='p' className='text-[16px] font-medium'>
                                Назад
                            </Text>
                        </div>
                    </div>
                    <div className='flex pl-[30px] pt-[18px] gap-[30px]'>
                        <div className='bg-white p-4 rounded-[12px] min-w-[530px]'>
                            {service && <ServiceInfo service={service} />}
                            <Button
                                className='w-full'
                                variant={'default'}
                                onClick={() => router.push('/add-appointment')}>
                                Записаться
                            </Button>
                            <FilterBox
                                data={filters}
                                isSelect={filter}
                                setIsSelect={setFilter}
                                className='border-[1px] border-blue-200 mt-4'
                            />
                            {filter == 'Общие параметры' ? (
                                <UnionParams title='Появление услуги: 3 года' />
                            ) : (
                                <DoughnutBlock />
                            )}
                        </div>{' '}
                        <NewsListDesktop
                            rounded_content
                            news={service?.news}
                            withTitle={false}
                            bgWhite
                            withFilter
                            className='rounded-[10px]'
                        />
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ y: -300, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 300, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 50 }}
                className='flex mobile:hidden pc:max-w-[1015px] pc:absolute w-full pc:h-fit self-center pc:bg-blue-100 z-[50] rounded-[10px]'>
                <Image
                    src={'/assets/close-i.svg'}
                    width={20}
                    height={20}
                    alt='close'
                    className='absolute right-0 top-0 m-[13px] cursor-pointer reverse_pc:hidden'
                    onClick={() => router.back()}
                />
                {service && (
                    <AppointmentPopupDesktop
                        currDoctorId={doctorId}
                        setCurrDoctorId={setDoctorId}
                        filters={filters}
                        setFilter={setFilter}
                        filter={filter}
                        service={service}
                    />
                )}
                <div className='w-[1px] h-screen max-h-[750px] bg-blue-200 mt-[40px] mx-auto z-50'></div>
                <div className='flex flex-col py-[30px]  gap-3 mx-auto'>
                    <CalendarBlock
                        handleAppointment={handleAppointment}
                        setTime={setTime}
                        time={time}
                        setDate={setDate}
                    />
                </div>
            </motion.div>
            <div className='flex flex-col gap-3 p-4 desktop:hidden transition-all'>
                <Text type='h2' className='text-[14px] font-semibold'>
                    Клиника
                </Text>
                {service?.clinic && <ClinicAddAppmntCard clinic={service?.clinic} />}
                <Text type='h2' className='text-[14px] font-semibold'>
                    Услуга
                </Text>
                {service && <ServiceAddAppmntCard service={service} />}
                <Text type='h2' className='text-[14px] font-semibold'>
                    Укажите тип записи
                </Text>
                <FilterBox
                    data={filters}
                    isSelect={filter}
                    setIsSelect={setFilter}
                    className='border-[1px] border-blue-200'
                />
                {service?.doctors && service?.doctors?.length > 1 && (
                    <>
                        <Text type='h2' className='text-[14px] font-semibold'>
                            Выберите врача
                        </Text>
                    </>
                )}
                {service?.doctors && (
                    <SelectDoctor doctors={service?.doctors} currentDoctor={doctorId} setCurrentDoctor={setDoctorId} />
                )}
                <CalendarBlock handleAppointment={handleAppointment} setTime={setTime} time={time} setDate={setDate} />
            </div>
        </>
    );
}
