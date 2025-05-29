import { FC } from 'react';
import { TInlineEdit } from '@/shared/types/Admin/shared/cells/Inline';

interface Props {
  data: TInlineEdit;
}

const Edit: FC<Props> = ({ data }) => {
  return (
    <input
      defaultValue={data}
      className="w-full bg-[transparent] text-center"
    />
  );
};

export { Edit };
