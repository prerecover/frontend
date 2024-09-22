import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface INotifyModal {
    isOpen: boolean;
    setIsOpen: (bol: boolean) => void;
}

export const useNotifyModal = create<INotifyModal>()(
    immer((set) => ({
        isOpen: false,
        setIsOpen: (bol: boolean) => {
            set((state) => {
                state.isOpen = bol;
            });
        },
    })),
);
