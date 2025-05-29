import { FC } from 'react';
import { TInlineAdd } from '@/shared/types/Admin/shared/cells/Inline';

interface Props {
  data: TInlineAdd;
}

const Add: FC<Props> = ({ data }) => {
  return <input className="w-full bg-[transparent] text-center" />;
};

export { Add };
