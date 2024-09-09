import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface InitialState {
    showSurveyDialog: boolean;

    setShowSurveyDialog: (value: boolean) => void;
}

export const useSurveyDialogStore = create<InitialState>()(
    immer((set) => ({
        showSurveyDialog: false,
        setShowSurveyDialog: (value: boolean) => {
            set((state) => {
                state.showSurveyDialog = value;
            });
        },
    })),
);
