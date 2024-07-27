import { Text } from '@/components/ui/text';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Link from 'next/link';
import PostMainStats from './Stats/index';
import { ILike } from '@/shared/types/like.interface';
import { ISaved } from '@/shared/types/saved.interface';
import Image from 'next/image';

export default function PostMain({
    _id,
    title,
    text,
    imgs,
    videos,
    like,
    saved,
}: {
    _id: string;
    title: string;
    text: string;
    imgs: string[];
    videos: string[];
    like?: ILike;
    saved?: ISaved;
}) {
    return (
        <div className='w-full flex flex-col gap-3 rounded-[20px] border-[1px] border-solid border-blue-100 p-4 bg-white mt-4'>
            <div className='flex items-center gap-3'>
                <div className='flex flex-col gap-[2px]'>{title}</div>
            </div>
            <Text type='p' className='text-[14px] ' fz={500}>
                {text}
            </Text>
            {(imgs.length > 0 || videos.length > 0) && (
                <Swiper spaceBetween={10} autoplay={{ delay: 3000, disableOnInteraction: false }} modules={[Autoplay]}>
                    {imgs.map((el, idx) => (
                        <SwiperSlide key={idx}>
                            <Image
                                className='w-full object-cover rounded-[12px] max-h-[320px]'
                                width={400}
                                height={320}
                                src={el}
                                alt='post-img'
                                key={idx}
                            />
                        </SwiperSlide>
                    ))}

                    {videos.map((el, idx) => (
                        <SwiperSlide key={idx}>
                            <video className='' src={el} key={idx} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
            <div className='flex-between gap-4 flex-wrap'>
                <PostMainStats like={like} saved={saved} newsId={_id} />
                <Link href={`posts/${_id}`} className='flex'>
                    <span className='text-blue'>Подробнее</span>
                    <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='mt-[3px]'>
                        <path
                            d='M7.92893 2.92893L15 10L7.92893 17.0711'
                            stroke='#0064FA'
                            strokeWidth='1.25'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
