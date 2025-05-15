import Image from 'next/image';
import Files from './Files';
import React, { useState } from 'react';
import Appointment from './Appointment';
import ModalHistory from './ModalHistory';
import { IAppointment } from '../types/appointment.types';

interface IListSelections {
  id: number;
  content: string;
  component: React.ReactElement;
}
interface IHistoryProps {
  appointemtns: IAppointment[];
}

const listSelectionsData: IListSelections[] = [
  {
    id: 1,
    content: 'Записи',
    component: <Appointment appointments={[]} />,
  },
  {
    id: 2,
    content: 'Файлы',
    component: <Files appointments={[]} />,
  },
];

export default function History({ appointemtns }: IHistoryProps) {
  const [active, setActive] = useState<IListSelections>(listSelectionsData[0]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  return (
    <div className="h-full overflow-hidden flex flex-col bg-white rounded-xl min-h-history">
      <header className="flex items-center justify-between py-5 px-4 bg-history relative">
        <div className="flex items-center gap-4">
          <Image
            src="/assets/history.svg"
            alt="history"
            width={24}
            height={24}
          />
          <p className="font-medium text-base max-xl:text-sm max-sm:text-xs">
            Ваша история
          </p>
        </div>

        <div
          className="flex py-2 px-4 items-center gap-4 
                        cursor-pointer rounded hover:bg-[#0064FA]
                        duration-200 ease-in-out hover:text-white"
          onClick={(e) => {
            e.stopPropagation();
            setIsVisibleModal((prev) => !prev);
          }}
        >
          <p className="font-medium text-base max-xl:text-sm max-sm:text-xs">
            Все изучения
          </p>
          <Image
            src="/assets/black-arrow-down.svg"
            alt="arrow-down"
            width={24}
            height={24}
          />
        </div>

        {isVisibleModal && (
          <div className="absolute right-4 top-16 z-50">
            <ModalHistory appointments={appointemtns} />
          </div>
        )}
      </header>

      <div className="w-full relative flex items-center mt-4 py-5 px-8">
        <div className="p-6 rounded-xl border border-history mr-3.5 max-xl:p-3">
          <Image
            src="/assets/search-blue.svg"
            alt="search"
            width={24}
            height={24}
          />
        </div>
        <div className="w-full flex justify-between h-full overflow-y-auto border border-history p-2 rounded-xl overflow-hidden max-xl:p-1">
          {listSelectionsData.map((item) => (
            <button
              key={item.id}
              className="py-4 rounded-xl w-1/2 max-xl:text-sm max-xl:py-2"
              style={
                item.id === active.id
                  ? { color: '#0064FA', backgroundColor: '#EBF3FF' }
                  : { color: '#7D7F82', backgroundColor: '#fff' }
              }
              onClick={() => setActive(item)}
            >
              {item.content}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-4 min-h-0">
        {React.cloneElement(active.component, { appointments: appointemtns })}
      </div>
    </div>
  );
}
