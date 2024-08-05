import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { IClinic } from '../types/clinic.interface';

interface IDataStore {
    clinics: IClinic[];
    setClinics: (clinics: IClinic[]) => void;
}

export const useSelectedClinicsStore = create<IDataStore>()(
    immer((set) => ({
        clinics: [],
        setClinics(clinics) {
            set((state) => {
                state.clinics = clinics;
            });
        },
    })),
);
