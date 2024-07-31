import { Text } from '@/components/ui/text';
import { Characteristics } from '@/entities/Common/characteristics';
import { IAppointment } from '@/shared/types/appointment.interface';
import { Info } from './info';
import { decodeDate } from '@/shared/utils/formatDate';

export default function AppointmentAccountCard({ appointment }: { appointment: IAppointment }) {
    const dateAppointment = decodeDate(new Date(appointment.timeStart));
    const startAppointment = `${new Date(appointment.timeStart).getHours()}:${new Date(appointment.timeStart).getMinutes()}`;
    const endAppointment = `${new Date(appointment.timeEnd).getHours()}:${new Date(appointment.timeEnd).getMinutes()}`;
    const doctorSpecialization = `${appointment.doctor?.specialization.charAt(0).toUpperCase() + appointment.doctor?.specialization.slice(1)}`;
    const doctorName = `${appointment.doctor.firstName.charAt(0).toUpperCase()}.${appointment.doctor.surname.charAt(0).toUpperCase()}`;
    return (
        <div className='flex flex-col p-[20px] bg-white rounded-[12px]'>
            <Text type='h3' className='text-[12px] font-medium text-grey-700'>
                Запись
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
                    { key: 'Клиника:', value: appointment.clinic.title },
                    { key: 'Врач:', value: `${doctorSpecialization} ${doctorName}` },
                ]}
            />
            <div className='w-full h-[1px] bg-blue-100 px-5 mt-4 mb-4'></div>
            <Info
                dateAppointment={dateAppointment}
                startAppointment={startAppointment}
                endAppointment={endAppointment}
            />
        </div>
    );
}
