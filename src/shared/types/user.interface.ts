export interface User {
    _id?: string;
    address?: string;
    avatar?: string;
    birthday?: number;
    createdAt: number;
    updatedAt: number;
    email?: string;
    login?: string;
    number?: string;
    firstName?: string;
    lastName?: string;
    surname?: string;
    isStaff: boolean;
    online: boolean;
    sex: boolean;
    isVerified: boolean;
    verificationCode: number;
}
