'use client';
import { SearchInput } from '@/components/ui/search-input';
import { Text } from '@/components/ui/text';
import AppointmentMainCard from '@/entities/Appointment/AppointmentMainCard';
import { cn } from '@/lib/utils';
import { IAppointment } from '@/shared/types/appointment.interface';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AppointmentMain({ className, data }: { className?: string; data: IAppointment[] }) {
    const [search, setSearch] = useState('');
    const router = useRouter();

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
                    <div className='flex flex-col gap-4 w-full desktop:grid desktop:grid-cols-3 min-h-[228px]'>
                        <div
                            className='w-full h-full bg-blue-100 border border-solid border-blue rounded-[12px] flex flex-col items-center justify-center gap-4 cursor-pointer hover:opacity-80 mobile:hidden'
                            onClick={() => router.push('/create-appointment')}>
                            <Image
                                src={'/assets/blue-plus.svg'}
                                width={46}
                                height={46}
                                alt='add appointment'
                                className='w-12 h-12'
                            />
                            <Text className='text-[20px] text-blue' type='h2'>
                                Добавить запись
                            </Text>
                        </div>
                        {data
                            .filter((appointment) => new Date(appointment.timeStart) > new Date())
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
