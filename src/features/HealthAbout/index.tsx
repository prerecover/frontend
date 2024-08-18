'use client';

import { useAuth } from '@/app/(auth)/auth-wrapper';
import { Text } from '@/components/ui/text';
import ProfitStats from './profit-stats';
import Stats from './stats';
import Image from 'next/image';
import { FilterBtn } from '@/components/ui/filter-btn';
import AppointmentHealthCard from '@/entities/Appointment/AppointmentHealthCard';

export default function HealthAbout() {
    const { user } = useAuth();
    return (
        <>
            <div className='flex flex-col bg-white p-4'>
                <div className='flex-between pl-[21px] gap-2 text-[12px] text-grey-700 font-medium mb-[14px]'>
                    <div className='flex gap-5'>
                        <Text>Врачей 7</Text>
                        <Text>Записей {user.appointments.length}</Text>
                    </div>
                    <Text className='pr-[30px]'>Последние 30 дней</Text>
                </div>
                <div className='flex gap-[17px]'>
                    <Image src={'/assets/skelet.svg'} width={131} height={366} alt='user' className='mt-[14px]' />
                    <div className='flex flex-col w-full gap-[10px] mx-auto'>
                        <ProfitStats />
                        <Stats />
                    </div>
                </div>
            </div>

            <div className='flex flex-col p-4'>
                <div className='flex-between'>
                    <Text className='text-[14px] font-medium'>Записи пациентов</Text>
                    <FilterBtn small onClick={() => console.log('click')} className='w-[10px] h-[10px]' />
                </div>
                <div className='flex flex-col gap-4'>
                    <AppointmentHealthCard />
                    <AppointmentHealthCard />
                </div>
            </div>
        </>
    );
}
