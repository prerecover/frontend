'use client';
import { SearchInput } from '@/components/ui/search-input';
import AppointmentMainCard from '@/entities/Appointment/AppointmentMainCard';
import { cn } from '@/lib/utils';
import { IAppointment } from '@/shared/types/appointment.interface';
import { useState } from 'react';

export default function MainAppointments({ className, data }: { className?: string; data: IAppointment[] }) {
    const [search, setSearch] = useState('');

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    return (
        <>
            <div className='flex gap-3 items-center'>
                <SearchInput onChange={onChangeSearch} value={search} placeholder='Введите запрос' />
            </div>
            <div className='flex flex-col mt-4'>
                <div className={cn('flex justify-center gap-2 w-full', className)}>
                    <div className='flex flex-col gap-4 w-full'>
                        {data
                            .filter((appointment) =>
                                Object.values(appointment).some((value) => {
                                    if (typeof value === 'string') {
                                        return value.toLowerCase().includes(search.toLowerCase());
                                    }
                                }),
                            )
                            .map((appointment) => (
                                <AppointmentMainCard key={appointment._id} appointment={appointment} />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
}
