import { FC } from 'react';
import { TLinkView } from '@/shared/types/Admin/shared/cells/Link';
import { TData } from '..';

interface Props {
  data: TLinkView<TData>;
}

const View: FC<Props> = ({ data }) => {
  return <p className="text-blue">{data.content.qnt || 'Выбрать'}</p>;
};

export { View };
