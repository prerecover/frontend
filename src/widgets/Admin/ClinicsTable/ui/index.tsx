'use client';
import { FC, HTMLAttributes } from 'react';
import { EnTableTypes, MainTable } from '@/segments/Admin/MainTable';
import { cn } from '@/lib/utils';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import {
  addCellsSelector,
  cellsSelector,
  updateAddCellSetter,
  updateCellSetter,
  useClinicsStore,
} from '@/shared/store/Admin/useClinicsStore';
import { returnViewComponent } from '../lib/returnViewComponent';
import { returnAddComponent } from '../lib/returnAddComponent';
import { returnEditComponent } from '../lib/returnEditComponent';
import { EnCellTypes } from '@/shared/types/Admin/shared/Entities/CellTypes';
import { SCHEMA } from '../model/validation-schema';
import { TInputs } from '../types/Inputs';

interface Props extends HTMLAttributes<HTMLTableElement> {}

const ClinicsTable: FC<Props> = ({ className, ...props }) => {
  const cells = useClinicsStore(cellsSelector);
  const addCells = useClinicsStore(addCellsSelector);
  const updateAddCell = useClinicsStore(updateAddCellSetter);
  const updateCell = useClinicsStore(updateCellSetter);

  return (
    <div className={cn('overflow-auto grow scroll-main-x', className)}>
      <MainTable<EnTableTypes.clinics, EnModes.view, TInputs>
        validationSchema={SCHEMA}
        onFormSubmit={(data) => {}}
        bodyItems={[...addCells, ...cells].map(
          ({ id, data, mode }, cellIndex) => {
            let actionCellTypeIndex;
            data.find(({ cellType }, index) => {
              if (cellType === EnCellTypes.action) {
                actionCellTypeIndex = index;
                return true;
              }
            });

            if (mode === EnModes.view)
              return {
                render: data.map(({ cellType, data }) => {
                  return {
                    node: returnViewComponent({
                      cellType,
                      mode,
                      data,
                      id,
                      cellIndex,
                    }),
                    cellClassName:
                      cellType === EnCellTypes.has
                        ? '[&>div]:overflow-visible'
                        : undefined,
                  };
                }),
                id,
                formSubmitCellIndex: actionCellTypeIndex,
              };
            else if (mode === EnModes.add) {
              return {
                render: data.map(({ cellType, data }, cellIndex) => {
                  return {
                    node: returnAddComponent({
                      cellType,
                      mode,
                      data,
                      id,
                      cellIndex,
                      updateFunc: updateAddCell,
                    }),
                    cellClassName:
                      cellType === EnCellTypes.has
                        ? '[&>div]:overflow-visible'
                        : undefined,
                  };
                }),
                id,
                formSubmitCellIndex: actionCellTypeIndex,
              };
            } else if (mode === EnModes.edit) {
              return {
                render: data.map(({ cellType, data }, cellIndex) => {
                  return {
                    node: returnEditComponent({
                      cellType,
                      mode,
                      data,
                      id,
                      cellIndex,
                      updateFunc: updateCell,
                    }),
                    cellClassName:
                      cellType === EnCellTypes.has
                        ? '[&>div]:overflow-visible'
                        : undefined,
                  };
                }),
                id,
                formSubmitCellIndex: actionCellTypeIndex,
              };
            }

            throw new Error(`Некорректный mode для ClinicsTable. Был получен ${mode}. Поле mode может быть только следующими данными: cellType:
		| EnModes.view
		| EnModes.edit
		| EnModes.add`);
          }
        )}
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
