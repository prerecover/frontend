import { EnTableTypes } from '@/segments/Admin/MainTable';
import { ADD_SERVICES_CELL_BASE_STRUCTURE } from '@/shared/constants/Admin/AddBaseCells/services';
import { TAddBody } from '@/shared/types/Admin/Services/Bodies/Add';
import { TViewEditBody } from '@/shared/types/Admin/Services/Bodies/ViewEdit';
import { TServicesDataStructure } from '@/shared/types/Admin/services/data-structure';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { TUpdateFuncParams } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { create } from 'zustand';

interface State {
  addCells: TAddBody;
  cells: TViewEditBody;

  addAddCell_S: () => void;
  removeAddCell_S: (params: { id: TServicesDataStructure['id'] }) => void;
  addCell_S: (data: TViewEditBody) => void;
  toggleCellMode_S: (params: { id: TServicesDataStructure['id'] }) => void;
  removeCell_S: (params: { id: TServicesDataStructure['id'] }) => void;
  updateCell_S: <T>(
    params: TUpdateFuncParams<T, EnTableTypes.services>
  ) => void;
  updateAddCell_S: <T>(
    params: TUpdateFuncParams<T, EnTableTypes.services>
  ) => void;
}

export const useServicesStore = create<State>()((set, get) => ({
  addCells: [],
  cells: [],
  addAddCell_S: () => {
    set(({ addCells }) => {
      return {
        addCells: [
          ADD_SERVICES_CELL_BASE_STRUCTURE(
            `add-cell-id-${addCells.length - 1}`
          ),
          ...addCells,
        ],
      };
    });
  },
  removeAddCell_S: ({ id }) => {
    set(({ addCells }) => {
      return {
        addCells: addCells.filter((props) => props.id !== id),
      };
    });
  },
  addCell_S: (data) => {
    set(({ cells }) => {
      return {
        cells: [...cells, ...data],
      };
    });
  },
  toggleCellMode_S: ({ id }) => {
    set(({ cells }) => {
      return {
        cells: cells.map((props) => {
          if (props.id === id) {
            const newMode =
              props.mode === EnModes.edit ? EnModes.view : EnModes.edit;

            return {
              ...props,
              mode: newMode,
            };
          }
          return props;
        }),
      };
    });
  },
  removeCell_S: ({ id }) => {
    set(({ cells }) => {
      return {
        cells: cells.filter((props) => props.id !== id),
      };
    });
  },
  updateAddCell_S: ({ cellIndex, data, id }) => {
    set(({ addCells }) => {
      return {
        addCells: addCells.map((props) => {
          if (props.id === id) {
            let newData;

            if (props.data.length - 1 <= cellIndex) {
              newData = {
                ...props,
                data: props.data.map((currentData, index) => {
                  if (index === cellIndex) {
                    return data;
                  }
                  return currentData;
                }),
              };
            }

            return newData || props;
          }
          return props;
        }),
      };
    });
  },
  updateCell_S: ({ cellIndex, data, id }) => {
    set(({ cells }) => {
      return {
        cells: cells.map((props) => {
          if (props.id === id) {
            let newData;

            if (props.data.length - 1 <= cellIndex) {
              newData = {
                ...props,
                data: props.data.map((currentData, index) => {
                  if (index === cellIndex) {
                    return data;
                  }
                  return currentData;
                }),
              };
            }

            return newData || props;
          }
          return props;
        }),
      };
    });
  },
}));

export const addCellsSelector = (state: State) => state.addCells;
export const cellsSelector = (state: State) => state.cells;

export const addAddCellSetter = (state: State) => state.addAddCell_S;
export const removeAddCellSetter = (state: State) => state.removeAddCell_S;
export const updateAddCellSetter = (state: State) => state.updateAddCell_S;

export const addCellSetter = (state: State) => state.addCell_S;
export const removeCellSetter = (state: State) => state.removeCell_S;
export const changeCellModeSetter = (state: State) => state.toggleCellMode_S;
export const updateCellSetter = (state: State) => state.updateCell_S;
