import { FC } from 'react';
import { TInlineView } from '@/shared/types/Admin/shared/Cells/Inline';

interface Props {
  data: TInlineView;
}

const View: FC<Props> = ({ data }) => {
  return <p>{data}</p>;
};

export { View };
