import { PropsWithClassName, PropsWithSize } from "@/shared/types";
import { FC } from "react";

export const HarwareIcon: FC<PropsWithClassName<PropsWithSize>> = ({
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
        d="M20 21.5H11.5M11.5 21.5H5.19672C5.06735 21.5 4.93698 21.4733 4.83716 21.391C4.48748 21.1026 4 20.3682 4 19C4 18.1157 4.39095 17.3292 5 16.7269M11.5 21.5C12.0318 20.082 11.998 18.9153 11.6437 18M11.6437 18C10.9987 16.3333 9.29099 15.5 8 15.5C6.88425 15.5 5.7685 15.9668 5 16.7269M11.6437 18L17.7689 14.7308M5 16.7269C3.83333 14.3179 3 9.1 9 7.5M9 7.5L10.9404 10.8608C11.1705 11.2594 11.6802 11.396 12.0787 11.1659L13.727 10.2142M9 7.5L8.0016 5.77073C7.77148 5.37215 7.90805 4.86249 8.30662 4.63237L11.2783 2.91667C11.6769 2.68655 12.1865 2.82311 12.4167 3.22169L15.3554 8.31181C15.5856 8.71038 15.449 9.22004 15.0504 9.45016L13.727 10.2142M13.727 10.2142L14.7048 11.9079"
        stroke="#262626"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
