"use client"

import { Avatar } from "@/features/AccountSheetContent/avatar";
import AccountHeader from "./ui/AccountHeader";
import AccountMainBlock from "./ui/AccountMainBlock";
import { useState } from "react";
import AccountLanguage from "./ui/AccountLanguage";
import AccountProfileProtection from "./ui/AccountProfileProtection";
import { useAuth } from "@/app/(auth)/auth-wrapper";
import AccountLogout from "./ui/AccountLogout";


export default function AccountScreen() {
    const [language, setLanguage] = useState('Русский');

    const { user } = useAuth();

    return (
        <div className="bg-white-background">
            <AccountHeader />

            <div className="p-4 flex flex-col gap-5">
                <Avatar />
                <AccountMainBlock user={user}/>
                <AccountLanguage language={language}/>
                <AccountProfileProtection phone={user.number} email={user.email}/>
                <AccountLogout />
            </div>
            
        </div>
    )
}