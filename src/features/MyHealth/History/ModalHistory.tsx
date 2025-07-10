import React from 'react';
import type { IAppointment } from '../types/appointment.types';

interface IModalHistoryProps {
  appointments: IAppointment[];
}

export default function ModalHistory({ appointments }: IModalHistoryProps) {
  return (
    <div
      className="absolute bg-white p-6 rounded-lg 
                shadow-lg max-w-3xl w-modal z-10 top-10 -right-3
                font-medium text-black text-sm"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="grid grid-cols-3 gap-4 mb-4 pb-2">
        <p className="text-gray-700 text-center">Запись</p>
        <p className="text-gray-700 text-center">Длительность</p>
        <p className="text-gray-700 text-center">Получаемая польза</p>
      </div>

      <div className="space-y-4">
        {appointments.map((item) => (
          <div key={item.id} className="grid grid-cols-3 gap-4 items-center">
            <p className="text-gray-900 text-center">{item.title}</p>
            <p className="text-gray-600 text-center">{item.duration}</p>
            <p
              className="font-medium text-center"
              style={item.benifest > 50 ? { color: 'green' } : { color: 'red' }}
            >
              {item.benifest}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
