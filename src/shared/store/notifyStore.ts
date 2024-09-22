import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { INotification } from '../types/notification.interface';

interface INotifyStore {
    notifications: INotification[];
    setNotifications: (notifications: INotification[]) => void;
}

export const useNotifyStore = create<INotifyStore>()(
    immer((set) => ({
        notifications: [],
        setNotifications: (notifications: INotification[]) => {
            set((state) => {
                state.notifications = notifications;
            });
        },
    })),
);
