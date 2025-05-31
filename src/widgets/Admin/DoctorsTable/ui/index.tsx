'use client';
import { FC, HTMLAttributes } from 'react';
import { EnTableTypes, MainTable } from '@/segments/Admin/MainTable';
import { cn } from '@/lib/utils';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import {
  addCellsSelector,
  cellsSelector,
  getAddItemDataGetter,
  getItemDataGetter,
  updateAddCellSetter,
  updateCellSetter,
  useDoctorsStore,
} from '@/shared/store/Admin/useDoctorsStore';
import { returnViewComponent } from '../lib/returnViewComponent';
import { returnAddComponent } from '../lib/returnAddComponent';
import { returnEditComponent } from '../lib/returnEditComponent';
import { EnCellTypes } from '@/shared/types/Admin/shared/Entities/CellTypes';
import { SCHEMA } from '../model/validation-schema';
import { TInputs } from '../types/Inputs';

interface Props extends HTMLAttributes<HTMLTableElement> {}

const DoctorsTable: FC<Props> = ({ className, ...props }) => {
  const cells = useDoctorsStore(cellsSelector);
  const addCells = useDoctorsStore(addCellsSelector);
  const updateAddCell = useDoctorsStore(updateAddCellSetter);
  const updateCell = useDoctorsStore(updateCellSetter);
  const getItem = useDoctorsStore(getItemDataGetter);
  const getAddItem = useDoctorsStore(getAddItemDataGetter);

  return (
    <div className={cn('overflow-auto grow scroll-main-x', className)}>
      <MainTable<EnTableTypes.doctors, EnModes.view, TInputs>
        validationSchema={SCHEMA}
        onFormSubmit={(data) => {}}
        bodyItems={[...addCells, ...cells].map(
          ({ id, data, mode }, cellIndex) => {
            let rowData;

            if (mode === EnModes.add) {
              rowData = getAddItem(id);
            } else {
              rowData = getItem(id);
            }

            let actionCellTypeIndex;
            data.forEach(({ cellType }, index) => {
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
                      cellType === EnCellTypes.net
                        ? '[&>div]:overflow-visible relative'
                        : undefined,
                  };
                }),
                id,
                formSubmitCellIndex: actionCellTypeIndex,
                data: rowData.data,
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
                      cellType === EnCellTypes.net
                        ? '[&>div]:overflow-visible relative'
                        : undefined,
                  };
                }),
                id,
                formSubmitCellIndex: actionCellTypeIndex,
                data: rowData.data,
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
                      cellType === EnCellTypes.net
                        ? '[&>div]:overflow-visible relative'
                        : undefined,
                  };
                }),
                id,
                formSubmitCellIndex: actionCellTypeIndex,
                data: rowData.data,
              };
            }

            throw new Error(`Некорректный mode для DoctorsTable. Был получен ${mode}. Поле mode может быть только следующими данными: cellType:
		| EnModes.view
		| EnModes.edit
		| EnModes.add`);
          }
        )}
        headItems={[
          'Услуга',
          'Категория',
          'Онлайн/Офлайн',
          'Описание',
          'Цена',
          'Как\nоплачивать услугу?',
          'Длительность',
          'Врачи',
          'Медиафайлов',
          'Действия',
        ]}
        {...props}
      />
    </div>
  );
};

export { DoctorsTable };
