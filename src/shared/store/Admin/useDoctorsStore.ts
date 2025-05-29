import { ADD_DOCTORS_CELL_BASE_STRUCTURE } from '@/shared/constants/Admin/AddBaseCells/doctors';
import { TAddBody } from '@/shared/types/Admin/Clinics/Bodies/Add';
import { TViewEditBody } from '@/shared/types/Admin/Doctors/Bodies/ViewEdit';
import { TDoctorsDataStructure } from '@/shared/types/Admin/Doctors/data-structure';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { create } from 'zustand';

interface State {
  addCells: TAddBody;
  cells: TViewEditBody;

  addAddCell_S: () => void;
  removeAddCell_S: (params: { id: TDoctorsDataStructure['id'] }) => void;
  addCell_S: (data: TViewEditBody) => void;
  toggleCellMode_S: (params: { id: TDoctorsDataStructure['id'] }) => void;
  removeCell_S: (params: { id: TDoctorsDataStructure['id'] }) => void;
}

export const useDoctorsStore = create<State>()((set, get) => ({
  addCells: [],
  cells: [],
  addAddCell_S: () => {
    set(({ addCells }) => {
      return {
        addCells: [
          ADD_DOCTORS_CELL_BASE_STRUCTURE(`add-cell-id-${addCells.length - 1}`),
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
}));

export const addCellsSelector = (state: State) => state.addCells;
export const cellsSelector = (state: State) => state.cells;

export const addAddCellSetter = (state: State) => state.addAddCell_S;
export const removeAddCellSetter = (state: State) => state.removeAddCell_S;

export const addCellSetter = (state: State) => state.addCell_S;
export const removeCellSetter = (state: State) => state.removeCell_S;
export const changeCellModeSetter = (state: State) => state.toggleCellMode_S;
