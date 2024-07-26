'use client';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { useAuth } from '@/app/(auth)/auth-wrapper';
import { useEffect, useRef, useState } from 'react';
import { SliderHeader } from '../sliderHeader';
import DoctorCard from '@/entities/Doctor/DoctorSlideCard';
import 'swiper/css';
import { IDoctor } from '@/shared/types/doctor.interface';
import DoctorCardSkeleton from '@/entities/Doctor/DoctorSlideCard/skeleton';
export default function DoctorSwiper({ data }: { data: IDoctor[] }) {
    const { user } = useAuth();
    const swiperRef = useRef<SwiperRef>(null);
    const [isLoading, setIsLoaging] = useState(false);
    useEffect(() => setIsLoaging(true), []);
    if (!isLoading)
        return (
            <>
                <SliderHeader
                    swiperRef={swiperRef}
                    title={user && user?.country?.title ? `Все специалисты из ${user.country?.title}` : 'Все врачи'}
                    withArrows={true}
                />
                <DoctorCardSkeleton data={data} />
            </>
        );

    return (
        <>
            <SliderHeader
                swiperRef={swiperRef}
                title={user && user?.country?.title ? `Все специалисты из ${user.country?.title}` : 'Все врачи'}
                withArrows={true}
            />
            <div className='my-0 mx-[-16px] mb-4'>
                <Swiper
                    ref={swiperRef}
                    spaceBetween={8}
                    slidesPerView={4.5}
                    slidesPerGroup={4}
                    slidesOffsetBefore={16}
                    slidesOffsetAfter={16}
                    breakpoints={{
                        768: {
                            slidesPerView: 4.6,
                            slidesPerGroup: 4,
                            spaceBetween: 10,
                        },

                        1024: {
                            slidesPerView: 5.6,
                            slidesPerGroup: 5,
                            spaceBetween: 10,
                        },

                        1210: {
                            slidesPerView: 8.3,
                            slidesPerGroup: 8,
                        },

                        1920: {
                            slidesPerView: 10.3,
                            slidesPerGroup: 10,
                        },
                    }}>
                    {data.map((e) => (
                        <SwiperSlide key={e._id}>
                            <DoctorCard
                                _id={e._id}
                                key={e._id}
                                avatar={e.avatar}
                                rank={e.specialization}
                                data={`${e.lastName} ${
                                    e.firstName?.slice(0, 1).toUpperCase() + '.'
                                }${e.surname?.slice(0, 1).toUpperCase()}`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}
