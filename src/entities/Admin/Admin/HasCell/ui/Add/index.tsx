import { FC } from 'react';
import { THasAdd } from '@/shared/types/Admin/shared/cells/Has';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Props {
  data: THasAdd;
}

const buttonCls =
  'w-12 h-14 p-0 hover:bg-white-100 duration-150 flex items-center';

const Add: FC<Props> = ({ data }) => {
  return (
    <div className="flex rounded-xl shadow-mainShadow">
      <Button
        variant="ghost"
        className={cn(
          'relative before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:h-[35px] before:w-[1px] before:bg-white-100',
          buttonCls
        )}
      >
        <Image src="/assets/true-mark.svg" alt="" width={24} height={24} />
      </Button>
      <Button variant="ghost" className={buttonCls}>
        <Image src="/assets/false-mark.svg" alt="" width={24} height={24} />
      </Button>
    </div>
  );
};

export { Add };
