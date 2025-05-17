import { useRouter } from "next/navigation";
import React from "react";

interface ISelectAppointmentsItemProps {
    link: string;
    count: number;
    title: string;
    status: string;
    statusAction?: React.Dispatch<React.SetStateAction<string>>;
    isLink: boolean;
}

export default function SelectAppointmentsItem({link, count, title, statusAction, status, isLink}: ISelectAppointmentsItemProps) {

    const router = useRouter()
    const { push } = router

    const onClick = () => {
        if(isLink) {
            push(link)
        } else {
            statusAction(status)
        }
    }

    return (
        <div 
            onClick={() => onClick()}
            className="flex items-center justify-between hover:bg-white-150 py-5 cursor-pointer"
        >
            <p className="px-3">{title}</p>
            <p className="px-3">{count}</p>
        </div>
    )
}