import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { IService } from '../types/service.interface';

interface IDataStore {
    service: IService | null;
    setService: (service: IService) => void;
}

export const useCurrServiceStore = create<IDataStore>()(
    immer((set) => ({
        service: null,
        setService: (service: IService) => {
            set((state) => {
                state.service = service;
            });
        },
    })),
);
