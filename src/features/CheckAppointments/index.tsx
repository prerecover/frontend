'use client';
import AppointmentAdminCard from '@/entities/Appointment/AppointmentAdminCard';
import { cn } from '@/lib/utils';
import { IAppointment } from '@/shared/types/appointment.interface';

export default function CheckAppointments({ appointments }: { appointments: IAppointment[] }) {
    return (
        <div className='flex flex-col mt-4 relative'>
            <div className={cn('flex justify-center gap-2 w-full')}>
                <div className='flex flex-col gap-4 px-4 w-full desktop:grid desktop:grid-cols-3 min-h-[228px]'>
                    {appointments.map((appointment) => (
                        <AppointmentAdminCard key={appointment._id} appointment={appointment} />
                    ))}
                </div>
            </div>
        </div>
    );
}
