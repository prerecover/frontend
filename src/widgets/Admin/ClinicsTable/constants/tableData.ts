import { EnBodyType, TViewBodyItem } from '@/segments/Admin/MainTable';

export const TABLE_DATA: { id: number; data: TViewBodyItem[] }[] = [
  {
    id: 1,
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
        data: '36',
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
        type: EnBodyType.inline,
        data: 'ул: Чурки 12',
      },
      {
        description: 'Количество этажей',
        type: EnBodyType.inline,
        data: '12',
      },
      {
        description: 'Компьютер',
        type: EnBodyType.has,
        data: true,
      },
      {
        description: 'Интернет',
        type: EnBodyType.has,
        data: true,
      },
      {
        description: 'Дни и время работы',
        type: EnBodyType.inline,
        data: 'пн 8:00 -17:00\nсб-вс 8:00 -14:00',
      },
      {
        description: 'Категорий',
        type: EnBodyType.inline,
        data: '3',
      },
      {
        description: 'Всего медиафайлов',
        type: EnBodyType.inline,
        data: '24',
      },
      {
        description: 'Фото клиники',
        type: EnBodyType.inline,
        data: '4',
      },
      {
        description: 'Язык клиники',
        type: EnBodyType.inline,
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
          href: '/admin',
          content: '5',
        },
      },
      {
        description: 'Всего врачей',
        type: EnBodyType.link,
        data: {
          href: '/admin',
          content: '5',
        },
      },
      {
        description: 'Сеть клиник',
        type: EnBodyType.link,
        data: {
          href: '/admin',
          content: '5',
        },
      },
      {
        description: 'Действия',
        type: EnBodyType.viewAction,
        data: null,
      },
    ],
  },
  {
    id: 1,
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
        data: '36',
      },
      {
        description: 'Телефон',
        type: EnBodyType.inline,
        data: '+ 7 (999) 03-20-911',
      },
      {
        description: 'Телефон для отправки отчета в тг',
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
        type: EnBodyType.inline,
        data: 'ул: Чурки 12',
      },
      {
        description: 'Количество этажей',
        type: EnBodyType.inline,
        data: '12',
      },
      {
        description: 'Компьютер',
        type: EnBodyType.has,
        data: false,
      },
      {
        description: 'Интернет',
        type: EnBodyType.has,
        data: false,
      },
      {
        description: 'Дни и время работы',
        type: EnBodyType.inline,
        data: 'пн 8:00 -17:00\nсб-вс 8:00 -14:00',
      },
      {
        description: 'Категорий',
        type: EnBodyType.inline,
        data: '3',
      },
      {
        description: 'Всего медиафайлов',
        type: EnBodyType.inline,
        data: '24',
      },
      {
        description: 'Фото клиники',
        type: EnBodyType.inline,
        data: '4',
      },
      {
        description: 'Язык клиники',
        type: EnBodyType.inline,
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
          href: '/admin',
          content: '5',
        },
      },
      {
        description: 'Всего врачей',
        type: EnBodyType.link,
        data: {
          href: '/admin',
          content: '5',
        },
      },
      {
        description: 'Сеть клиник',
        type: EnBodyType.link,
        data: {
          href: '/admin',
          content: '5',
        },
      },
      {
        description: 'Действия',
        type: EnBodyType.viewAction,
        data: null,
      },
    ],
  },
];
