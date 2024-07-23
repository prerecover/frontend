import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface IDataStore {
    number: string;
    email: string;
    setNumber: (number: string) => void;
    setEmail: (email: string) => void;
}

export const useResetPasswordStore = create<IDataStore>()(
    immer((set) => ({
        number: "",
        email: "",
        setNumber: (number: string) => {
            set((state) => {
                state.number = number;
            });
        },
        setEmail: (email: string) => {
            set((state) => {
                state.email = email;
            });
        },
    }))
);
