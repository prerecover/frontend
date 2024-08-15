import { Text } from '@/components/ui/text';
import { Characteristics } from '@/entities/Common/characteristics';
import { IAppointment } from '@/shared/types/appointment.interface';
import { decodeDate } from '@/shared/utils/formatDate';
import { Info } from './info';

export default function AppointmentMainCard({ appointment }: { appointment: IAppointment }) {
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
        <div className='flex flex-col p-[20px] bg-white rounded-[12px]'>
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
            <Info dateAppointment={dateAppointment} timeAppointment={timeAppointment} duration={duration || 0} />
        </div>
    );
}
