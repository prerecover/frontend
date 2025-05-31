'use client';
import { TAccumulatorAdd } from '@/shared/types/Admin/shared/cells/Accumulator';
import { TData } from '../../types/Data';

interface Props {
  data: TAccumulatorAdd<TData>;
}

const Add = ({}: Props) => {
  return <p>-</p>;
};

export { Add };
