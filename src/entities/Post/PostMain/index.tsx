import { Text } from "@/components/ui/text";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { LikeIcon, SaveIcon, TelegramIcon } from "@/icons";
import Link from "next/link";

export default function PostMain({ _id, title, text, imgs, videos }: {
    _id: string;
    title: string;
    text: string;
    imgs: string[];
    videos: string[];
}) {
    return (

        <div className="w-full flex flex-col gap-3 rounded-[20px] border-[1px] border-solid border-blue-100 p-4 bg-white mt-4">

            <div className="flex items-center gap-3">
                <div className="flex flex-col gap-[2px]">
                    {title}
                </div>
            </div>
            <Text type="p" className="text-[14px] " fz={500}>{text}</Text>
            {(imgs.length > 0 || videos.length > 0) && (
                <Swiper
                    spaceBetween={10}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Autoplay]}
                >
                    {imgs.map((el, idx) => (
                        <SwiperSlide key={idx}>
                            <img className="w-full object-cover rounded-[12px] max-h-[320px]" src={el} alt="post-img" key={idx} />
                        </SwiperSlide>
                    ))}

                    {videos.map((el, idx) => (
                        <SwiperSlide key={idx}>
                            <video className="" src={el} key={idx} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
            <div className="flex-between gap-4 flex-wrap">
                <div className="flex items-center gap-[6px]">
                    <div className="w-[38px] h-[38px] flex-center rounded-[12px] bg-grey-200 cursor-pointer slider:w-[40px] slider:h-[40px]">
                        <SaveIcon />
                    </div>
                    <div className="w-[38px] h-[38px] flex-center rounded-[12px] bg-grey-200 cursor-pointer slider:w-[40px] slider:h-[40px]">
                        <TelegramIcon />
                    </div>
                    <div className="w-[38px] h-[38px] flex-center rounded-[12px] bg-grey-200 cursor-pointer slider:w-[40px] slider:h-[40px]">
                        <LikeIcon />
                    </div>
                </div>
                <Link href={`posts/${_id}`} className="flex">
                    <span className="text-blue">Подробнее</span>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mt-[3px]"
                    >
                        <path
                            d="M7.92893 2.92893L15 10L7.92893 17.0711"
                            stroke="#0064FA"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                </Link>
            </div>
        </div>
    )
}
