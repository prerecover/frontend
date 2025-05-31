import { cn } from '@/lib/utils';
import Image from 'next/image';
import { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const UiAdminChangesConfirmPlaque: FC<Props> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[calc(100%+14px)] py-2 px-3 rounded-xl shadow-mainShadow bg-white-100 animate-scale-fade transform-gpu',
        className
      )}
      {...props}
    >
      <Image
        src="/assets/confirmation-checkmark.svg"
        width={42}
        height={42}
        className="mx-auto"
        alt=""
      />
      <p className="text-lg font-medium text-center leading-[112%]">
        Изменения
        <br />
        сохранены
      </p>
    </div>
  );
};

export { UiAdminChangesConfirmPlaque };
