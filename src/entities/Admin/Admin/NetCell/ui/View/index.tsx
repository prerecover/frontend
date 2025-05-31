import { FC } from 'react';
import { TNetView } from '@/shared/types/Admin/shared/Cells/Net';
import { EnNetType } from '@/shared/types/Admin/shared/Entities/NetType';

interface Props {
  data: TNetView;
}

const View: FC<Props> = ({ data }) => {
  return (
    <p>
      {data === EnNetType.offline
        ? 'Оффлайн'
        : data === EnNetType.online
          ? 'Онлайн'
          : null}
    </p>
  );
};

export { View };
