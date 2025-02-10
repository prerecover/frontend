import { cn } from '@/lib/utils';
import { PropsWithClassName } from '@/shared/types';
import { FC } from 'react';
import { Text } from './text';

export const GraphCol: FC<PropsWithClassName> = ({ className }) => {
  return (
    <div
      className={
        (cn(className), 'flex flex-col gap-[15px] text-center items-center')
      }
    >
      <Text type="p" className="text-[14px]" fz={500}>
        345
      </Text>
      <div
        className={cn(
          `tablet:w-[43px] desktop:w-[61px] pc:w-[61px] mobile:w-[43px]   rounded-[7px] bg-blue h-[200px]`
        )}
      />
      <Text type="p" className="text-[14px]" fz={500}>
        0-25%
      </Text>
    </div>
  );
};
