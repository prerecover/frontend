import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface SurveyQuestion {
    question: string;
    answers: string[];
}

interface InitialState {
    questions: SurveyQuestion[];
    setQuestions: (questions: SurveyQuestion[]) => void;
}

export const useSurveyQuestions = create<InitialState>()(
    immer((set) => ({
        questions: [],
        setQuestions: (questions: SurveyQuestion[]) => {
            set((state) => {
                state.questions = questions;
            });
        },
    })),
);
