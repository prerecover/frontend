'use client';
import { FC, HTMLAttributes } from 'react';
import { EnTableTypes, MainTable } from '@/segments/Admin/MainTable';
import { cn } from '@/lib/utils';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import {
  addCellsSelector,
  cellsSelector,
  useClinicsStore,
} from '@/shared/store/Admin/useClinicsStore';

interface Props extends HTMLAttributes<HTMLTableElement> {}

const ClinicsTable: FC<Props> = ({ className, ...props }) => {
  const cells = useClinicsStore(cellsSelector);
  const addCells = useClinicsStore(addCellsSelector);

  return (
    <div className={cn('overflow-auto grow scroll-main-x', className)}>
      <MainTable<EnTableTypes.clinics, EnModes.view>
        bodyItems={[...addCells, ...cells].map(({ id, data, mode }) => {
          if (mode === EnModes.view)
            return {
              id,
              data: data.map(({ cellType, data }) => {}),
            };
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
