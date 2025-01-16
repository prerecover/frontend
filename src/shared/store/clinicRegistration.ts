import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { IService } from '../types/service.interface';

type stringArg = (T: string) => void;
type numberArg = (T: number) => void;

interface IDataStore {
    title: string;
    setTitle: stringArg;
    ageClinic: number | null;
    setAgeClinic: numberArg;
    typeTitle: string;
    setTypeTitle: stringArg;
    square: number | null;
    setSquare: numberArg;
    adminNumber: string;
    setAdminNumber: stringArg;
    avatar: File | null;
    setAvatar: (avatar: File) => void;
    numbers: string[];
    setNumbers: (numbers: string[]) => void;
    registryNumber: string;
    setRegistryNumber: stringArg;
    language: string;
    setLanguage: stringArg;
    computerHave: boolean;
    setComputerHave: (computerHave: boolean) => void;
    elevatorHave: boolean;
    setElevatorHave: (elevatorHave: boolean) => void;
    internetHave: boolean;
    setInternetHave: (internetHave: boolean) => void;
    numberOfFloors: number | null;
    setNumberOfFloors: numberArg;
    totalDoctors: number | null;
    setTotalDoctors: numberArg;
    totalServices: number | null;
    setTotalServices: numberArg;
    mondayTime: string | null;
    setMondayTime: stringArg;
    tuesdayTime: string | null;
    setTuesdayTime: stringArg;
    wednesdayTime: string | null;
    setWednesdayTime: stringArg;
    thursdayTime: string | null;
    setThursdayTime: stringArg;
    fridayTime: string | null;
    setFridayTime: stringArg;
    saturdayTime: string | null;
    setSaturdayTime: stringArg;
    sundayTime: string | null;
    setSundayTime: stringArg;

    country: string;
    setCountry: stringArg;
    city: string;
    setCity: stringArg;
    address: string;
    setAddress: stringArg;
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
        mondayTime: null,
        avatar: null,
        tuesdayTime: null,
        wednesdayTime: null,
        thursdayTime: null,
        fridayTime: null,
        saturdayTime: null,
        sundayTime: null,
        language: '',
        computerHave: false,
        elevatorHave: false,
        internetHave: false,
        numberOfFloors: null,
        totalDoctors: null,
        totalServices: null,
        email: '',
        country: '',
        city: '',
        address: '',
        services: [],
        setAvatar: (avatar: File) => {
            set((state) => {
                state.avatar = avatar;
            });
        },
        setTitle: (title: string) => {
            set((state) => {
                state.title = title;
            });
        },
        setAgeClinic: (ageClinic: number) => {
            set((state) => {
                state.ageClinic = ageClinic;
            });
        },
        setTypeTitle: (typeTitle: string) => {
            set((state) => {
                state.typeTitle = typeTitle;
            });
        },
        setSquare: (square: number) => {
            set((state) => {
                state.square = square;
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
        setMondayTime: (time: string) => {
            set((state) => {
                state.mondayTime = time;
            });
        },
        setTuesdayTime: (time: string) => {
            set((state) => {
                state.tuesdayTime = time;
            });
        },
        setWednesdayTime: (time: string) => {
            set((state) => {
                state.wednesdayTime = time;
            });
        },
        setThursdayTime: (time: string) => {
            set((state) => {
                state.thursdayTime = time;
            });
        },
        setFridayTime: (time: string) => {
            set((state) => {
                state.fridayTime = time;
            });
        },
        setSaturdayTime: (time: string) => {
            set((state) => {
                state.saturdayTime = time;
            });
        },
        setSundayTime: (time: string) => {
            set((state) => {
                state.sundayTime = time;
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
                state.internetHave = internetHave;
            });
        },
        setNumberOfFloors: (numberOfFloors: number | null) => {
            set((state) => {
                state.numberOfFloors = numberOfFloors;
            });
        },
        setTotalDoctors: (totalDoctors: number | null) => {
            set((state) => {
                state.totalDoctors = totalDoctors;
            });
        },
        setTotalServices: (totalServices: number | null) => {
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
