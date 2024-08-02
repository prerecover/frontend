import { Text } from '@/components/ui/text';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import PostMainStats from './Stats/index';
import { ILike } from '@/shared/types/like.interface';
import { ISaved } from '@/shared/types/saved.interface';
import Image from 'next/image';
import { IClinic } from '@/shared/types/clinic.interface';
import ClinicInfo from './clinicInfo';
import { INewsImage } from '@/shared/types/newsImage.interface';
import { INewsVideo } from '@/shared/types/newsVideo.interface';

export default function PostMainCard({
    _id,
    title,
    text,
    imgs,
    videos,
    like,
    saved,
    clinic,
}: {
    _id: string;
    title: string;
    text: string;
    imgs: INewsImage[];
    videos: INewsVideo[];
    like?: ILike;
    saved?: ISaved;
    clinic?: IClinic;
}) {
    return (
        <div className='w-full flex flex-col gap-3 rounded-[20px] border-[1px] border-solid border-blue-100 p-4 bg-white mt-4'>
            <ClinicInfo clinic={clinic} />
            <div className='flex items-center gap-3'>
                <Text type='h2' className='font-semibold text-[16px]'>
                    {title}
                </Text>
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
                                src={el.image}
                                alt='post-img'
                                key={idx}
                            />
                        </SwiperSlide>
                    ))}

                    {videos.map((el, idx) => (
                        <SwiperSlide key={idx}>
                            <video className='' src={el.video} key={idx} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
            <div className='flex gap-4 flex-wrap'>
                <PostMainStats like={like} saved={saved} newsId={_id} />
            </div>
        </div>
    );
}
