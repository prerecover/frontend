import { PropsWithClassName, PropsWithSize } from "@/shared/types";
import { FC } from "react";

export const ArrTopIcon: FC<PropsWithClassName<PropsWithSize>> = ({
  className,
  width = 16,
  height = 16,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M8 12.6663V3.33301"
        stroke="#00CC5E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.3335 7.99967L8.00016 3.33301L12.6668 7.99967"
        stroke="#00CC5E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
