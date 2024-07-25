"use client"
import { useRouter } from "next/navigation";
import { HeaderLink } from "./linkName";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/shared/store/sidebarStore";
import { NotificationsLink } from "@/components/notification/NotificationLink";
import Image from "next/image";
import userImg from "/public/assets/doctor.svg"
import { useAuth } from "@/app/(auth)/auth-wrapper";

export default function Header() {
    const { isOpenSidebar } = useSidebarStore();
    const { user } = useAuth();
    const { push } = useRouter();
    return (
        <>
            <header className={cn("fixed top-0 left-0 right-0 w-full h-[65px] bg-white border-b-[1px] border-solid border-b-blue-100 py-[12px] px-[30px] flex-between gap-4 z-10 mobile:hidden", isOpenSidebar ? "pl-[274px]" : "pl-[116px]")} >
                <HeaderLink />
                <div className="flex items-center gap-5">
                    <NotificationsLink />
                    <div className="w-[40px] h-[40px] rounded-[50%] overflow-hidden" onClick={() => push(`${user._id ? "/account" : "/login"}`)}>
                        <Image src={user.avatar ? user.avatar : userImg} alt="avatar" width={40} height={40} />
                    </div>
                </div>
            </header >
        </>
    );
}
