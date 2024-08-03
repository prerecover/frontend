'use client';

import { FilterBox } from '@/components/ui/filter-box';
import { Text } from '@/components/ui/text';
import ClinicAddAppmntCard from '@/entities/Clinic/ClinicAddAppmntCard';
import ServiceAddAppmntCard from '@/entities/Service/ServiceAddAppmntCard';
import { useCurrServiceStore } from '@/shared/store/currServiceStore';
import { useEffect, useState } from 'react';
import SelectDoctor from './select-doctor';
import { Calendar } from '@/components/ui/calendar';
import { useRouter } from 'next/navigation';
import { TimeCiel } from '@/components/ui/time-ceil';
import { Switch } from '@/components/ui/switch/switch';
import { Button } from '@/components/ui/button';
import { gql, useMutation } from '@apollo/client';
import { getCookie } from '@/shared/lib/hooks/useCookie';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useToast } from '@/components/ui/use-toast';

const CREATE_APPOINTMENT = gql(`
mutation CreateAppointment ($clinicId: String!, $doctorId: String!, $online: Boolean, $serviceId: String!, $timeStart: Date!){
    createAppointment(
        createAppointmentInput: {
            clinicId: $clinicId,
            doctorId: $doctorId,
            online: $online, 
            serviceId: $serviceId,
            timeStart: $timeStart
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
    const [doctorId, setDoctorId] = useState<string>('');
    const { toast } = useToast();
    const [date, setDate] = useState<string>('');
    const [time, setTime] = useState<string>('10:30');
    const [mutate] = useMutation(CREATE_APPOINTMENT, {
        context: { headers: { Authorization: token ? `Bearer ${token}` : '' } },
        onError(error) {
            toast({ title: error.message, variant: 'destructive' });
        },
    });

    useEffect(() => {
        setToken(getCookie('access_token'));
        Date.parse(date);
        if (!service) {
            router.back();
        }
    }, [router, service, date]);

    const handleAppointment = () => {
        const dateAppointment = `${date}T${time}:00Z`;
        console.log(dateAppointment);
        const dateParse = new Date(dateAppointment);
        dateParse.setHours(dateParse.getHours() - 3);
        console.log(dateParse);
        mutate({
            variables: {
                clinicId: service?.clinic?._id,
                doctorId,
                online: filter == 'Онлайн',
                serviceId: service?._id,
                timeStart: new Date(dateParse).getTime(),
            },
        });
    };
    return (
        <div className='flex flex-col gap-3 p-4'>
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
            <Text type='h2' className='text-[14px] font-semibold'>
                Укажите дату и время
            </Text>
            <Calendar setDate={setDate} />
            <div className='grid grid-cols-4 gap-3'>
                <TimeCiel value='10:30' setTime={setTime} time={time} />
                <TimeCiel value='11:00' setTime={setTime} time={time} />
                <TimeCiel value='12:00' setTime={setTime} time={time} />
                <TimeCiel value='13:00' setTime={setTime} time={time} />
            </div>
            <div className='bg-white w-full h-[62px] flex-between rounded-[12px] p-4'>
                <Text type='h3' className='text-[14px] font-semibold '>
                    Напоминание
                </Text>
                <Switch />
            </div>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button>Далее</Button>
                </AlertDialogTrigger>
                <AlertDialogContent className='bg-white border-blue-100 rounded-[12px]'>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Создать запись?</AlertDialogTitle>
                        <AlertDialogDescription>Убедитесь что все поля правильно заполнены</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Назад</AlertDialogCancel>
                        <AlertDialogAction onClick={handleAppointment}>Продолжить</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
