import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { IService } from '../types/service.interface';

interface IDataStore {
    title: string;
    setTitle: (title: string) => void;
    ageClinic: number | null;
    setAgeClinic: (ageClinic: number) => void;
    typeTitle: string;
    setTypeTitle: (typeTitle: string) => void;
    square: number | null;
    setSquare: (square: number) => void;
    adminNumber: string;
    setAdminNumber: (adminNumber: string) => void;
    numbers: string[];
    setNumbers: (numbers: string[]) => void;
    registryNumber: string;
    setRegistryNumber: (registryNumber: string) => void;
    language: string;
    setLanguage: (language: string) => void;
    computerHave: boolean;
    setComputerHave: (computerHave: boolean) => void;
    elevatorHave: boolean;
    setElevatorHave: (elevatorHave: boolean) => void;
    internetHave: boolean;
    setInternetHave: (internetHave: boolean) => void;
    numberOfFloors: number | null;
    setNumberOfFloors: (numberOfFloors: number) => void;
    totalDoctors: number;
    setTotalDoctors: (totalDoctors: number) => void;
    totalServices: number;
    setTotalServices: (totalServices: number) => void;

    country: string;
    setCountry: (country: string) => void;
    city: string;
    setCity: (city: string) => void;
    address: string;
    setAddress: (address: string) => void;
    services: Partial<IService>[];
    setServices: (services: Partial<IService>[]) => void;
}

export const useClinicRegStore = create<IDataStore>()(
    immer((set) => ({
        title: '',
        ageClinic: null,
        typeTitle: '',
        square: null,
        adminNumber: '',
        numbers: [],
        registryNumber: '',
        language: '',
        computerHave: false,
        elevatorHave: false,
        internetHave: false,
        numberOfFloors: null,
        totalDoctors: 0,
        totalServices: 0,
        email: '',
        country: '',
        city: '',
        address: '',
        services: [],
        setTitle: (title: string) => {
            set((state) => {
                state.title = title;
            });
        },
        setAgeClinic: (ageClinic: number) => {
            set((state) => {
                state.ageClinic= ageClinic;
            });
        },
        setTypeTitle: (typeTitle: string) => {
            set((state) => {
                state.typeTitle = typeTitle;
            });
        },
        setSquare: (square: number) => {
            set((state) => {
                state.square= square;
            });
        },
        setAdminNumber: (adminNumber: string) => {
            set((state) => {
                state.adminNumber = adminNumber;
            });
        },
        setNumbers: (numbers: string[]) => {
            set((state) => {
                state.numbers = numbers;
            });
        },
        setRegistryNumber: (registryNumber: string) => {
            set((state) => {
                state.registryNumber = registryNumber;
            });
        },
        setLanguage: (language: string) => {
            set((state) => {
                state.language = language;
            });
        },
        setComputerHave: (computerHave: boolean) => {
            set((state) => {
                state.computerHave = computerHave;
            });
        },
        setElevatorHave: (elevatorHave: boolean) => {
            set((state) => {
                state.elevatorHave = elevatorHave;
            });
        },
        setInternetHave: (internetHave: boolean) => {
            set((state) => {
                state.internetHave= internetHave;
            });
        },
        setNumberOfFloors: (numberOfFloors: number) => {
            set((state) => {
                state.numberOfFloors = numberOfFloors;
            });
        },
        setTotalDoctors: (totalDoctors: number) => {
            set((state) => {
                state.totalDoctors = totalDoctors;
            });
        },
        setTotalServices: (totalServices: number) => {
            set((state) => {
                state.totalServices = totalServices;
            });
        },
        setServices: (services: Partial<IService>[]) => {
            set((state) => {
                state.services = services;
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
    })),
);
