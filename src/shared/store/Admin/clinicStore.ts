import { devtools } from 'zustand/middleware';
import { EnBodyType, EnMode, TViewBodyItem } from '@/segments/Admin/MainTable';
import { TTableDataItem } from '@/widgets/Admin/ClinicsTable';
import { TABLE_DATA } from '@/widgets/Admin/ClinicsTable/constants/tableData';
import { create } from 'zustand';

export type TCell =
  | {
      id: TTableDataItem['id'];
      mode: EnMode.view;
      data: TViewBodyItem<EnMode.view>[];
    }
  | {
      id: TTableDataItem['id'];
      mode: EnMode.edit;
      data: TViewBodyItem<EnMode.edit>[];
    };
export type TCellAdd = {
  id: TTableDataItem['id'];
  mode: EnMode.add;
  data: TViewBodyItem<EnMode.add>[];
};

interface State {
  cells: TCell[];
  cellsAdd: TCellAdd[];

  switchMode: (params: {
    id: TTableDataItem['id'];
    mode: EnMode.edit | EnMode.view;
  }) => void;
  addCellAdd: () => void;
  deleteCellAdd: (params: { id: TTableDataItem['id'] }) => void;
}

export const useClinicStore = create<State>()(
  devtools((set, get) => ({
    cells: TABLE_DATA,
    cellsAdd: [],
    addCellAdd: () => {
      set(({ cellsAdd }) => {
        return {
          cellsAdd: [
            {
              id: cellsAdd.length ? `add-id-${cellsAdd.length}` : `add-id-${0}`,
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
            ...cellsAdd,
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
                id: props.id,
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
    deleteCellAdd: ({ id }) => {
      set(({ cellsAdd }) => {
        return {
          cellsAdd: cellsAdd.filter((props) => {
            return id !== props.id;
          }),
        };
      });
    },
  }))
);

export const cellsSelector = (state: State) => state.cells;
export const cellsAddSelector = (state: State) => state.cellsAdd;
export const switchModeSelector = (state: State) => state.switchMode;
export const addCellAddSelector = (state: State) => state.addCellAdd;
export const deleteCellAddSelector = (state: State) => state.deleteCellAdd;
