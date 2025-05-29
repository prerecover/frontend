import { FC } from 'react';
import { THasEdit } from '@/shared/types/Admin/shared/cells/Has';

interface Props {
  data: THasEdit;
}

const Edit: FC<Props> = ({ data }) => {
  return <input className="w-full bg-[transparent] text-center" />;
};

export { Edit };
