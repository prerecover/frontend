import { FC } from 'react';
import { THasView } from '@/shared/types/Admin/shared/cells/Has';
import Image from 'next/image';

interface Props {
  data: THasView;
}

const View: FC<Props> = ({ data }) => {
  return (
    <Image
      src={`/assets/${data ? 'true' : 'false'}-mark.svg`}
      alt=""
      width={24}
      height={24}
    />
  );
};

export { View };
