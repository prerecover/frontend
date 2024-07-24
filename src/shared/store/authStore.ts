
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface InitialState {
    isAuth: boolean;

    setIsAuth: (value: boolean) => void;
}

// export const useAuth = create<InitialState>()(
//     immer((set) => ({
//         isAuth: false,
//         setIsAuth: (value: boolean) => {
//             set((state) => {
//                 state.isAuth = value;
//             });
//         },
//     }))
// );
//
