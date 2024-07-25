import { PropsWithClassName, PropsWithSize } from "@/shared/types";
import { FC } from "react";

export const PaymentsIcon: FC<PropsWithClassName<PropsWithSize>> = ({
  className,
  width = 20,
  height = 20,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="11.5"
        cy="8.5"
        r="5.875"
        stroke="#0064FA"
        strokeWidth="1.25"
      />
      <circle
        cx="8.5"
        cy="11.5"
        r="5.875"
        fill="white"
        stroke="#0064FA"
        strokeWidth="1.25"
      />
      <path
        d="M6.5 14.0667H8.5M10.5 8.93333H8.5M8.5 8.93333H7.66667C7.02233 8.93333 6.5 9.45567 6.5 10.1V10.1C6.5 10.7443 7.02233 11.2667 7.66667 11.2667H9.1C9.8732 11.2667 10.5 11.8935 10.5 12.6667V12.6667C10.5 13.4399 9.8732 14.0667 9.1 14.0667H8.5M8.5 8.93333V8M8.5 14.0667V15"
        stroke="#0064FA"
        strokeWidth="1.25"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
