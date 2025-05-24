import { EnBodyType, EnMode, TViewBodyItem } from '@/segments/Admin/MainTable';
import { TTableDataItem } from '@/widgets/Admin/ClinicsTable';
import { TABLE_DATA } from '@/widgets/Admin/ClinicsTable/constants/tableData';
import { create } from 'zustand';

export type TCell =
  | {
      id: number;
      mode: EnMode.view;
      data: TViewBodyItem<EnMode.view>[];
    }
  | {
      id: number;
      mode: EnMode.edit;
      data: TViewBodyItem<EnMode.edit>[];
    }
  | {
      id: number;
      mode: EnMode.add;
      data: TViewBodyItem<EnMode.add>[];
    };

interface State {
  cells: TCell[];

  switchMode: (params: {
    id: TTableDataItem['id'];
    mode: EnMode.edit | EnMode.view;
  }) => void;
  addCell: () => void;
  deleteCell: (params: { id: TTableDataItem['id'] }) => void;
}

export const useClinicStore = create<State>()((set, get) => ({
  cells: TABLE_DATA,
  addCell: () => {
    set(({ cells }) => {
      return {
        cells: [
          {
            id: cells[0].id - 1,
            mode: EnMode.add,
            data: [
              {
                description: 'Название',
                type: EnBodyType.inline,
                data: null,
              },
              {
                description: 'Тип учреждения',
                type: EnBodyType.inline,
                data: null,
              },
              {
                description: 'Начало работы',
                type: EnBodyType.inline,
                data: null,
              },
              {
                description: 'Площадь, м²',
                type: EnBodyType.inline,
                data: null,
              },
              {
                description: 'Телефон',
                type: EnBodyType.inline,
                data: null,
              },
              {
                description: 'Телефон для\nотправки отчета в тг',
                type: EnBodyType.inline,
                data: null,
              },
              {
                description: 'Страна',
                type: EnBodyType.inline,
                data: null,
              },
              {
                description: 'Город',
                type: EnBodyType.inline,
                data: null,
              },
              {
                description: 'Адрес',
                type: EnBodyType.inlineArea,
                data: null,
              },
              {
                description: 'Количество этажей',
                type: EnBodyType.inline,
                data: null,
              },
              {
                description: 'Компьютер',
                type: EnBodyType.has,
                data: null,
              },
              {
                description: 'Интернет',
                type: EnBodyType.has,
                data: null,
              },
              {
                description: 'Дни и время работы',
                type: EnBodyType.inlineArea,
                data: null,
              },
              {
                description: 'Категорий',
                type: EnBodyType.inline,
                data: null,
              },
              {
                description: 'Всего медиафайлов',
                type: EnBodyType.inline,
                data: null,
              },
              {
                description: 'Фото клиники',
                type: EnBodyType.link,
                data: {
                  content: null,
                  href: '#',
                },
              },
              {
                description: 'Язык клиники',
                type: EnBodyType.inlineArea,
                data: null,
              },
              {
                description: 'Лифт',
                type: EnBodyType.has,
                data: null,
              },
              {
                description: 'Всего услуг',
                type: EnBodyType.link,
                data: {
                  content: null,
                  href: '#',
                },
              },
              {
                description: 'Всего врачей',
                type: EnBodyType.link,
                data: {
                  content: null,
                  href: '#',
                },
              },
              {
                description: 'Сеть клиник',
                type: EnBodyType.link,
                data: {
                  content: null,
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
          ...cells,
        ],
      };
    });
  },
  switchMode: ({ mode, id }) => {
    // @ts-expect-error: TODO Сложная типизация
    set(({ cells }) => {
      return {
        cells: cells.map((props) => {
          if (props.id === id) {
            return {
              id: props.data,
              mode,
              data: props.data,
            };
          } else {
            return props;
          }
        }),
      };
    });
  },
  deleteCell: ({ id }) => {
    set(({ cells }) => {
      return {
        cells: cells.filter((props) => {
          return id !== props.id;
        }),
      };
    });
  },
}));

export const cellsSelector = (state: State) => state.cells;
export const switchModeSelector = (state: State) => state.switchMode;
export const addCellSelector = (state: State) => state.addCell;
export const deleteCellSelector = (state: State) => state.deleteCell;
