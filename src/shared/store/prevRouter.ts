import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface IRouteStore {
    route: string;
    setRoute: (route: string) => void;
}

export const useRouteStore = create<IRouteStore>()(
    immer((set) => ({
        route: '',
        setRoute: (route: string) => {
            set((state) => {
                state.route = route;
            });
        },
    })),
);
