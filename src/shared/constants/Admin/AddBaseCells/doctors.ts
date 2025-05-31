import { TAddBody } from '@/shared/types/Admin/Doctors/Bodies/Add';
import { EnMultiselectTypes } from '@/shared/types/Admin/Doctors/FloatCellTypes/Multiselect';
import { EnMultiselectSearchTypes } from '@/shared/types/Admin/Doctors/FloatCellTypes/MultiselectSearch';
import { TDoctorsDataStructure } from '@/shared/types/Admin/Doctors/data-structure';
import { EnWorkDays } from '@/shared/types/Admin/Doctors/Entities/WorkDays';
import { EnCellTypes } from '@/shared/types/Admin/shared/Entities/CellTypes';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';

export const ADD_DOCTORS_CELL_BASE_STRUCTURE: (
  newId: TDoctorsDataStructure['id']
) => TAddBody[0] = (newId) => {
  return {
    id: newId,
    mode: EnModes.add,
    data: [
      {
        // Врач
        cellType: EnCellTypes.inline,
        data: null,
      },
      {
        // Специальность
        cellType: EnCellTypes.inline,
        data: null,
      },
      {
        // Онлайн/Офлайн
        cellType: EnCellTypes.net,
        data: null,
      },
      {
        // Опыт
        cellType: EnCellTypes.inlineArea,
        data: null,
      },
      {
        // Дни работы
        cellType: EnMultiselectTypes.workDays,
        data: [
          {
            isSelected: null,
            value: EnWorkDays.Monday,
            data: 'Понедельник',
          },
          {
            isSelected: null,
            value: EnWorkDays.Tuesday,
            data: 'Вторник',
          },
          {
            isSelected: null,
            value: EnWorkDays.Wednesday,
            data: 'Среда',
          },
          {
            isSelected: null,
            value: EnWorkDays.Thursday,
            data: 'Четверг',
          },
          {
            isSelected: null,
            value: EnWorkDays.Friday,
            data: 'Пятница',
          },
          {
            isSelected: null,
            value: EnWorkDays.Sunday,
            data: 'Суббота',
          },
          {
            isSelected: null,
            value: EnWorkDays.Saturday,
            data: 'Воскресенье',
          },
        ],
      },
      {
        // Время работы
        cellType: EnCellTypes.inline,
        data: null,
      },
      ////////////////////////////////////
      {
        // Медиафайлов
        cellType: EnCellTypes.inline,
        data: null,
      },
      ////////////////////////////////////
      {
        // Услуги
        cellType: EnMultiselectSearchTypes.services,
        data: [
          {
            data: {
              category: 'Консультация',
              name: 'Оценка услуги',
            },
            isSelected: null,
            value: '1',
          },
          {
            data: {
              category: 'Консультация',
              name: 'Мамаграма максима',
            },
            isSelected: null,
            value: '2',
          },
          {
            data: {
              category: 'Консультация',
              name: 'Колоноскапия Темура',
            },
            isSelected: null,
            value: '3',
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
