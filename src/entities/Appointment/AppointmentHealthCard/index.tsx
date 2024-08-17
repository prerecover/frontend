import { Text } from "@/components/ui/text";
import Image from "next/image";
import Stats from "./stats";
import { Button } from "@/components/ui/button";

export default function AppointmentHealthCard() {
    return (
        <div className="flex flex-col bg-white p-[20px]">
            <div className="flex-between font-medium">
                <div className="flex items-center gap-2 font-medium">
                    <Image src={"/assets/doctor.svg"} alt="service" width={40} height={40} className="rounded-full" />
                    <Text className="text-[15px]">"Курение с врачом"</Text>
                </div>
                <Text className="text-[15px]">21.07.2024</Text>
            </div>
            <Text className="font-medium mt-[7px] mb-[12px]">Пациент №77706789</Text>
            <Stats />
            <div className="flex mt-[18px] gap-[14px]">
                <Button className=" text-[12px]">Записаться</Button>
                <Button className=" text-[12px] " variant={"outline"}>Прогноз</Button>
                <Button className=" text-[12px] " variant={"outline"}>Сохранить</Button>
            </div>
        </div>
    )

}
