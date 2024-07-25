import { PropsWithClassName, PropsWithSize } from "@/shared/types";
import { FC } from "react";

export const WifiIcon: FC<PropsWithClassName<PropsWithSize>> = ({
  className,
  width = 24,
  height = 24,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5 12.5498C6.97656 10.9035 9.46761 10.002 12.04 10.002C14.6124 10.002 17.1034 10.9035 19.08 12.5498"
        stroke="#262626"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.41992 9.00126C4.34234 6.42522 8.10422 5.00391 11.9999 5.00391C15.8956 5.00391 19.6575 6.42522 22.5799 9.00126"
        stroke="#262626"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.53003 16.1087C9.54523 15.3875 10.7597 15 12.005 15C13.2504 15 14.4648 15.3875 15.48 16.1087"
        stroke="#262626"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 20H12.0096"
        stroke="#262626"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
