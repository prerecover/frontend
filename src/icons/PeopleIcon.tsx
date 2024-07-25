import { PropsWithClassName, PropsWithSize } from "@/shared/types";
import { FC } from "react";

export const PeopleIcon: FC<PropsWithClassName<PropsWithSize>> = ({
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
    >
      <g clipPath="url(#clip0_7259_105773)">
        <path
          d="M18.75 14.75C18.75 12.6768 16.7892 11 14.375 11C12.9444 11 11.673 11.5888 10.8745 12.5"
          stroke="#0064FA"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.375 9C15.7557 9 16.875 7.88071 16.875 6.5C16.875 5.11929 15.7557 4 14.375 4C12.9943 4 11.875 5.11929 11.875 6.5C11.875 7.88071 12.9943 9 14.375 9Z"
          stroke="#0064FA"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 18C15 14.6829 11.8626 12 8 12C4.13737 12 1 14.6829 1 18"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 10C10.2091 10 12 8.20914 12 6C12 3.79086 10.2091 2 8 2C5.79086 2 4 3.79086 4 6C4 8.20914 5.79086 10 8 10Z"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 18C15 14.6829 11.8626 12 8 12C4.13737 12 1 14.6829 1 18"
          stroke="#0064FA"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 10C10.2091 10 12 8.20914 12 6C12 3.79086 10.2091 2 8 2C5.79086 2 4 3.79086 4 6C4 8.20914 5.79086 10 8 10Z"
          stroke="#0064FA"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_7259_105773">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
