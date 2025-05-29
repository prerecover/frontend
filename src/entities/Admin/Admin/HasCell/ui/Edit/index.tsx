'use client';
import { FC } from 'react';
import { THasEdit } from '@/shared/types/Admin/shared/cells/Has';
import { TCellDataUpdate } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const buttonCls =
  'w-12 h-14 p-0 hover:bg-white-100 duration-150 flex items-center';

interface Props<M extends EnModes, T extends EnTableTypes>
  extends TCellDataUpdate<M, T, boolean> {
  data: THasEdit;
}

const Edit = <M extends EnModes, T extends EnTableTypes>({
  data,
  cellIndex,
  id,
  updateFunc,
}: Props<M, T>) => {
  const debounceUpdate = useDebounce((value: boolean) => {
    updateFunc({ cellIndex, data: value, id });
  }, 200);

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

export { Edit };
