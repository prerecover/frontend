import { FC } from 'react';
import { TNetView } from '@/shared/types/Admin/shared/cells/Net';
import { EnNetType } from '@/shared/types/Admin/shared/entities/NetType';

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
