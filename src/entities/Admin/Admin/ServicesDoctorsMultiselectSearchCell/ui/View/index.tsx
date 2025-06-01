import { FC, useState, useEffect } from 'react';
import { TViewData } from '../../types/Data';
import Link from 'next/link';
import { ADMIN_ROUTES } from '@/shared/utils/paths';

interface Props {
  data: TViewData;
}

const View: FC<Props> = ({ data }) => {
  const [selectedItems, setSelectedItems] = useState<{
    visible: number;
    isRender: boolean;
  }>({ isRender: false, visible: 0 });

  useEffect(() => {
    if (!data.length) return;

    let visibleCount = 0;
    let isLastItemSelected = false;

    for (let i = 0; i < data.length; i++) {
      if (data[i].isSelected) {
        visibleCount++;
        if (i === data.length - 1) {
          isLastItemSelected = true;
        }
      } else if (i === data.length - 1) {
        isLastItemSelected = true;
      }
    }

    setSelectedItems({
      visible: visibleCount,
      isRender: isLastItemSelected,
    });
  }, [data]);

  console.log(selectedItems);

  return (
    <p>
      {data.length ? (
        data.map((props, index) => {
          if (props.isSelected) {
            return `${props.data.name}${index + 1 === data.length ? '' : ', '} `;
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
      {selectedItems.isRender && selectedItems.visible <= 0
        ? 'Нет данных'
        : null}
    </p>
  );
};

export { View };
