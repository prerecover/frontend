import { TAddBody } from '@/shared/types/Admin/Services/Bodies/Add';
import { EnMultiselectTypes } from '@/shared/types/Admin/Services/FloatCellTypes/Multiselect';
import { EnMultiselectSearchTypes } from '@/shared/types/Admin/Services/FloatCellTypes/MultiselectSearch';
import { EnPayType } from '@/shared/types/Admin/services/entities/PayType';
import { EnCellTypes } from '@/shared/types/Admin/shared/Entities/CellTypes';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { TServicesDataStructure } from '@/shared/types/Admin/services/data-structure';

export const ADD_SERVICES_CELL_BASE_STRUCTURE: (
  newId: TServicesDataStructure['id']
) => TAddBody[0] = (newId) => {
  return {
    id: newId,
    mode: EnModes.add,
    data: [
      {
        // Услуга
        cellType: EnCellTypes.inline,
        data: null,
      },
      {
        // Категория
        cellType: EnCellTypes.inline,
        data: null,
      },
      {
        // Онлайн/Офлайн
        cellType: EnCellTypes.net,
        data: null,
      },
      {
        // Описание
        cellType: EnCellTypes.inlineArea,
        data: null,
      },
      {
        // Цена
        cellType: EnCellTypes.inlineArea,
        data: null,
      },
      {
        // Как оплачивать услугу?
        cellType: EnMultiselectTypes.payType,
        data: [
          {
            isSelected: null,
            value: EnPayType.online,
            data: 'Онлайн',
          },
          {
            isSelected: null,
            value: EnPayType.cashier,
            data: 'В кассу',
          },
          {
            isSelected: null,
            value: EnPayType.doctor,
            data: 'Доктору',
          },
          {
            isSelected: null,
            value: EnPayType.installments,
            data: 'В рассрочку',
          },
          {
            isSelected: null,
            value: EnPayType.credit,
            data: 'В кредит',
          },
        ],
      },
      {
        // Длительность
        cellType: EnCellTypes.inline,
        data: null,
      },
      {
        // Врачи
        cellType: EnMultiselectSearchTypes.doctors,
        data: [],
      },
      {
        // Медиафайлов
        cellType: EnCellTypes.inlineArea,
        data: null,
      },
      {
        // Действия
        cellType: EnCellTypes.action,
        data: null,
      },
    ],
  };
};
