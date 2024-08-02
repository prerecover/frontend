import MobileHeader from '@/components/layout/mobileHeader';
import AddAppointmentBlock from '@/features/AddAppointmentBlock';

export default async function Page() {
    return (
        <>
            <MobileHeader title='Запись' end={false} />
            <AddAppointmentBlock />
        </>
    );
}
