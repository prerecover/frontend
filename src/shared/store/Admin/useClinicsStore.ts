import { EnTableTypes } from '@/segments/Admin/MainTable';
import { ADD_CLINICS_CELL_BASE_STRUCTURE } from '@/shared/constants/Admin/AddBaseCells/clinics';
import { TAddBody } from '@/shared/types/Admin/Clinics/Bodies/Add';
import { TViewEditBody } from '@/shared/types/Admin/Clinics/Bodies/ViewEdit';
import { TClinicsDataStructure } from '@/shared/types/Admin/Clinics/data-structure';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { TBodyItemId } from '@/shared/types/Admin/shared/Utils/BodyItemId';
import { TCellFuncParams } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface State {
  addCells: TAddBody;
  cells: TViewEditBody;
  editableCells: TViewEditBody;

  addEditableCell_S: (params: { id: TClinicsDataStructure['id'] }) => void;
  removeEditableCell_S: (params: { id: TClinicsDataStructure['id'] }) => void;

  addAddCell_S: () => void;
  removeAddCell_S: (params: { id: TClinicsDataStructure['id'] }) => void;
  updateAddCell_S: <T>(
    params: TCellFuncParams<T, EnTableTypes.clinics>
  ) => void;
  getAddCellData_S: <T>(
    params: Omit<TCellFuncParams<T, EnTableTypes.clinics>, 'data'>
  ) => T | null;

  addCell_S: (data: TViewEditBody) => void;
  toggleCellMode_S: (params: { id: TClinicsDataStructure['id'] }) => void;
  removeCell_S: (params: { id: TClinicsDataStructure['id'] }) => void;
  updateCell_S: <T>(params: TCellFuncParams<T, EnTableTypes.clinics>) => void;
  getCellData_S: <T>(
    params: Omit<TCellFuncParams<T, EnTableTypes.clinics>, 'data'>
  ) => T | null;

  transformAddToView: (params: {
    id: TBodyItemId<EnModes.add, EnTableTypes.clinics>;
  }) => void;
  transformViewToEdit: (params: {
    id: TBodyItemId<EnModes.view, EnTableTypes.clinics>;
  }) => void;
  transformEditToViewSave: (params: {
    id: TBodyItemId<EnModes.edit, EnTableTypes.clinics>;
  }) => void;
  transformEditToViewCancel: (params: {
    id: TBodyItemId<EnModes.edit, EnTableTypes.clinics>;
  }) => void;
}

export const useClinicsStore = create<State>()(
  devtools((set, get) => ({
    addCells: [],
    cells: [],
    editableCells: [],
    addAddCell_S: () => {
      set(({ addCells }) => {
        return {
          addCells: [
            ADD_CLINICS_CELL_BASE_STRUCTURE(
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
    addEditableCell_S: ({ id }) => {
      set(({ editableCells, cells }) => {
        const editableCell = cells.find((props) => props.id === id);

        if (editableCell)
          return {
            editableCells: [...editableCells, editableCell],
          };
      });
    },
    removeEditableCell_S: ({ id }) => {
      set(({ editableCells }) => {
        return {
          editableCells: editableCells.filter((props) => props.id !== id),
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
          addCells: addCells.map((props, index) => {
            if (props.id === id) {
              let newData;

              if (props.data.length - 1 >= cellIndex) {
                newData = {
                  ...props,
                  data: props.data.map((props, index) => {
                    if (index === cellIndex) {
                      return { ...props, data };
                    }
                    return props;
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
          cells: cells.map((props, index) => {
            if (props.id === id) {
              let newData;

              if (props.data.length - 1 >= cellIndex) {
                newData = {
                  ...props,
                  data: props.data.map((props, index) => {
                    if (index === cellIndex) {
                      return { ...props, data };
                    }
                    return props;
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
    getAddCellData_S: <T>({ id, cellIndex }) => {
      const addCells = get().addCells;

      // @ts-ignore
      const result: { data: T } = addCells.find((props) => {
        if (props.id === id) {
          return props;
        }
      });
      return result.data[cellIndex];
    },
    getCellData_S: ({ id, cellIndex }) => {
      const addCells = get().cells;

      // @ts-ignore
      const result: { data: T } = addCells.find((props) => {
        if (props.id === id) {
          return props;
        }
      });
      return result.data[cellIndex];
    },
    transformAddToView: ({ id }) => {
      const removeAddCell = get().removeAddCell_S;

      set(({ cells, addCells }) => {
        const transformAddCell = addCells.find((props) => props.id === id);

        if (transformAddCell) {
          removeAddCell({ id });
          return {
            cells: [
              {
                ...transformAddCell,
                mode: EnModes.view,
                id: `added-${id}`,
              } as unknown as TViewEditBody[0],
              ...cells,
            ],
          };
        }
      });
    },
    transformViewToEdit: ({ id }) => {
      const addEditableCell = get().addEditableCell_S;

      set(({ cells }) => {
        addEditableCell({ id });
        return {
          cells: cells.map((props) => {
            if (props.id === id) {
              return { ...props, mode: EnModes.edit };
            }
            return props;
          }),
        };
      });
    },
    transformEditToViewSave: ({ id }) => {
      const removeEditableCell = get().removeEditableCell_S;

      set(({ cells }) => {
        return {
          cells: cells.map((props) => {
            if (props.id === id) {
              removeEditableCell({ id });
              return { ...props, mode: EnModes.view };
            }
            return props;
          }),
        };
      });
    },
    transformEditToViewCancel: ({ id }) => {
      const removeEditableCell = get().removeEditableCell_S;

      set(({ editableCells, cells }) => {
        const editableCell = editableCells.find((props) => props.id === id);

        return {
          cells: cells.map((props) => {
            if (props.id === id) {
              removeEditableCell({ id });
              return editableCell;
            }
            return props;
          }),
        };
      });
    },
  }))
);

export const addCellsSelector = (state: State) => state.addCells;
export const cellsSelector = (state: State) => state.cells;

export const addAddCellSetter = (state: State) => state.addAddCell_S;
export const removeAddCellSetter = (state: State) => state.removeAddCell_S;
export const updateAddCellSetter = (state: State) => state.updateAddCell_S;
export const getAddCellDataGetter = (state: State) => state.getAddCellData_S;

export const addCellSetter = (state: State) => state.addCell_S;
export const removeCellSetter = (state: State) => state.removeCell_S;
export const toggleCellModeModeSetter = (state: State) =>
  state.toggleCellMode_S;
export const updateCellSetter = (state: State) => state.updateCell_S;
export const getCellDataGetter = (state: State) => state.getCellData_S;

export const transformAddToViewSetter = (state: State) =>
  state.transformAddToView;
