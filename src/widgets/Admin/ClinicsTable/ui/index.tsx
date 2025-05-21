import { FC, HTMLAttributes } from 'react';
import { EnMode, MainTable } from '@/segments/Admin/MainTable';
import { cn } from '@/lib/utils';

interface Props extends HTMLAttributes<HTMLTableElement> {}

const ClinicsTable: FC<Props> = ({ className, ...props }) => {
  return (
    <div className={cn('overflow-auto grow', className)}>
      <MainTable
        mode={EnMode.view}
        bodyItems={[['1', '2', '3']]}
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
