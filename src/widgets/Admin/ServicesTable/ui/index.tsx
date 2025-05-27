'use client';
import { FC, HTMLAttributes } from 'react';
import { EnBodyType, EnMode, MainTable } from '@/segments/Admin/MainTable';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { InlineCell } from '@/entities/Admin/InlineCell';
import { InlineAreaCell } from '@/entities/Admin/InlineAreaCell';
import { AddActionDropdown } from '@/features/Admin/AddActionDropdown';
import { EditActionDropdown } from '@/features/Admin/EditActionDropdown';
import { ViewActionDropdown } from '@/features/Admin/ViewActionDropdown';
import {
  useServicesStore,
  cellsAddSelector,
  cellsSelector,
} from '@/shared/store/Admin/servicesStore';
import { ConsultationTypeCell } from '@/entities/Admin/ConsultationTypeCell';
import { MultiselectCell } from '@/entities/Admin/MultiselectCell';

interface Props extends HTMLAttributes<HTMLTableElement> {}

const ServicesTable: FC<Props> = ({ className, ...props }) => {
  const addCells = useServicesStore(cellsAddSelector);
  const cells = useServicesStore(cellsSelector);

  return (
    <div className={cn('overflow-auto grow scroll-main-x', className)}>
      <MainTable
        bodyItems={[...addCells, ...cells].map(({ id, data, mode }) => {
          return {
            id,
            data: data.map(({ data, type }) => {
              const MODE = mode;

              switch (type) {
                case EnBodyType.multiselect:
                  return {
                    children: <MultiselectCell></MultiselectCell>,
                    mode: MODE,
                  };
                case EnBodyType.inline:
                  return {
                    children: (
                      <ConsultationTypeCell mode={MODE}>
                        {data}
                      </ConsultationTypeCell>
                    ),
                    mode: MODE,
                  };
                case EnBodyType.inline:
                  return {
                    children: <InlineCell mode={MODE}>{data}</InlineCell>,
                    mode: MODE,
                  };
                case EnBodyType.inlineArea:
                  return {
                    children: (
                      <InlineAreaCell mode={MODE}>{data}</InlineAreaCell>
                    ),
                    mode: MODE,
                  };
                case EnBodyType.link:
                  return {
                    children: (
                      <Link
                        href={data.href}
                        className="text-base font-normal text-blue"
                      >
                        {data.content !== null ? data.content : 'Выбрать'}
                      </Link>
                    ),
                    mode: MODE,
                  };
                case EnBodyType.action:
                  if (mode === EnMode.view)
                    return {
                      children: <ViewActionDropdown id={id} />,
                      mode: MODE,
                    };
                  else if (mode === EnMode.edit)
                    return {
                      children: <EditActionDropdown id={id} />,
                      mode: MODE,
                    };
                  else if (mode === EnMode.add)
                    return {
                      children: <AddActionDropdown id={id} />,
                      mode: MODE,
                    };
                  else
                    throw new Error(
                      'Некорректный mode для поля "Действия" строки таблицы. Использовать enum EnMode для mode'
                    );
                default:
                  return null;
              }
            }),
          };
        })}
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

export { ServicesTable };
