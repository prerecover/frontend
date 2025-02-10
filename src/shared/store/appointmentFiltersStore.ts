import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface IAppointmentFilterStore {
  isOpen: boolean;
  setIsOpen: (bol: boolean) => void;
}

export const useAppointmentFilterStore = create<IAppointmentFilterStore>()(
  immer((set) => ({
    isOpen: true,
    setIsOpen: (bol: boolean) => {
      set((state) => {
        state.isOpen = bol;
      });
    },
  }))
);
