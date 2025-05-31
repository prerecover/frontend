import { FC } from 'react';
import { TLinkView } from '@/shared/types/Admin/shared/Cells/Link';
import { TData } from '..';
import Link from 'next/link';

interface Props {
  data: TLinkView<TData>;
}

const View: FC<Props> = ({ data }) => {
  return (
    <Link href={data.href} className="text-blue">
      {data.content.qnt || 'Выбрать'}
    </Link>
  );
};

export { View };
