import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface IProfileModal {
  isOpen: boolean;
  setIsOpen: (bol: boolean) => void;
}

export const useProfileModal = create<IProfileModal>()(
  immer((set) => ({
    isOpen: false,
    setIsOpen: (bol: boolean) => {
      set((state) => {
        console.log(state);

        state.isOpen = bol;
      });
    },
  }))
);
