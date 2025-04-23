import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface IUser {
    userId: string;
    firstName: string;

    detail: {
        learning: number;
    }
}

interface IUsersStore {
  user: IUser;
  setUser: (user: IUser) => void;
  getUser: () => IUser
}

const initialState: IUser = {
    userId: '',
    firstName: '',
    detail: {
      learning: 0
    }
  };

export const useUserStore = create<IUsersStore>()(
    immer((set, get) => ({
        user: {...initialState},
        setUser: (user: IUser) => set((state) => {
            state.user = user
        }),
        getUser: () => get().user
    }))
);
