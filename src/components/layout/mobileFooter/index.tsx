"use client";
import { useAuth } from "@/app/(auth)/auth-wrapper";
import { ROUTES } from "@/shared/utils/paths";
import { usePathname, useRouter } from "next/navigation";
import styles from "./mobileFooter.module.scss"
import { AccountIcon, HomeIcon, MessagesIcon, SearchIcon } from "@/icons";
export default function MobileFooter() {
    const router = useRouter();
    const pathname = usePathname();
    const { user } = useAuth();


    const menuData = [
        {
            path: ROUTES.main.path,
            svg: <HomeIcon />,
        },
        {
            path: ROUTES.search.path,
            svg: <SearchIcon />,
        },
        {
            path: ROUTES.messages.path,
            svg: <MessagesIcon />,
        },
        {
            path: user ? ROUTES.account.path : "/login",
            svg: (
                <AccountIcon />
            ),
        },
    ];

    return (
        <div className="h-[70px] w-full rounded-tr-[8px] rounded-tl-[8px] fixed bottom-0 right-0 z-30 flex justify-evenly items-center bg-white desktop:hidden">
            {menuData.map((item, idx) => (
                <div
                    key={idx}
                    className={item.path === pathname ? styles.active : ""}
                    onClick={() => router.push(item.path)}
                    style={{ cursor: "pointer" }}
                >
                    {item.svg}
                </div>
            ))}
        </div>
    );
};
