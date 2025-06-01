import { FC } from 'react';
import { TViewData } from '../../types/Data';
import Link from 'next/link';
import { ADMIN_ROUTES } from '@/shared/utils/paths';

interface Props {
  data: TViewData;
}

const View: FC<Props> = ({ data }) => {
  let selectedIndex = 0;

  return (
    <p>
      {data.length ? (
        data.map((props, index) => {
          if (props.isSelected) {
            selectedIndex++;
            return `${props.data.name}${selectedIndex + 1 === data.length ? '' : ','} `;
          }
          return null;
        })
      ) : (
        <Link
          href={ADMIN_ROUTES.ADMIN.CLINICS.DOCTORS('1').INDEX}
          className="text-blue"
        >
          Добавить
        </Link>
      )}
    </p>
  );
};

export { View };
