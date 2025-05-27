import { devtools } from 'zustand/middleware';
import { EnBodyType, EnMode, TViewBodyItem } from '@/segments/Admin/MainTable';
import { create } from 'zustand';
import { TTableDataItem } from '@/shared/types/Admin/Tables';
import { TABLE_DATA } from '@/widgets/Admin/ServicesTable/constants/tableData';
import { EnPayServiceType } from '@/widgets/Admin/ServicesTable/types/PayService';

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

export const useServicesStore = create<State>()(
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
                  description: 'Услуга',
                  type: EnBodyType.inline,
                  data: null,
                },
                {
                  description: 'Категория',
                  type: EnBodyType.inline,
                  data: null,
                },
                {
                  description: 'Онлайн/Офлайн',
                  type: EnBodyType.consultationType,
                  data: null,
                },
                {
                  description: 'Описание',
                  type: EnBodyType.inlineArea,
                  data: null,
                },
                {
                  description: 'Цена',
                  type: EnBodyType.inline,
                  data: null,
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
                  data: null,
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
                    content: null,
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
