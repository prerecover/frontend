'use client';
import { TNetEdit } from '@/shared/types/Admin/shared/cells/Net';
import { TCellDataUpdate } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { EnNetType } from '@/shared/types/Admin/shared/entities/NetType';

const buttonCls =
  'flex-1 h-14 p-0 hover:bg-white-100 duration-150 flex items-center font-normal';

interface Props<T extends EnTableTypes> extends TCellDataUpdate<T, EnNetType> {
  data: TNetEdit;
}

const Edit = <T extends EnTableTypes>({
  data,
  cellIndex,
  id,
  updateFunc,
}: Props<T>) => {
  const debounceUpdate = useDebounce((type: EnNetType) => {
    updateFunc({ cellIndex, data: type, id });
  }, 200);

  return (
    <div className="flex rounded-xl shadow-mainShadow bg-white-background w-[calc(100%+6px)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto">
      <Button
        variant="ghost"
        className={cn(
          'relative before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:h-[35px] before:w-[1px] before:bg-white-100 rounded-tr-none rounded-br-none',
          { ['bg-white-100']: data === EnNetType.online },
          buttonCls
        )}
        onClick={() => {
          debounceUpdate(EnNetType.online);
        }}
      >
        <p>Онлайн</p>
      </Button>
      <Button
        variant="ghost"
        className={cn(buttonCls, 'rounded-tl-none rounded-bl-none', {
          ['bg-white-100']: data === EnNetType.offline,
        })}
        onClick={() => {
          debounceUpdate(EnNetType.offline);
        }}
      >
        <p>Оффлайн</p>
      </Button>
    </div>
  );
};

export { Edit };
