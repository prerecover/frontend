import { EnBodyType, EnMode } from '@/segments/Admin/MainTable';
import { TTableDataItem } from '@/shared/types/Admin/shared/Tables';
import { ADMIN_ROUTES } from '@/shared/utils/paths';

export const TABLE_DATA: TTableDataItem[] = [
  {
    id: 1,
    mode: EnMode.view,
    data: [
      {
        description: 'Название',
        type: EnBodyType.inline,
        data: 'Хелликс',
      },
      {
        description: 'Тип учреждения',
        type: EnBodyType.inline,
        data: 'Клиника',
      },
      {
        description: 'Начало работы',
        type: EnBodyType.inline,
        data: 'Август 2012 г.',
      },
      {
        description: 'Площадь, м²',
        type: EnBodyType.inline,
        data: 36,
      },
      {
        description: 'Телефон',
        type: EnBodyType.inline,
        data: '+ 7 (999) 03-20-911',
      },
      {
        description: 'Телефон для\nотправки отчета в тг',
        type: EnBodyType.inline,
        data: '+ 7 (999) 03-20-911',
      },
      {
        description: 'Страна',
        type: EnBodyType.inline,
        data: 'Палестина',
      },
      {
        description: 'Город',
        type: EnBodyType.inline,
        data: 'Абу-Даби',
      },
      {
        description: 'Адрес',
        type: EnBodyType.inlineArea,
        data: 'ул: Чурки 12',
      },
      {
        description: 'Количество этажей',
        type: EnBodyType.inline,
        data: 12,
      },
      {
        description: 'Компьютер',
        type: EnBodyType.has,
        data: false,
      },
      {
        description: 'Интернет',
        type: EnBodyType.has,
        data: true,
      },
      {
        description: 'Дни и время работы',
        type: EnBodyType.inlineArea,
        data: 'пн 8:00 -17:00\nсб-вс 8:00 -14:00',
      },
      {
        description: 'Категорий',
        type: EnBodyType.inline,
        data: 3,
      },
      {
        description: 'Всего медиафайлов',
        type: EnBodyType.inline,
        data: 24,
      },
      {
        description: 'Фото клиники',
        type: EnBodyType.link,
        data: {
          href: '#',
          content: 4,
        },
      },
      {
        description: 'Язык клиники',
        type: EnBodyType.inlineArea,
        data: 'Английский Русский',
      },
      {
        description: 'Лифт',
        type: EnBodyType.has,
        data: true,
      },
      {
        description: 'Всего услуг',
        type: EnBodyType.link,
        data: {
          href: ADMIN_ROUTES.ADMIN.CLINICS.SERVICES('test').INDEX,
          content: 5,
        },
      },
      {
        description: 'Всего врачей',
        type: EnBodyType.link,
        data: {
          href: ADMIN_ROUTES.ADMIN.CLINICS.DOCTORS('test').INDEX,
          content: 5,
        },
      },
      {
        description: 'Сеть клиник',
        type: EnBodyType.link,
        data: {
          href: ADMIN_ROUTES.ADMIN.CLINICS.CLINICS_NET('test').INDEX,
          content: 5,
        },
      },
      {
        description: 'Действия',
        type: EnBodyType.action,
        data: null,
      },
    ],
  },
];
