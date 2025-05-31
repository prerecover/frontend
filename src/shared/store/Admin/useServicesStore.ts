import { EnTableTypes } from '@/segments/Admin/MainTable';
import { CHANGES_CONFIRM_ALERT_TIME } from '@/shared/constants/Admin/AddBaseCells';
import { ADD_SERVICES_CELL_BASE_STRUCTURE } from '@/shared/constants/Admin/AddBaseCells/services';
import { TAddBody } from '@/shared/types/Admin/Services/Bodies/Add';
import { TViewEditBody } from '@/shared/types/Admin/Services/Bodies/ViewEdit';
import { TServicesDataStructure } from '@/shared/types/Admin/Services/data-structure';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { TBodyItemId } from '@/shared/types/Admin/shared/Utils/BodyItemId';
import { TCellFuncParams } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { create } from 'zustand';

interface State {
  addCells: TAddBody;
  cells: TViewEditBody;
  editableCells: TViewEditBody;
  changesConfirmAlertsCells: TServicesDataStructure['id'][];

  addEditableCell_S: (params: { id: TServicesDataStructure['id'] }) => void;
  removeEditableCell_S: (params: { id: TServicesDataStructure['id'] }) => void;

  addAddCell_S: () => void;
  removeAddCell_S: (params: { id: TServicesDataStructure['id'] }) => void;
  updateAddCell_S: <T>(
    params: TCellFuncParams<T, EnTableTypes.services>
  ) => void;
  getAddItemData_S: (
    params: TBodyItemId<EnTableTypes.services>
  ) => TAddBody[0] | null;

  addCell_S: (data: TViewEditBody) => void;
  removeCell_S: (params: { id: TServicesDataStructure['id'] }) => void;
  updateCell_S: <T>(params: TCellFuncParams<T, EnTableTypes.services>) => void;
  getItemData_S: (
    params: TBodyItemId<EnTableTypes.services>
  ) => TViewEditBody[0] | null;

  transformAddToView_S: (params: {
    id: TBodyItemId<EnTableTypes.services>;
  }) => void;
  transformViewToEdit_S: (params: {
    id: TBodyItemId<EnTableTypes.services>;
  }) => void;
  transformEditToViewSave_S: (params: {
    id: TBodyItemId<EnTableTypes.services>;
  }) => void;
  transformEditToViewCancel_S: (params: {
    id: TBodyItemId<EnTableTypes.services>;
  }) => void;

  addChangesConfirmAlertCell_S: (id: TServicesDataStructure['id']) => void;
  removeChangesConfirmAlertCell_S: (id: TServicesDataStructure['id']) => void;
}

export const useServicesStore = create<State>()((set, get) => ({
  addCells: [],
  cells: [],
  editableCells: [],
  changesConfirmAlertsCells: [],
  addChangesConfirmAlertCell_S: (id) => {
    set(({ changesConfirmAlertsCells }) => {
      return {
        changesConfirmAlertsCells: [...changesConfirmAlertsCells, id],
      };
    });
  },
  removeChangesConfirmAlertCell_S: (id) => {
    set(({ changesConfirmAlertsCells }) => {
      return {
        changesConfirmAlertsCells: changesConfirmAlertsCells.filter(
          (curId) => curId !== id
        ),
      };
    });
  },
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
        cells: cells.map((props) => {
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
  transformAddToView_S: ({ id }) => {
    const removeAddCell = get().removeAddCell_S;
    const addChangesConfirmAlertCellSetter = get().addChangesConfirmAlertCell_S;
    const removeChangesConfirmAlertCellSetter =
      get().removeChangesConfirmAlertCell_S;

    set(({ cells, addCells }) => {
      const transformAddCell = addCells.find((props) => props.id === id);

      if (transformAddCell) {
        addChangesConfirmAlertCellSetter(id);
        setTimeout(() => {
          removeChangesConfirmAlertCellSetter(id);
        }, CHANGES_CONFIRM_ALERT_TIME);
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
  transformViewToEdit_S: ({ id }) => {
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
  transformEditToViewSave_S: ({ id }) => {
    const removeEditableCell = get().removeEditableCell_S;
    const addChangesConfirmAlertCellSetter = get().addChangesConfirmAlertCell_S;
    const removeChangesConfirmAlertCellSetter =
      get().removeChangesConfirmAlertCell_S;

    set(({ cells }) => {
      addChangesConfirmAlertCellSetter(id);
      setTimeout(() => {
        removeChangesConfirmAlertCellSetter(id);
      }, CHANGES_CONFIRM_ALERT_TIME);

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
  transformEditToViewCancel_S: ({ id }) => {
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
  getItemData_S: (id) => {
    const cells = get().cells;

    return cells.find((props) => props.id === id) || null;
  },
  getAddItemData_S: (id) => {
    const addCells = get().addCells;

    return addCells.find((props) => props.id === id) || null;
  },
}));

export const addCellsSelector = (state: State) => state.addCells;
export const cellsSelector = (state: State) => state.cells;

export const addAddCellSetter = (state: State) => state.addAddCell_S;
export const removeAddCellSetter = (state: State) => state.removeAddCell_S;
export const updateAddCellSetter = (state: State) => state.updateAddCell_S;

export const addCellSetter = (state: State) => state.addCell_S;
export const removeCellSetter = (state: State) => state.removeCell_S;
export const updateCellSetter = (state: State) => state.updateCell_S;

export const transformAddToViewSetter = (state: State) =>
  state.transformAddToView_S;
export const transformViewToEditSetter = (state: State) =>
  state.transformViewToEdit_S;
export const transformEditToViewSaveSetter = (state: State) =>
  state.transformEditToViewSave_S;
export const transformEditToViewCancelSetter = (state: State) =>
  state.transformEditToViewCancel_S;

export const getItemDataGetter = (state: State) => state.getItemData_S;
export const getAddItemDataGetter = (state: State) => state.getAddItemData_S;

export const changesConfirmAlertsCellsSelector = (state: State) =>
  state.changesConfirmAlertsCells;
export const addChangesConfirmAlertCellSetter = (state: State) =>
  state.addChangesConfirmAlertCell_S;
export const removeChangesConfirmAlertCellSetter = (state: State) =>
  state.removeChangesConfirmAlertCell_S;
