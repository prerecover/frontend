'use client';
import { Text } from '@/components/ui/text';
import { IAppointment } from '@/shared/types/appointment.interface';
import { decodeDate } from '@/shared/utils/formatDate';
import Profit from './profit';
import { FilterBox } from '@/components/ui/filter-box';
import { useState } from 'react';
import UnionParams from '@/entities/Common/UnionParams';
import { GraphCol } from '@/components/ui/graph-col';
import AppointmentInfo from './appointment-info';
import DoctorStats from './doctor-stats';

export default function AppointmentMain({ appointment }: { appointment: IAppointment }) {
    const dateAppointment = decodeDate(new Date(appointment.timeStart));
    const minutes =
        new Date(appointment.timeStart).getMinutes() < 10
            ? `0${new Date(appointment.timeStart).getMinutes()}`
            : new Date(appointment.timeStart).getMinutes();
    const timeAppointment = `${new Date(appointment.timeStart).getHours()}:${minutes}`;
    const duration = appointment.service?.duration;
    const filters = ['Общие параметры', 'График пользы', 'Показатели врача'];
    const [filter, setFilter] = useState('Общие параметры');

    console.log(dateAppointment, timeAppointment, duration);
    return (
        <>
            <div className='flex pt-[20px] px-[14px] flex-col bg-white desktop:m-[20px] desktop:rounded-[12px]'>
                <div className='flex gap-4 w-full overflow-y-hidden'>
                    <div className='flex flex-col w-full'>
                        <Text className='text-[20px] font-medium mb-[20px] mobile:hidden'>Информация о записи</Text>
                        <AppointmentInfo appointment={appointment} />
                        <div className='desktop:hidden'>
                            <Profit />
                        </div>
                        <div className='flex flex-col w-full mt-[20px] '>
                            <FilterBox data={filters} isSelect={filter} setIsSelect={setFilter} />
                            <UnionParams title='Появление услуги: 3 года' />
                            <div className='flex flex-col h-fit '>
                                <Text className='font-semibold text-[16px] ' type='h2'>
                                    Помогло на:
                                </Text>
                                <div className='flex justify-around gap-10 desktop:gap-16 mt-6'>
                                    <GraphCol />
                                    <GraphCol />
                                    <GraphCol />
                                    <GraphCol />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full mobile:hidden'>
                        <Profit />
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='flex flex-col w-full mt-[20px] laptop:hidden pc:hidden mobile:hidden'>
                        <Text className='text-[20px] font-medium mb-[20px] mobile:hidden'>Показатели врача</Text>
                        <DoctorStats doctor={appointment.doctor} />
                    </div>
                </div>
            </div>
        </>
    );
}
