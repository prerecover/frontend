import Header from '@/components/layout/header';
import MobileHeader from '@/components/layout/mobileHeader';
import AppointmentWarnList from '@/entities/Appointment/AppointmentWarnList';
import HealthAbout from '@/features/HealthAbout';

export default async function Home() {
    return (
        <>
            <Header title={['О здоровье']} />
            <MobileHeader />
            <AppointmentWarnList />
            <HealthAbout />
        </>
    );
}
