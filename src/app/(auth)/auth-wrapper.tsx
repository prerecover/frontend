"use client"
import { client } from "@/lib/apollo";
import { getCookie } from "@/shared/lib/hooks/useCookie";
import { IUser } from "@/shared/types";
import { gql } from "@apollo/client";
import { createContext, useContext, useEffect, useState } from "react";



interface IContextType {
    user: Partial<IUser>;
    setUser: React.Dispatch<React.SetStateAction<Partial<IUser>>>;
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};


const GET_ME = gql(`
query GetMe {
    getMe {
        _id
        address
        avatar
        birthday
        createdAt
        email
        firstName
        isStaff
        isVerfied
        lastName
        login
        number
        online
        sex
        surname
        updatedAt
        verificationCode
    }
}
`)

export const INITIAL_USER: Partial<IUser> = {
}



const INITIAL_STATE = {
    user: INITIAL_USER,
    isAuth: false,
    setUser: () => { },
    setIsAuth: () => { },
}

const AuthContext = createContext<IContextType>(INITIAL_STATE)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<Partial<IUser>>(INITIAL_USER)
    const [isAuth, setIsAuth] = useState(false)
    useEffect(() => {
        const token = getCookie('access_token')
        client.query({
            query: GET_ME, context: {
                headers: {
                    Authorization: token ? `Bearer ${token}` : ""
                }
            }
        }).then((data) => setUser(data.data.getMe));

    }, [])
    const value = {
        user,
        setUser,
        isAuth,
        setIsAuth,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuth = () => useContext(AuthContext);
