import { FC } from 'react';
import { TInlineEdit } from '@/shared/types/Admin/shared/cells/Inline';

interface Props {
  data: TInlineEdit;
}

const Edit: FC<Props> = ({ data }) => {
  return <p>{data}</p>;
};

export { Edit };
