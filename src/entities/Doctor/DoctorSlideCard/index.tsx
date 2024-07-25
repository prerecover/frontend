import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DoctorCard({ _id, avatar, rank, data }: {
    _id: string;
    avatar: string | undefined;
    rank: string;
    data: string;
}) {
    const router = useRouter();
    return (
        <div className="w-full p-3 flex flex-col rounded-[16px] items-center bg-white text-center cursor-pointer extra_desktop:p-4 extra_desktop:border-[1px] extra_desktop:border-blue-100 extra_desktop:border-solid extra_desktop:gap-[10px] extra_desktop:rounded-[12px]"
            onClick={() => router.push(`/doctor/${_id}`)}
        >
            <Image src={avatar ? avatar : "/assets/doctor.svg"} alt="avatar" className="w-[55px] h-[55px] rounded-[50%]" width={55} height={55} />
            <p className="hidden text-[14px] font-semibold mt-[10px] overflow-hidden whitespace-normal text-ellipsis max-w-full extra_desktop:block">
                {data}
            </p>
            <div className="text-[10px] font-medium text-grey-500 mt-[10px] extra_desktop:mt-[5px] extra_desktop:text-[12px]">{rank}</div>

        </div>

    )

}
