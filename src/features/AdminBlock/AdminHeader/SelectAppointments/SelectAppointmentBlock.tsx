import { IAppointment } from '@/shared/types/appointment.interface';
import SelectAppointmentsItem from './SelectAppointmentsItem';

interface ISelectAppointmentsBlockProps {
  appointments: IAppointment[];
  statusAction?: React.Dispatch<React.SetStateAction<string>>;
  isLink: boolean;
}

export default function SelectAppointmentsBlock({
  appointments,
  statusAction,
  isLink,
}: ISelectAppointmentsBlockProps) {
  return (
    <div className="absolute transition-all ease-in top-16 z-10 bg-white rounded-xl shadow-md">
      <SelectAppointmentsItem
        statusAction={statusAction}
        isLink={isLink}
        status="In process"
        title="В процессе"
        link="/"
        count={
          appointments.filter(
            (appointment) => appointment.status === 'In process'
          ).length
        }
      />
      <SelectAppointmentsItem
        statusAction={statusAction}
        status="Approoved"
        isLink={isLink}
        title="Подтвержденные"
        link="/"
        count={
          appointments.filter(
            (appointment) => appointment.status === 'Approoved'
          ).length
        }
      />
      <SelectAppointmentsItem
        statusAction={statusAction}
        status="Rejected"
        isLink={isLink}
        title="Отмененные"
        link="/"
        count={
          appointments.filter(
            (appointment) => appointment.status === 'Rejected'
          ).length
        }
      />
    </div>
  );
}
