import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface InitialState {
    isOpenSidebar: boolean;

    setOpenSidebar: (value: boolean) => void;
}

export const useSidebarStore = create<InitialState>()(
    immer((set) => ({
        isOpenSidebar: true,
        setOpenSidebar: (value: boolean) => {
            set((state) => {
                state.isOpenSidebar = value;
            });
        },
    })),
);
