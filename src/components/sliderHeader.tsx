import { FC, MutableRefObject } from "react";
import { SwiperRef } from "swiper/react";

type Props = {
    title?: string;
    swiperRef: MutableRefObject<SwiperRef | null>;
    withArrows?: boolean;
};

export const SliderHeader: FC<Props> = ({ title, swiperRef, withArrows }) => {
    const onClickPrev = () => {
        if (!swiperRef.current) return;

        swiperRef.current.swiper.slidePrev();
    };

    const onClickNext = () => {
        if (!swiperRef.current) return;

        swiperRef.current.swiper.slideNext();
    };

    return (
        <div className="flex-between gap-4 mb-3 slider:mb-[10px]">
            {title && <h3 className="text-[12px] font-semibold text-grey-700 slider:text-[14px] slider:font-medium ">{title}</h3>}

            {withArrows && (
                <div className="flex items-center gap-[10px]">
                    <svg
                        style={{ transform: "rotate(-180deg)" }}
                        onClick={onClickPrev}
                        className="cursor-pointer"
                        width="6"
                        height="11"
                        viewBox="0 0 6 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.757359 1.25736L5 5.5L0.757359 9.74264"
                            stroke="#262626"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <svg
                        onClick={onClickNext}
                        width="6"
                        height="11"
                        className="cursor-pointer"
                        viewBox="0 0 6 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.757359 1.25736L5 5.5L0.757359 9.74264"
                            stroke="#262626"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            )}
        </div>
    );
};
