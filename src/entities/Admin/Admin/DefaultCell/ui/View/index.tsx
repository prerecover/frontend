import { FC } from 'react';
import { TDefaultView } from '@/shared/types/Admin/shared/Cells/Default';

interface Props {
  data: TDefaultView;
}

const View: FC<Props> = ({ data }) => {
  return <p>{data || 0}</p>;
};

export { View };
