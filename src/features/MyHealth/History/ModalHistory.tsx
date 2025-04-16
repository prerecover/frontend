import React from "react"
import type { ModalAppointment } from "../types/appointment.types"

const appointments: ModalAppointment[] = [
    {
        id: "1",
        name: "Восстановление",
        duration: "40 минут",
        benifest: 72
    },
    {
        id: "2",
        name: "Восстановление",
        duration: "40 минут",
        benifest: 40
    },
    {
        id: "3",
        name: "Восстановление",
        duration: "40 минут",
        benifest: 72
    },
    {
        id: "4",
        name: "Восстановление",
        duration: "40 минут",
        benifest: 72
    },
    {
        id: "5",
        name: "Восстановление",
        duration: "40 минут",
        benifest: 72
    },
    {
        id: "6",
        name: "Восстановление",
        duration: "40 минут",
        benifest: 72
    },
];

export default function ModalHistory() {
    return (
        <div 
            className="absolute bg-white p-6 rounded-lg 
                shadow-lg max-w-3xl w-[542px] z-10 top-10 -right-3
                font-medium text-black text-sm"
                onClick={(e) => e.stopPropagation()}
        >

            <div className="grid grid-cols-3 gap-4 mb-4 pb-2">
                <p className="text-gray-700 text-center">Запись</p>
                <p className="text-gray-700 text-center">Длительность</p>
                <p className="text-gray-700 text-center">Получаемая польза</p>
            </div>
            

            <div className="space-y-4">
                {appointments.map(item => (
                    <div key={item.id} className="grid grid-cols-3 gap-4 items-center">
                        <p className="text-gray-900 text-center">{item.name}</p>
                        <p className="text-gray-600 text-center">{item.duration}</p>
                        <p 
                            className="font-medium text-center"
                            style={item.benifest > 50 ? {color: '#00CC5E'} : {color: '#D64657'}}
                        >
                            {item.benifest}%
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}