'use client';
import { FC, HTMLAttributes } from 'react';
import { EnBodyType, EnMode, MainTable } from '@/segments/Admin/MainTable';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ViewActionDropdown } from './ViewActionDropdown';
import { InlineCell } from '@/entities/Admin/InlineCell';
import { HasCell } from '@/entities/Admin/HasCell';
import { InlineAreaCell } from '@/entities/Admin/InlineAreaCell';
import {
  cellsSelector,
  useClinicStore,
} from '@/shared/store/Admin/clinicStore';

interface Props extends HTMLAttributes<HTMLTableElement> {}

const ClinicsTable: FC<Props> = ({ className, ...props }) => {
  const cells = useClinicStore(cellsSelector);

  return (
    <div className={cn('overflow-auto grow scroll-main-x', className)}>
      <MainTable
        bodyItems={cells.map(({ id, data }) => {
          return data.map(({ data, type }) => {
            const MODE = EnMode.edit;

            switch (type) {
              case EnBodyType.inline:
                return {
                  children: <InlineCell mode={MODE}>{data}</InlineCell>,
                  mode: MODE,
                };
              case EnBodyType.inlineArea:
                return {
                  children: <InlineAreaCell mode={MODE}>{data}</InlineAreaCell>,
                  mode: MODE,
                };
              case EnBodyType.has:
                return {
                  children: <HasCell children={null} mode={MODE} />,
                  mode: MODE,
                  className: '[&>div]:overflow-visible',
                };
              case EnBodyType.link:
                return {
                  children: (
                    <Link
                      href={data.href}
                      className="text-base font-normal text-blue"
                    >
                      {data.content}
                    </Link>
                  ),
                  mode: MODE,
                };
              case EnBodyType.action:
                return { children: <ViewActionDropdown />, mode: MODE };
              default:
                return null;
            }
          });
        })}
        headItems={[
          'Название',
          'Тип учреждения',
          'Начало работы',
          'Площадь, м²',
          'Телефон',
          'Телефон для\nотправки отчета в тг',
          'Страна',
          'Город',
          'Адрес',
          'Количество этажей',
          'Компьютер',
          'Интернет',
          'Дни и время работы',
          'Категорий',
          'Всего медиафайлов',
          'Фото клиники',
          'Язык клиники',
          'Лифт',
          'Всего услуг',
          'Всего врачей',
          'Сеть клиник',
          'Действия',
        ]}
        {...props}
      />
    </div>
  );
};

export { ClinicsTable };
