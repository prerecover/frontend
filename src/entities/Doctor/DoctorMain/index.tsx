'use client';
import { Text } from '@/components/ui/text';
import { IDoctor } from '@/shared/types/doctor.interface';
import Image from 'next/image';
import DoctorInfo from './doctor-info';
import DoctorStats from './doctor-stats';
import { FilterBox } from '@/components/ui/filter-box';
import { useState } from 'react';
import ServiceOfDoctorCard from '@/entities/Service/ServiceOfDoctorCard';

export default function DoctorMain({ doctor }: { doctor: IDoctor }) {
    const filters = ['Онлайн услуги', 'Офлайн услуги'];
    const [filter, setFilter] = useState('Офлайн услуги');
    return (
        <>
            <div className='flex flex-col gap-1'>
                <div className='flex items-center gap-2 font-semibold'>
                    <Image
                        src={doctor.avatar || '/assets/doctor.svg'}
                        alt='doctor'
                        width={20}
                        height={20}
                        className='w-14 h-14'
                    />
                    <Text type='h4'>{`${doctor.firstName} ${doctor.lastName}`}</Text>
                </div>
                <DoctorInfo doctor={doctor} />
                <DoctorStats />
                <FilterBox
                    className='max-w-full my-0 mx-auto desktop:justify-center desktop:my-0 desktop:m-auto border-[2px] mt-5'
                    style={{ margin: '0 auto' }}
                    data={filters}
                    isSelect={filter}
                    setIsSelect={setFilter}
                />
                <div className='gap-4 flex flex-col'>
                    {doctor.services
                        ?.filter((service) => (filter === 'Онлайн услуги' ? service.online : !service.online))

                        .map((service, i) => <ServiceOfDoctorCard service={service} key={i} num={i + 1} />)}
                </div>
            </div>
        </>
    );
}
