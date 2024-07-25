import { PropsWithClassName, PropsWithSize } from "@/shared/types";
import { FC } from "react";

export const LinkArrIcon: FC<PropsWithClassName<PropsWithSize>> = ({
  className,
  width = 14,
  height = 14,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M2.8335 11.1654L11.1668 2.83203"
        stroke="#262626"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.8335 2.83203H11.1668V11.1654"
        stroke="#262626"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
