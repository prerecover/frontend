import { FC, HTMLAttributes } from 'react';
import { EnBodyType, EnMode, MainTable } from '@/segments/Admin/MainTable';
import { cn } from '@/lib/utils';
import { TABLE_DATA } from '../constants/tableData';
import Image from 'next/image';
import Link from 'next/link';

interface Props extends HTMLAttributes<HTMLTableElement> {}

const ClinicsTable: FC<Props> = ({ className, ...props }) => {
  return (
    <div className={cn('overflow-auto grow scroll-main-x', className)}>
      <MainTable
        mode={EnMode.view}
        bodyItems={TABLE_DATA.map(({ id, data }) => {
          return data.map(({ data, type }) => {
            switch (type) {
              case EnBodyType.inline:
                return <p>{data}</p>;
              case EnBodyType.has:
                return (
                  <Image
                    src={`/assets/${data ? 'true-mark.svg' : 'false-mark.svg'}`}
                    alt={data ? 'Имеется' : 'Не оборудовано'}
                    width={24}
                    height={24}
                  />
                );
              case EnBodyType.link:
                return <Link href={data.href}>{data.content}</Link>;
              case EnBodyType.viewAction:
                return <p>Выбрать</p>;
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
