import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { IService } from '../types/service.interface';

interface IDataStore {
    services: IService[];
    setServices: (services: IService[]) => void;
}

export const useSelectedServicesStore = create<IDataStore>()(
    immer((set) => ({
        services: [],
        setServices(services) {
            set((state) => {
                state.services = services;
            });
        },
    })),
);
