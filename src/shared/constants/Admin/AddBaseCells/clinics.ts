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
      },
      {
        // Тип учреждения
        cellType: EnCellTypes.inline,
        data: null,
      },
      {
        // Начало работы
        cellType: EnCellTypes.inline,
        data: null,
      },
      {
        // Площадь, м²
        cellType: EnCellTypes.inline,
        data: null,
      },
      {
        // Телефон
        cellType: EnCellTypes.inline,
        data: null,
      },
      {
        // Телефон для отправки отчета в тг
        cellType: EnCellTypes.inline,
        data: null,
      },
      {
        // Страна
        cellType: EnCellTypes.inline,
        data: null,
      },
      {
        // Город
        cellType: EnCellTypes.inline,
        data: null,
      },
      {
        // Адрес
        cellType: EnCellTypes.inlineArea,
        data: null,
      },
      {
        // Количество этажей
        cellType: EnCellTypes.inline,
        data: null,
      },
      {
        // Компьютер
        cellType: EnCellTypes.has,
        data: null,
      },
      {
        // Интернет
        cellType: EnCellTypes.has,
        data: null,
      },
      {
        // Дни и время работы
        cellType: EnCellTypes.inlineArea,
        data: null,
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
      },
      {
        // Лифт
        cellType: EnCellTypes.has,
        data: null,
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
