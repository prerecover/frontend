'use client';

import { useAuth } from '@/app/(auth)/auth-wrapper';
import { fullTime } from '@/shared/utils/formatDate';
import AppointmentNotify from './AppointmentNotify';
import AppointmentWarn from './AppointmentWarn';

export default function AppointmentWarnList() {
  const { user } = useAuth();
  return (
    <div className="flex flex-col gap-1">
      {user?.appointments
        ?.filter(
          (appointment) =>
            new Date(appointment.timeStart).getTime() - new Date().getTime() > 0
        )
        ?.filter((appointment) => appointment.status === 'Approoved')
        ?.filter(
          (appointment) =>
            fullTime(new Date(appointment.timeStart)).day -
              fullTime(new Date()).day <=
            3
        )
        .map((appointment) => (
          <AppointmentNotify
            appointment={appointment}
            key={appointment.timeStart}
          />
        ))}
      {user?.appointments
        // ?.filter((appointment) => new Date(appointment.timeStart).getTime() - new Date().getTime() > 0)
        ?.filter((appointment) => appointment.status === 'Pending')
        // ?.filter((appointment) => fullTime(new Date(appointment.timeStart)).day - fullTime(new Date()).day <= 3)
        .map((appointment) => (
          <AppointmentWarn
            appointment={appointment}
            key={appointment.timeStart}
          />
        ))}
    </div>
  );
}
