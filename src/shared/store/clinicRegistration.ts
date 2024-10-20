import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { IService } from '../types/service.interface';

interface IDataStore {
    name: string;
    setName: (name: string) => void;
    email: string;
    setEmail: (email: string) => void;
    number: string;
    setNumber: (number: string) => void;
    adminNumber: string;
    setAdminNumber: (adminNumber: string) => void;
    site: string;
    setSite: (site: string) => void;
    country: string;
    setCountry: (country: string) => void;
    city: string;
    setCity: (city: string) => void;
    calendar: string;
    setCalendar: (calendar: string) => void;
    address: string;
    setAddress: (address: string) => void;
    workdays: string[];
    setWorkdays: (workdays: string[]) => void;
    startTime: string;
    setStartTime: (startTime: string) => void;
    endTime: string;
    setEndTime: (endTime: string) => void;
    avatar: any;
    setAvatar: (avatar: any) => void;
    debet: string;
    setDebet: (debet: string) => void;
    services: Partial<IService>[];
    setServices: (services: Partial<IService>[]) => void;
}

export const useClinicRegStore = create<IDataStore>()(
    immer((set) => ({
        name: '',
        number: '',
        email: '',
        calendar: '',
        adminNumber: '',
        site: '',
        country: '',
        city: '',
        address: '',
        workdays: [],
        startTime: '',
        endTime: '',
        avatar: null,
        debet: '',
        services: [],
        setCalendar: (calendar: string) => {
            set((state) => {
                state.calendar = calendar;
            });
        },
        setServices: (services: Partial<IService>[]) => {
            set((state) => {
                state.services = services;
            });
        },
        setName: (name: string) => {
            set((state) => {
                state.name = name;
            });
        },
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
        setAdminNumber: (adminNumber: string) => {
            set((state) => {
                state.adminNumber = adminNumber;
            });
        },
        setSite: (site: string) => {
            set((state) => {
                state.site = site;
            });
        },
        setCountry: (country: string) => {
            set((state) => {
                state.country = country;
            });
        },
        setCity: (city: string) => {
            set((state) => {
                state.city = city;
            });
        },
        setAddress: (address: string) => {
            set((state) => {
                state.address = address;
            });
        },
        setWorkdays: (workdays: string[]) => {
            set((state) => {
                state.workdays = workdays;
            });
        },
        setStartTime: (startTime: string) => {
            set((state) => {
                state.startTime = startTime;
            });
        },
        setEndTime: (endTime: string) => {
            set((state) => {
                state.endTime = endTime;
            });
        },
        setDebet: (debet: string) => {
            set((state) => {
                state.debet = debet;
            });
        },
        setAvatar: (avatar: any) => {
            set((state) => {
                state.avatar = avatar;
            });
        },
    })),
);
