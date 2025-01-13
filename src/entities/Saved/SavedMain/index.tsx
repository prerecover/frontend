'use client';
import { Text } from '@/components/ui/text';
import ClinicSavedCard from '@/entities/Clinic/ClinicSavedCard';
import DoctorSavedCard from '@/entities/Doctor/DoctorSavedCard';
import ServiceSavedCard from '@/entities/Service/ServiceSavedCard';
import { ISaved } from '@/shared/types/saved.interface';
import { gql, useQuery } from '@apollo/client';
import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

const SAVED_QUERY = gql(`
query SavedAll {
    savedAll {
        _id
        clinic {
            _id
            avatar
            city
            title
            country{
                title
            }
        }
        doctor {
            _id
            avatar
            firstName
            lastName
            specialization
            surname
        }
        service {
            _id
            img
            price
            title
            clinic {
                _id
                title
            }
        }
    }
}
    `);

export default function SavedMain({ token }: { token: string }) {
    const { data, refetch } = useQuery(SAVED_QUERY, { context: { headers: { Authorization: `Bearer ${token}` } } });
    const [saved, setSaved] = useState<ISaved[]>([]);
    const swiperRef = useRef<SwiperRef>(null);

    useEffect(() => {
        if (data) {
            setSaved(data.savedAll);
        }
    }, [data]);

    useEffect(() => {
        refetch();
    });

    return (
        <div className='flex flex-col gap-4'>
            <Text fw={500} fz={20}>
                Профили
            </Text>
            <div className='bg-white mt-3 rounded-[12px] flex flex-col gap-3 px-4 py-[20px]'>
                <Text fw={500} fz={16} className={saved.filter((pred) => pred.doctor).length == 0 ? 'hidden' : ''}>
                    Врачи
                </Text>
                <Swiper
                    ref={swiperRef}
                    spaceBetween={1}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    className='mx-auto'
                    slidesOffsetBefore={1}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                        768: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },

                        1024: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },

                        1920: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                    }}
                    slidesOffsetAfter={1}>
                    <>
                        {saved
                            .filter((pred) => pred.doctor)
                            .map((el) => (
                                <SwiperSlide key={el._id}>
                                    {el.doctor && <DoctorSavedCard doctor={el.doctor} />}
                                </SwiperSlide>
                            ))}
                    </>
                </Swiper>
                <Text fw={500} fz={16} className={saved.filter((pred) => pred.clinic).length == 0 ? 'hidden' : ''}>
                    Клиники
                </Text>
                <Swiper
                    ref={swiperRef}
                    spaceBetween={1}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    className='mx-auto'
                    slidesOffsetBefore={1}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                        768: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },

                        1024: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },

                        1920: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                    }}
                    slidesOffsetAfter={1}>
                    <>
                        {saved
                            .filter((pred) => pred.clinic)
                            .map((el) => (
                                <SwiperSlide key={el._id}>
                                    {el.clinic && <ClinicSavedCard clinic={el.clinic} />}
                                </SwiperSlide>
                            ))}
                    </>
                </Text>
                <Text fw={500} fz={16} className={saved.filter((pred) => pred.service).length == 0 ? 'hidden' : ''}>
                    Услуги
                </Text>
                <Swiper
                    ref={swiperRef}
                    spaceBetween={1}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    className='mx-auto'
                    slidesOffsetBefore={1}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                        768: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },

                        1024: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },

                        1920: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                    }}
                    slidesOffsetAfter={1}>
                    <>
                        {saved
                            .filter((pred) => pred.service)
                            .map((el) => (
                                <SwiperSlide key={el._id}>
                                    {el.service && <ServiceSavedCard service={el.service} />}
                                </SwiperSlide>
                            ))}
                    </>
                </Swiper>
            </div>
        </div>
    );
}
