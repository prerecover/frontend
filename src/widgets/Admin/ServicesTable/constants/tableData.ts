import { EnBodyType, EnMode } from '@/segments/Admin/MainTable';
import { TTableDataItem } from '@/shared/types/Admin/Tables';
import { ADMIN_ROUTES } from '@/shared/utils/paths';
import { EnPayServiceType } from '../types/PayService';

export const TABLE_DATA: TTableDataItem[] = [
  {
    id: 1,
    mode: EnMode.view,
    data: [
      {
        description: 'Услуга',
        type: EnBodyType.inline,
        data: 'ЛОР',
      },
      {
        description: 'Категория',
        type: EnBodyType.inline,
        data: 'Консультация',
      },
      {
        description: 'Онлайн/Офлайн',
        type: EnBodyType.consultationType,
        data: 'online',
      },
      {
        description: 'Описание',
        type: EnBodyType.inlineArea,
        data: 'Покупаешь мозги и все дальше легче будет жить....',
      },
      {
        description: 'Цена',
        type: EnBodyType.inline,
        data: 'от 18 000 до 22 0000',
      },
      {
        description: 'Как\nоплачивать услугу?',
        type: EnBodyType.multiselect,
        data: [
          {
            content: 'Онлайн',
            value: EnPayServiceType.online,
            isChecked: false,
          },
          {
            content: 'В кассу',
            value: EnPayServiceType.cashier,
            isChecked: false,
          },
          {
            content: 'Врачу',
            value: EnPayServiceType.doctor,
            isChecked: false,
          },
          {
            content: 'Оплата в рассрочку',
            value: EnPayServiceType.installmentsPlan,
            isChecked: false,
          },
          {
            content: 'Оплата в кредит',
            value: EnPayServiceType.credit,
            isChecked: false,
          },
        ],
      },
      {
        description: 'Длительность',
        type: EnBodyType.inline,
        data: '2 часа 30 минут',
      },
      {
        description: 'Врачи',
        type: EnBodyType.multiselectSearch,
        data: [
          {
            content: {
              name: 'Сергей Сергеев',
              speciality: 'Невролог',
            },
            value: 1,
            isChecked: false,
          },
          {
            content: {
              name: 'Максим Максимов',
              speciality: 'Уролог',
            },
            value: 2,
            isChecked: false,
          },
          {
            content: {
              name: 'Темур Темуров',
              speciality: 'Хирург',
            },
            value: 3,
            isChecked: false,
          },
        ],
      },
      {
        description: 'Медиафайлов',
        type: EnBodyType.link,
        data: {
          content: '2',
          placeholder: 'Загрузить',
          href: '#',
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
