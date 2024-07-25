"use client";

import notifi from "./assets/notification.svg";
import burger from "./assets/burger.svg";
import burgerClose from "./assets/close.svg";
import cn from "clsx";
import { useBurgerMenu } from "@/shared/store/burgerMenu";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ROUTES } from "@/shared/utils/paths";


export default function MobileHeader({ className }: {
    className?: string;
}) {
    const { isOpen, setIsOpen } = useBurgerMenu();
    const router = useRouter();

    return (
        <>
            <div className={cn("bg-white p-4 flex-between border-solid fixed border-[1px] border-blue-100 top-0 right-0 left-0 w-full h-[65px] z-30 desktop:hidden", className)}>
                <div onClick={() => setIsOpen(!isOpen)}>
                    <Image src={isOpen ? burgerClose : burger} alt="burger" width={24} height={24} />
                </div>
                <div
                    className="relative"
                    onClick={() => {
                        router.push(ROUTES.notifications.path)
                    }}
                >
                    <Image src={notifi} alt="notifications" width={24} height={24} />
                </div>
            </div>
        </>
    );
};
