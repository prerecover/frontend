import { FC } from 'react';
import { TInlineAreaView } from '@/shared/types/Admin/shared/cells/InlineArea';

interface Props {
  data: TInlineAreaView;
}

const View: FC<Props> = ({ data }) => {
  return <p>{data}</p>;
};

export { View };
