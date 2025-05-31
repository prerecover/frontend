'use client';
import { TAccumulatorAdd } from '@/shared/types/Admin/shared/Cells/Accumulator';
import { TData } from '../../types/Data';

interface Props {
  data: TAccumulatorAdd<TData>;
}

const Add = ({}: Props) => {
  return <p>-</p>;
};

export { Add };
