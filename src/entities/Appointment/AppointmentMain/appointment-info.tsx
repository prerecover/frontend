import { Text } from '@/components/ui/text';
import ClinicAddAppmntCard from '@/entities/Clinic/ClinicAddAppmntCard';
import DoctorAddAppmntCard from '@/entities/Doctor/DoctorAddAppmntCard';
import ServiceAddAppmntCard from '@/entities/Service/ServiceAddAppmntCard';
import { IAppointment } from '@/shared/types/appointment.interface';
import { decodeDate } from '@/shared/utils/formatDate';

export default function AppointmentInfo({ appointment }: { appointment: IAppointment }) {
    const minutes =
        new Date(appointment.timeStart).getMinutes() < 10
            ? `0${new Date(appointment.timeStart).getMinutes()}`
            : new Date(appointment.timeStart).getMinutes();
    const timeAppointment = `${new Date(appointment.timeStart).getHours()}:${minutes}`;
    const dateAppointment = decodeDate(new Date(appointment.timeStart));
    return (
        <>
            <Text className='text-[14px] font-semibold'>Дата и время</Text>
            <div className='flex gap-3'>
                <div className='flex w-fit rounded-[10px] border-solid border-[1px] border-blue-200 mt-[11px]'>
                    <Text className='m-auto font-medium text-[14px] py-[10px] px-[19px]'>{timeAppointment}</Text>
                </div>
                <div className='flex w-fit rounded-[10px] border-solid border-[1px] border-blue-200 mt-[11px]'>
                    <Text className='m-auto font-medium text-[14px] py-[10px] px-[19px]'>{dateAppointment}</Text>
                </div>
            </div>
            <div className='flex flex-col gap-3 mt-3'>
                <Text type='h2' className='text-[14px] font-semibold'>
                    Врач
                </Text>
                <DoctorAddAppmntCard doctor={appointment.doctor} />
                <Text type='h2' className='text-[14px] font-semibold'>
                    Услуга
                </Text>
                <ServiceAddAppmntCard service={appointment.service} />
                <Text type='h2' className='text-[14px] font-semibold'>
                    Клиника
                </Text>
                <ClinicAddAppmntCard clinic={appointment.clinic} />
            </div>
        </>
    );
}
