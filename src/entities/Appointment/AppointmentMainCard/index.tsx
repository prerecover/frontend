import { Text } from '@/components/ui/text';
import { Characteristics } from '@/entities/Common/characteristics';
import { IAppointment } from '@/shared/types/appointment.interface';
import { decodeDate } from '@/shared/utils/formatDate';
import { Info } from './info';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import ChangeAppointmentMainCard from './change';

export default function AppointmentMainCard({ appointment }: { appointment: IAppointment }) {
    const router = useRouter();
    const dateAppointment = decodeDate(new Date(appointment.timeStart));
    const minutes =
        new Date(appointment.timeStart).getMinutes() < 10
            ? `0${new Date(appointment.timeStart).getMinutes()}`
            : new Date(appointment.timeStart).getMinutes();
    const timeAppointment = `${new Date(appointment.timeStart).getHours()}:${minutes}`;
    const duration = appointment.service?.duration;
    const doctorSpecialization = `${appointment.doctor?.specialization.charAt(0).toUpperCase() + appointment.doctor?.specialization.slice(1)}`;
    const doctorName = `${appointment.doctor.lastName} ${appointment.doctor.firstName.charAt(0).toUpperCase()}.${appointment.doctor.surname.charAt(0).toUpperCase()}`;

    return (
        <>
            <ChangeAppointmentMainCard
                appointment={appointment}
                className={appointment.status !== 'Pending' ? 'hidden' : ''}
            />

            <div
                className={cn(
                    `flex flex-col relative border-[1px] border-blue-100 rounded-[12px] border-solid`,
                    appointment.status === 'Pending' && 'hidden',
                )}>
                {appointment.status == 'Rejected' ? (
                    <Text className='text-red-400 text-[38px] absolute z-40 bottom-28 right-44' position='center'>
                        Отказано
                    </Text>
                ) : (
                    <></>
                )}
                <div
                    className={cn(
                        `flex flex-col p-[20px] bg-white rounded-[12px] cursor-pointer relative`,
                        appointment.status === 'In process' && 'opacity-35',
                        appointment.status === 'Rejected' && 'opacity-35',
                    )}
                    onClick={() => router.push(`/appointments/${appointment._id}`)}>
                    <Text type='h3' className='text-[12px] font-medium text-grey-700'>
                        Названия записи
                    </Text>
                    <Text type='h1' className='text-[16px] font-semibold mt-[7px]'>
                        {appointment.title}
                    </Text>

                    <Characteristics
                        className='gap-3 mt-3'
                        data={[
                            {
                                key: 'Формат:',
                                value: appointment.online ? 'Online' : 'Offline',
                                className: appointment.online ? 'text-green' : 'text-red-400',
                            },
                            { key: 'Предназначена:', value: 'Пока незнаю что сюда вставить' },
                            { key: 'Создана:', value: `${doctorSpecialization} ${doctorName}` },
                            {
                                key: 'Версия:',
                                value: 'USA',
                            },
                        ]}
                    />
                    <div className='w-full h-[1px] bg-blue-100 px-5 mt-4 mb-4'></div>
                    <Info
                        dateAppointment={dateAppointment}
                        timeAppointment={timeAppointment}
                        duration={duration || 0}
                    />
                </div>
            </div>
        </>
    );
}
