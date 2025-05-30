import { FC } from 'react';
import { TAccumulatorView } from '@/shared/types/Admin/shared/cells/Accumulator';

interface Props {
  data: TAccumulatorView;
}

const View: FC<Props> = ({ data }) => {
  return <p>{data}</p>;
};

export { View };
