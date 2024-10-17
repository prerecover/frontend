'use client';
import { FilterBox } from '@/components/ui/filter-box';
import AppointmentAdminCard from '@/entities/Appointment/AppointmentAdminCard';
import { IAppointment } from '@/shared/types/appointment.interface';
import { useState } from 'react';

export default function AdminAppointmentsBlock({ appointments }: { appointments: IAppointment[] }) {
    const approovedAppointments = appointments.filter((appointment) => appointment.status == 'Approoved');
    const pendingAppointments = appointments.filter((appointment) => appointment.status == 'Pending');
    const processedAppointments = appointments.filter((appointment) => appointment.status == 'In process');
    const [filter, setFilter] = useState(`Проверка (${processedAppointments.length})`);
    const dataFilter = [
        `Проверка (${processedAppointments.length})`,
        `Подтвержденные (${approovedAppointments.length})`,
        `Измененные (${pendingAppointments.length})`,
    ];
    const filterObj = {
        [dataFilter[1]]: 'Approoved',
        [dataFilter[2]]: 'Pending',
        [dataFilter[0]]: 'In process',
    };
    return (
        <div className='p-4 flex flex-col gap-4 '>
            <FilterBox data={dataFilter} isSelect={filter} setIsSelect={setFilter} className='max-w-[900px]' />
            <div className='grid grid-cols-3 gap-4'>
                {appointments
                    .filter((el) => el.status == filterObj[filter])
                    .map((el) => (
                        <AppointmentAdminCard appointment={el} key={el._id} />
                    ))}
            </div>
        </div>
    );
}
