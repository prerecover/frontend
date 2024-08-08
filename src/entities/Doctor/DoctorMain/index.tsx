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
import ClinicDesktop from '@/entities/Common/clinic-desktop';
import ServicesDesktop from '@/entities/Common/services-desktop';

export default function DoctorMain({ doctor }: { doctor: IDoctor }) {
    const filters = ['Онлайн услуги', 'Офлайн услуги'];
    const [filter, setFilter] = useState('Офлайн услуги');
    return (
        <>
            <div className='flex flex-col '>
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <div className='flex mobile:hidden'>
                            <div className='flex flex-col p-[30px] '>
                                <div className='flex mobile:hidden w-[490px]'>
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
                            <div className='flex flex-col mobile:hidden p-[30px] h-fit w-[540px]'>
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
                        <div className='flex w-full p-[30px]'>
                            <ServicesDesktop online services={doctor.services} border_r rounded_r={false} />
                            <ServicesDesktop
                                online={false}
                                services={doctor.services}
                                className='rounded-tl-[0px] rounded-tr-[10px]'
                                rounded_l={false}
                            />
                        </div>
                    </div>
                    <ClinicDesktop clinic={doctor.clinic} className='p-0 mobile:hidden' />
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
