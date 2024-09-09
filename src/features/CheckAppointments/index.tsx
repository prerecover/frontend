'use client';
import { toast } from '@/components/ui/use-toast';
import AppointmentAdminCard from '@/entities/Appointment/AppointmentAdminCard';
import { cn } from '@/lib/utils';
import { IAppointment } from '@/shared/types/appointment.interface';
import { gql, useMutation } from '@apollo/client';

export default function CheckAppointments({ appointments }: { appointments: IAppointment[] }) {
    return (
        <div className='flex flex-col mt-4'>
            <div className={cn('flex justify-center gap-2 w-full')}>
                <div className='flex flex-col gap-4 w-full desktop:grid desktop:grid-cols-3 min-h-[228px]'>
                    {appointments
                        .filter((appointment) => new Date(appointment.timeStart) > new Date())

                        .map((appointment) => (
                            <AppointmentAdminCard key={appointment._id} appointment={appointment} />
                        ))}
                </div>
            </div>
        </div>
    );
}
