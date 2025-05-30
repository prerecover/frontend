import { FC } from 'react';
import { TLinkView } from '@/shared/types/Admin/shared/cells/Link';
import { TData } from '..';

interface Props {
  data: TLinkView<TData>;
}

const View: FC<Props> = ({ data }) => {
  return <p>{data.content.qnt}</p>;
};

export { View };
