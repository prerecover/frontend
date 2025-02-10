import HeaderCenter from '@/components/layout/headerCenter';
import AddAppointmentBlock from '@/features/AddAppointmentBlock';

export default function Page() {
  return (
    <>
      <HeaderCenter title="Создание записи" />
      <AddAppointmentBlock />
    </>
  );
}
