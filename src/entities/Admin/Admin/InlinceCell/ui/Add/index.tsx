import { FC } from 'react';
import { TInlineAdd } from '@/shared/types/Admin/shared/cells/Inline';

interface Props {
  data: TInlineAdd;
}

const Add: FC<Props> = ({ data }) => {
  return <p>{data}</p>;
};

export { Add };
