import { IAppointment } from '../../types/appointment.types';
import CardAppointment from './CardAppointment';


interface IAppointmentProps {
  appointments: IAppointment[]
}

export default function Appointment({appointments}: IAppointmentProps) {
  return (
    <div className="grid grid-cols-2 gap-4 min-h-0 h-full max-sm:grid-cols-1 max-sm:gap-2">
      {appointments &&
        appointments.map((item) => <CardAppointment appointment={item} />)}
    </div>
  );
}
