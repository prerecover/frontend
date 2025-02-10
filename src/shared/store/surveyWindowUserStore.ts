import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { ISurvey } from '../types/survey.interface';

interface InitialState {
  surveyUserWindowOpen: boolean;
  survey: ISurvey;

  setSurveyUserWindowOpen: (value: boolean) => void;
  setSurvey: (survey: ISurvey) => void;
}

export const useSurveyUserWindowStore = create<InitialState>()(
  immer((set) => ({
    survey: {
      _id: '',
      passed: false,
      createdAt: 0,
      questions: [],
      updatedAt: 0,
      appointment: undefined,
    },
    setSurvey: (survey: ISurvey) => {
      set((state) => {
        state.survey = survey;
      });
    },
    surveyUserWindowOpen: false,
    setSurveyUserWindowOpen: (value: boolean) => {
      set((state) => {
        state.surveyUserWindowOpen = value;
      });
    },
  }))
);
