import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { IUser } from '../types';


interface IUsersStore {
  user: IUser;
  setUser: (user: IUser) => void;
  getUser: () => IUser;
}


const initialState: IUser = {
  _id: "temp-id",
  userId: '',
  isStaff: false,
  historyStudied: false,
  online: false,
  sex: false,
  isVerified: false,
  appointments: [],
  
  firstName: '',
  detail: {
    _id: 'temp-id',
    learning: 0,
  },
  createdAt: 0,
  updatedAt: 0,
};

export const useUserStore = create<IUsersStore>()(
  immer((set, get) => ({
    user: { ...initialState },
    setUser: (user: IUser) =>
      set((state) => {
        state.user = user;
      }),
    getUser: () => get().user,
  }))
);
