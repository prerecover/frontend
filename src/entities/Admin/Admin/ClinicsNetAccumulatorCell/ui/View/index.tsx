'use client';

import { TAccumulatorView } from '@/shared/types/Admin/shared/cells/Accumulator';
import { TData } from '../../types/Data';
import { DropdownMenu } from '@/components/ui/dropdown-menu';
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Props {
  data: TAccumulatorView<TData>;
}

const View = ({ data }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full">
        <p className="text-blue">{data.length || 'Выбрать'}</p>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="py-2 border-none bg-white-background p-0 rounded-none rounded-br-xl rounded-bl-xl w-[400px]"
        align="start"
      >
        {data.map((props) => (
          <div
            key={props.id}
            className="flex items-center justify-between py-2 px-4"
          >
            <div>
              <p className="font-medium">{props.name}</p>
              <p className="text-sm text-gray-600">{props.address}</p>
            </div>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { View };
