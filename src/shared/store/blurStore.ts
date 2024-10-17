import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface IBlurStore {
    blur: boolean;
    setBlur: (bol: boolean) => void;
}

export const useBlurStore = create<IBlurStore>()(
    immer((set) => ({
        blur: false,
        setBlur: (bol: boolean) => {
            set((state) => {
                state.blur = bol;
            });
        },
    })),
);
