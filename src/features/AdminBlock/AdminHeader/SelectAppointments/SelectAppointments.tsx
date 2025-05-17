'use client';

import { useEffect, useState } from 'react';
import SelectAppointmentsBlock from './SelectAppointmentBlock';
import Image from 'next/image';

interface ISelectAppointmentsProps {
  statusAction?: React.Dispatch<React.SetStateAction<string>>
  isLink: boolean;
}


export default function SelectAppointments({statusAction, isLink}: ISelectAppointmentsProps) {
  const [isSelectBlock, setIsSelectBlock] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const findAppointments = async () => {
    const res = await fetch(`/api/appointments`);
    const data = await res.json();
    setAppointments(data);
  };

  useEffect(() => {
    findAppointments();
  }, []);

  const currentImage = () => {
    if (isSelectBlock) {
      return (
        <Image
          src="/assets/arrow-up-blue.svg"
          width={20}
          height={20}
          alt="arrow-up"
        />
      );
    }
    return (
      <Image
        src="/assets/arrow-down-blue.svg"
        width={20}
        height={20}
        alt="arrow-down"
      />
    );
  };

  return (
    <div
      className="px-5 py-3.5 flex items-center border border-blue rounded-md w-56 relative justify-between"
      onClick={() => setIsSelectBlock(!isSelectBlock)}
    >
      <div className='flex items-center gap-4'>
        <Image
          src="/assets/appointment-blue.svg"
          width={24}
          height={24}
          alt="SMS"
        />

        <p className="text-blue">Записи</p>
      </div>
      {currentImage()}
      {isSelectBlock
      ? <SelectAppointmentsBlock isLink={isLink} statusAction={statusAction} appointments={appointments} />
      : null
      }
    </div>
  );
}
