import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface IEndMenuModal {
  isOpen: boolean;
  setIsOpen: (bol: boolean) => void;
}

export const useEndMenuModal = create<IEndMenuModal>()(
  immer((set) => ({
    isOpen: false,
    setIsOpen: (bol: boolean) => {
      set((state) => {
        state.isOpen = bol;
      });
    },
  }))
);
