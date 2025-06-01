import { FC } from 'react';
import { TViewData } from '../../types/Data';
import { ADMIN_ROUTES } from '@/shared/utils/paths';
import { Link } from 'lucide-react';

interface Props {
  data: TViewData;
}

const View: FC<Props> = ({ data }) => {
  return (
    <p>
      {data.length ? (
        data.map((props, index) => {
          if (props.isSelected) {
            return `${props.data.name}${index + 1 === data.length ? '' : ','} `;
          }
          return null;
        })
      ) : (
        <Link
          href={ADMIN_ROUTES.ADMIN.CLINICS.SERVICES('1').INDEX}
          className="text-blue"
        >
          Добавить
        </Link>
      )}
    </p>
  );
};

export { View };
