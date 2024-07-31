'use client';
import MonthSwiper from '@/components/monthSwiper';
import { UserInfo } from './userInfo';
import { FilterBox } from '@/components/ui/filter-box';
import { useState } from 'react';
import { IAppointment } from '@/shared/types/appointment.interface';
import AppointmentAccountCard from '@/entities/Appointment/AppointmentAccountCard';
import { monthIndexes, monthTable } from '@/shared/utils/calendar';
import { AccountPopup } from '@/components/ui/accountPopup';

export default function AccountBlock({ data }: { data: IAppointment[] }) {
    const [filter, setFilter] = useState<string>('Текущие');
    const [openPopup, setOpenPopup] = useState<boolean>(false);

    const filters = ['Текущие', 'История'];
    const [activeMonth, setActiveMonth] = useState(monthIndexes[new Date().getMonth()]);
    return (
        <>
            <UserInfo setPopup={setOpenPopup} />
            <div className='bg-white p-4'>
                <MonthSwiper activeMonth={activeMonth} setActiveMonth={setActiveMonth} />
                <FilterBox data={filters} isSelect={filter} setIsSelect={setFilter} />
                <div className='flex flex-col gap-4 w-full'>
                    {data
                        .filter((appointment) => new Date(appointment.timeStart).getMonth() === monthTable[activeMonth])
                        .filter((appointment) =>
                            filter == 'Текущие'
                                ? new Date(appointment.timeStart) > new Date()
                                : new Date(appointment.timeStart) < new Date(),
                        )
                        .map((appointment) => (
                            <AppointmentAccountCard key={appointment._id} appointment={appointment} />
                        ))}
                </div>
            </div>
            <AccountPopup isOpen={openPopup} title='Подробнее' closeHandler={() => setOpenPopup(false)}>
                <h1>asd</h1>
            </AccountPopup>
        </>
    );
}
