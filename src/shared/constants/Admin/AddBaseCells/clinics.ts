import { TAddBody } from '@/shared/types/Admin/Clinics/Bodies/Add';
import { EnAccumulator } from '@/shared/types/Admin/Clinics/FloatCellTypes/Accumulator';
import { EnLinks } from '@/shared/types/Admin/Clinics/FloatCellTypes/Links';
import { EnMultiselectTypes } from '@/shared/types/Admin/Clinics/FloatCellTypes/Multiselect';
import { TClinicsDataStructure } from '@/shared/types/Admin/Clinics/data-structure';
import { EnLanguages } from '@/shared/types/Admin/Clinics/entities/Languages';
import { EnCellTypes } from '@/shared/types/Admin/shared/Entities/CellTypes';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';

export const ADD_CLINICS_CELL_BASE_STRUCTURE: (
  newId: TClinicsDataStructure['id']
) => TAddBody[0] = (newId) => {
  return {
    id: newId,
    mode: EnModes.add,
    data: [
      {
        // Название
        cellType: EnCellTypes.inline,
        data: null,
        fieldName: 'name',
      },
      {
        // Тип учреждения
        cellType: EnCellTypes.inline,
        data: null,
        fieldName: 'type',
      },
      {
        // Начало работы
        cellType: EnCellTypes.inline,
        data: null,
        fieldName: 'clinicWorkBegin',
      },
      {
        // Площадь, м²
        cellType: EnCellTypes.inline,
        data: null,
        fieldName: 'square',
      },
      {
        // Телефон
        cellType: EnCellTypes.inline,
        data: null,
        fieldName: 'phone',
      },
      {
        // Телефон для отправки отчета в тг
        cellType: EnCellTypes.inline,
        data: null,
        fieldName: 'reportPhone',
      },
      {
        // Страна
        cellType: EnCellTypes.inline,
        data: null,
        fieldName: 'country',
      },
      {
        // Город
        cellType: EnCellTypes.inline,
        data: null,
        fieldName: 'city',
      },
      {
        // Адрес
        cellType: EnCellTypes.inlineArea,
        data: null,
        fieldName: 'address',
      },
      {
        // Количество этажей
        cellType: EnCellTypes.inline,
        data: null,
        fieldName: 'floorCount',
      },
      {
        // Компьютер
        cellType: EnCellTypes.has,
        data: null,
        fieldName: 'hasComputer',
      },
      {
        // Интернет
        cellType: EnCellTypes.has,
        data: null,
        fieldName: 'hasInternet',
      },
      {
        // Дни и время работы
        cellType: EnCellTypes.inlineArea,
        data: null,
        fieldName: 'workTime',
      },
      {
        // Категорий
        cellType: EnCellTypes.inline,
        data: null,
      },
      ////////////////////////////////
      {
        // Всего медиафайлов
        cellType: EnCellTypes.inline,
        data: null,
      },
      {
        // Фото клиники
        cellType: EnCellTypes.inline,
        data: null,
      },
      ////////////////////////////////
      {
        // Язык клиники
        cellType: EnMultiselectTypes.language,
        data: [
          { data: 'Русский', isSelected: null, value: EnLanguages.ru },
          { data: 'Узбекский', isSelected: null, value: EnLanguages.uz },
          { data: 'Английский', isSelected: null, value: EnLanguages.en },
        ],
        fieldName: 'languages',
      },
      {
        // Лифт
        cellType: EnCellTypes.has,
        data: null,
        fieldName: 'hasElevator',
      },
      {
        // Всего услуг
        cellType: EnLinks.services,
        data: null,
      },
      {
        // Всего врачей
        cellType: EnLinks.doctors,
        data: null,
      },
      {
        // Сеть клиник
        cellType: EnAccumulator.clinicsNet,
        data: [
          {
            address: 'Ташкент, Юнус-Абад 4',
            id: '1',
            name: 'Клиника Хелликс',
          },
          {
            address: 'Ташкент, Юнус-Абад 4',
            id: '2',
            name: 'Клиника Хелликс',
          },
          {
            address: 'Клиника Хелликс',
            id: '3',
            name: 'Ташкент, Юнус-Абад 4',
          },
        ],
      },
      {
        // Действия
        cellType: EnCellTypes.action,
        data: null,
      },
    ],
  };
};
