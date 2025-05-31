'use client';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { TCellDataUpdate } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { TAccumulatorEdit } from '@/shared/types/Admin/shared/cells/Accumulator';
import { TData } from '../../types/Data';
import { DropdownMenu } from '@/components/ui/dropdown-menu';
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { TClinicsNetAccumulatorData } from '../..';

interface Props
  extends TCellDataUpdate<EnTableTypes.clinics, TClinicsNetAccumulatorData[]> {
  data: TAccumulatorEdit<TData>;
}

const Edit = ({ data, cellIndex, updateFunc, id }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full ">
        <p className="text-blue">{(data || []).length || 'Выбрать'}</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="py-2 border-none bg-white-background p-0 rounded-none rounded-br-xl rounded-bl-xl w-[400px]">
        <Button
          variant="ghost"
          className="rounded-none pb-1 text-blue w-full h-auto font-normal"
        >
          <p className="py-3.5">Добавить +</p>
        </Button>
        {(data || []).map((props) => (
          <div
            className="flex items-center justify-between p-3 hover:bg-blue-100 cursor-pointer duration-100"
            key={props.id}
          >
            <div>
              <p className="font-medium">{props.name}</p>
              <p className="text-sm mt-1.5">{props.address}</p>
            </div>
            <button
              onClick={() => {
                updateFunc({
                  cellIndex,
                  id,
                  data: (data ? data : []).filter(({ id }) => props.id !== id),
                });
              }}
            >
              <Trash2 className="text-grey-600" />
            </button>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { Edit };
