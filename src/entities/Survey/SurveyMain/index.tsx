// import { ISurvey } from '@/shared/types/survey.interface';
// import SurveyMainCard from '../SurveyMainCard';
import AppointmentAdminCard from '@/entities/Appointment/AppointmentAdminCard';
import { IAppointment } from '@/shared/types/appointment.interface';

export default function SurveyMain({ appointments }: { appointments: IAppointment[] }) {
    return (
        <div className='grid grid-cols-3 gap-4 p-4'>
            {appointments.map((el) => (
                <AppointmentAdminCard appointment={el} key={el._id} />
            ))}
        </div>
    );
}
