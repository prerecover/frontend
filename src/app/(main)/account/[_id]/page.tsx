import Header from '@/components/layout/header';
import MobileHeader from '@/components/layout/mobileHeader';
import AppointmentWarnList from '@/entities/Appointment/AppointmentWarnList';
import { AccountModal } from '@/features/AccountModal';

export default async function Page() {
  return (
    <>
      <MobileHeader title="Профиль" />
      <Header title={['Профиль']} />
      <AppointmentWarnList />
      <AccountModal />
    </>
  );
}
