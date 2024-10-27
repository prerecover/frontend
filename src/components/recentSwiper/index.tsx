'use client';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';
import { SliderHeader } from '../sliderHeader';
import 'swiper/css';
import { Search } from '@/features/SearchBlock';
import DoctorSlideCard from '@/entities/Doctor/DoctorSlideCard';
import ClinicSlideCard from '@/entities/Clinic/ClinicSlideCard';
import ServiceSlideCard from '@/entities/Service/ServiceSlideCard';
export default function RecentSlider({ data }: { data: Search }) {
    const swiperRef = useRef<SwiperRef>(null);
    const [isLoading, setIsLoaging] = useState(false);
    useEffect(() => setIsLoaging(true), []);
    if (!isLoading)
        return (
            <>
                <SliderHeader swiperRef={swiperRef} title='Добавились недавно:' withArrows={true} />
            </>
        );

    return (
        <>
            <SliderHeader swiperRef={swiperRef} title='Добавились недавно:' withArrows={true} />
            <div className='my-0 mx-[-16px] mb-4'>
                <Swiper
                    ref={swiperRef}
                    spaceBetween={1}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    slidesOffsetBefore={1}
                    slidesOffsetAfter={1}
                    breakpoints={{
                        300: {
                            slidesPerView: 1.1,
                            slidesPerGroup: 0.4,
                        },
                        768: {
                            slidesPerView: 2.2,
                            slidesPerGroup: 2,
                        },

                        1024: {
                            slidesPerView: 3.4,
                            slidesPerGroup: 3,
                        },

                        1920: {
                            slidesPerView: 4.5,
                            slidesPerGroup: 3.5,
                        },
                    }}>
                    {data.services.reverse().map((e) => (
                        <>
                            <SwiperSlide key={e._id}>
                                <ServiceSlideCard service={e} />
                            </SwiperSlide>
                        </>
                    ))}
                    {data.doctors.map((e) => (
                        <>
                            <SwiperSlide key={e._id}>
                                <DoctorSlideCard doctor={e} />
                            </SwiperSlide>
                        </>
                    ))}
                    {data.clinics.reverse().map((e) => (
                        <>
                            <SwiperSlide key={e._id}>
                                <ClinicSlideCard clinic={e} />
                            </SwiperSlide>
                        </>
                    ))}
                </Swiper>
            </div>
        </>
    );
}
