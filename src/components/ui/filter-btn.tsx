import { PropsWithClassName } from '@/shared/types';
import { FC } from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import controller from '/public/assets/controller.svg';
import blueController from '/public/assets/blue-controller.svg';
import { Text } from './text';

export interface FilterBtnProps {
  onClick: () => void;
  variant?: 'default' | 'outline';
}

export const FilterBtn: FC<PropsWithClassName<FilterBtnProps>> = ({
  className,
  onClick,
  variant = 'default',
}) => {
  return (
    <>
      <Button
        className={cn(
          className,
          'py-[14px] px-[13px] rounded-[12px] w-fit mx-auto',
          variant == 'outline' &&
            'text-blue border-blue border-solid border-[1px] font-medium'
        )}
        color="#FFFFFF"
        onClick={onClick}
      >
        <div className="flex gap-[5px]">
          <Image
            src={variant == 'outline' ? blueController : controller}
            alt="controller"
            className="mx-auto"
            width={20}
            height={20}
          />
          <Text className="reverse_slider:hidden pr-3">Фильтры</Text>
        </div>
      </Button>
    </>
  );
};
