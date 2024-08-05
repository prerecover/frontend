import MobileHeader from '@/components/layout/mobileHeader';
import AppointmentWarnList from '@/entities/Appointment/AppointmentWarnList';
import AccountBlock from '@/entities/User/Account';

export default async function Page() {
    return (
        <>
            <MobileHeader />
            <AppointmentWarnList />
            <AccountBlock />
        </>
    );
}
