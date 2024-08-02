'use client';
import MonthSwiper from '@/components/monthSwiper';
import { UserInfo } from './userInfo';
import { FilterBox } from '@/components/ui/filter-box';
import { Suspense, useState } from 'react';
import { IAppointment } from '@/shared/types/appointment.interface';
import AppointmentAccountCard from '@/entities/Appointment/AppointmentAccountCard';
import { monthIndexes, monthTable } from '@/shared/utils/calendar';
import { AccountPopup } from '@/components/ui/accountPopup';
import AccountForm from '@/features/AccountForm';
import Loader from '@/components/ui/loader';
import { Avatar } from '@/features/AccountForm/avatar';

export default function AccountBlock({ data }: { data: IAppointment[] }) {
    const [filter, setFilter] = useState<string>('Текущие');
    const [openPopup, setOpenPopup] = useState<boolean>(false);

    const filters = ['Текущие', 'История'];
    const [activeMonth, setActiveMonth] = useState(monthIndexes[new Date().getMonth()]);
    return (
        <>
            <div className='h-[84px] w-full relative z-0 flex'>
                <Avatar />
            </div>
            <div className='bg-white'>
                <AccountForm />
            </div>
        </>
    );
}
