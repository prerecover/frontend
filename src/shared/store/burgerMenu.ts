import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface IBurgerMenuStore {
    isOpen: boolean;
    setIsOpen: (bol: boolean) => void;
}

export const useBurgerMenu = create<IBurgerMenuStore>()(
    immer((set) => ({
        isOpen: false,
        setIsOpen: (bol: boolean) => {
            set((state) => {
                state.isOpen = bol;
            });
        },
    }))
);
