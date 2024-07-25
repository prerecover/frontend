import { ICountry } from "./country.interface";

export interface IDoctor {
    _id: string;
    address?: string;
    avatar?: string;
    birthday?: number;
    createdAt: number;
    updatedAt: number;
    email?: string;
    login?: string;
    number?: string;
    firstName: string;
    lastName: string;
    specialization: string;
    country?: ICountry;
    surname: string;
    isMain?: boolean;
    sex: boolean;
    isVerified: boolean;
    verificationCode: number;
}
