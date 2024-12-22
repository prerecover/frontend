import Header from '@/components/layout/header';
import MobileHeader from '@/components/layout/mobileHeader';
import AppointmentWarnList from '@/entities/Appointment/AppointmentWarnList';
import AccountBlock from '@/entities/User/Account';

export default async function Page() {
    return (
        <>
            <MobileHeader title='Профиль' />
            <Header title={['Профиль']} />
            <AppointmentWarnList />
            <AccountBlock />
        </>
    );
}
