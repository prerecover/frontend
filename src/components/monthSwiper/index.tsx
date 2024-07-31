import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { useEffect, useState } from 'react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { months } from '@/shared/utils/calendar';
import { LeftArrow } from './left-arrow';
import { RightArrow } from './right-arrow';
import { MonthBlock } from './month';

export default function MonthSwiper({
    activeMonth,
    setActiveMonth,
}: {
    activeMonth: any;
    setActiveMonth: React.Dispatch<React.SetStateAction<any>>;
}) {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState<boolean>(false);
    const handlePrev = () => {
        console.log('call');
        swiper && swiper.slidePrev();
    };

    const handleNext = () => {
        if (swiper && !isEnd) {
            swiper.slideNext();
        }
    };

    useEffect(() => {
        const handleReachEnd = () => {
            setIsEnd(true);
        };

        const handleSlideChange = () => {
            setIsEnd(false);
        };

        swiper && swiper.on('reachEnd', handleReachEnd);
        swiper && swiper.on('slideChange', handleSlideChange);

        return () => {
            swiper && swiper.off('reachEnd', handleReachEnd);
            swiper && swiper.off('slideChange', handleSlideChange);
        };
    }, [swiper]);
    return (
        <>
            <div className='rounded-t-[12px] flex flex-col'>
                <div className='flex-center items-center'>
                    <LeftArrow onClick={handlePrev} />
                    <Swiper
                        spaceBetween={8}
                        initialSlide={new Date().getMonth()}
                        slidesPerView={4}
                        navigation={{ nextEl: '#nextArrow', prevEl: '#prevArrow' }}
                        modules={[Navigation]}
                        style={{ overflow: 'hidden' }}
                        slidesPerGroup={4}>
                        {months.map((item) => (
                            <SwiperSlide key={item}>
                                <MonthBlock item={item} activeMonth={activeMonth} setActiveMonth={setActiveMonth} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <RightArrow onClick={handleNext} />
                </div>
                <div className='h-[1px] w-full bg-[#C8DBF6] opacity-45 my-5'></div>
            </div>
        </>
    );
}
