'use client';

import { useAuth } from '@/app/(auth)/auth-wrapper';
import AppointmentsWarn from './AppointmentWarn';
import { fullTime } from '@/shared/utils/formatDate';

export default function AppointmentWarnList() {
    const { user } = useAuth();
    return (
        <div className='flex flex-col gap-1'>
            {user?.appointments
                ?.filter((appointment) => new Date(appointment.timeStart).getTime() - new Date().getTime() > 0)
                ?.filter((appointment) => fullTime(new Date(appointment.timeStart)).day - fullTime(new Date()).day <= 3)
                .map((appointment) => <AppointmentsWarn appointment={appointment} key={appointment.timeStart} />)}
        </div>
    );
}
