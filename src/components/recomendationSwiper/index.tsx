'use client';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';
import { SliderHeader } from '../sliderHeader';
import 'swiper/css';
import RecomendationCard from '@/entities/Recomendation/RecomendationCard';
import { ISearch } from '@/features/SearchBlock';
export default function RecomendationSwiper({ data }: { data: ISearch }) {
  const swiperRef = useRef<SwiperRef>(null);
  const onClickPrev = () => {
    if (!swiperRef.current) return;

    swiperRef.current.swiper.slidePrev();
  };

  const onClickNext = () => {
    if (!swiperRef.current) return;

    swiperRef.current.swiper.slideNext();
  };
  const [isLoading, setIsLoaging] = useState(false);
  useEffect(() => setIsLoaging(true), []);
  if (!isLoading)
    return (
      <>
        <SliderHeader swiperRef={swiperRef} title="" withArrows={true} />
      </>
    );

  return (
    <>
      <div className="desktop:mx-auto desktop:w-[1000px] relative flex">
        <svg
          style={{ transform: 'rotate(-180deg)' }}
          onClick={onClickPrev}
          className="cursor-pointer justify-center absolute top-0 bottom-0 my-auto"
          width="42"
          height="42"
          viewBox="0 0 6 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.757359 1.25736L5 5.5L0.757359 9.74264"
            stroke="#262626"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <Swiper
          ref={swiperRef}
          spaceBetween={1}
          slidesPerView={1}
          slidesPerGroup={1}
          className="mx-auto"
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
          slidesOffsetAfter={1}
        >
          <>
            <SwiperSlide>
              <RecomendationCard
                service={
                  data.services[
                    Math.floor(Math.random() * data.services.length)
                  ]
                }
                clinic={
                  data.clinics[Math.floor(Math.random() * data.clinics.length)]
                }
                doctor={
                  data.doctors[Math.floor(Math.random() * data.doctors.length)]
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <RecomendationCard
                service={
                  data.services[
                    Math.floor(Math.random() * data.services.length)
                  ]
                }
                clinic={
                  data.clinics[Math.floor(Math.random() * data.clinics.length)]
                }
                doctor={
                  data.doctors[Math.floor(Math.random() * data.doctors.length)]
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <RecomendationCard
                service={
                  data.services[
                    Math.floor(Math.random() * data.services.length)
                  ]
                }
                clinic={
                  data.clinics[Math.floor(Math.random() * data.clinics.length)]
                }
                doctor={
                  data.doctors[Math.floor(Math.random() * data.doctors.length)]
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <RecomendationCard
                service={
                  data.services[
                    Math.floor(Math.random() * data.services.length)
                  ]
                }
                clinic={
                  data.clinics[Math.floor(Math.random() * data.clinics.length)]
                }
                doctor={
                  data.doctors[Math.floor(Math.random() * data.doctors.length)]
                }
              />
            </SwiperSlide>
          </>
        </Swiper>
        <svg
          onClick={() => onClickNext()}
          width="42"
          height="42"
          className="cursor-pointer top-0 bottom-0 my-auto justify-center ml-[-40px]"
          viewBox="0 0 6 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.757359 1.25736L5 5.5L0.757359 9.74264"
            stroke="#262626"
            strokeWidth="0.5"
          />
        </svg>
      </div>
    </>
  );
}
