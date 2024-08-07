'use client';
import { Text } from '@/components/ui/text';
import { IDoctor } from '@/shared/types/doctor.interface';
import Image from 'next/image';
import DoctorInfo from './doctor-info';
import DoctorStats from './doctor-stats';
import { FilterBox } from '@/components/ui/filter-box';
import { useState } from 'react';
import ServiceOfDoctorCard from '@/entities/Service/ServiceOfDoctorCard';
import { Progress } from '@/components/ui/progress';
import { GraphCol } from '@/components/ui/graph-col';
import DoctorClinicDesktop from './clinic-desktop';
import DoctorServicesDesktop from './services-desktop';

export default function DoctorMain({ doctor }: { doctor: IDoctor }) {
    const filters = ['Онлайн услуги', 'Офлайн услуги'];
    const [filter, setFilter] = useState('Офлайн услуги');
    return (
        <>
            <div className='flex flex-col gap-1'>
                <div className='flex gap-20 justify-between'>
                    <div className='flex flex-col'>
                        <div className='flex gap-28 mobile:hidden'>
                            <div className='flex flex-col p-[30px] '>
                                <div className='flex mobile:hidden'>
                                    <Image
                                        src={doctor.avatar || '/assets/doctor.svg'}
                                        alt='doctor'
                                        width={120}
                                        height={120}
                                        className='desktop:w-[120px] desktop:h-[120px] w-14 h-14'
                                    />
                                    <div className='flex flex-col gap-2'>
                                        <Text
                                            type='h4'
                                            className='text-[20px] my-auto pl-2 font-semibold'>{`${doctor.firstName} ${doctor.lastName}`}</Text>
                                        <DoctorInfo doctor={doctor} className='mobile:hidden pl-2' />
                                    </div>
                                </div>
                                <div className='flex flex-col mobile:hidden'>
                                    <Text className='font-semibold text-[16px] mt-[30px]' type='h2'>
                                        Лечилось всего:
                                    </Text>
                                    <Text className='mx-auto mt-[15px] text-[32px] font-medium' type='h4'>
                                        3245
                                    </Text>
                                    <Progress value={60} className=' h-[6px] mt-4 w-full' color='#FFFFFF' />
                                </div>
                            </div>
                            <div className='flex flex-col mobile:hidden p-[30px] h-fit'>
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
                        <DoctorServicesDesktop services={doctor.services} />
                    </div>
                    <DoctorClinicDesktop clinic={doctor.clinic} className='p-0 mobile:hidden' />
                </div>
            </div>
            <div className='p-4 desktop:hidden'>
                <div className='flex'>
                    <Image
                        src={doctor.avatar || '/assets/doctor.svg'}
                        alt='doctor'
                        width={120}
                        height={120}
                        className='desktop:w-[120px] desktop:h-[120px] w-14 h-14'
                    />
                    <div className='flex flex-col gap-2'>
                        <Text
                            type='h4'
                            className='text-[20px] my-auto pl-2 font-semibold'>{`${doctor.firstName} ${doctor.lastName}`}</Text>
                        <DoctorInfo doctor={doctor} className='mobile:hidden pl-2' />
                    </div>
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
                <div className='gap-4 flex flex-col mt-4'>
                    {doctor.services
                        ?.filter((service) => (filter === 'Онлайн услуги' ? service.online : !service.online))

                        .map((service, i) => <ServiceOfDoctorCard service={service} key={i} num={i + 1} />)}
                </div>
            </div>
        </>
    );
}
