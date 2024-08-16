import Header from '@/components/layout/header';
import MobileHeader from '@/components/layout/mobileHeader';
import AddAppointmentBlock from '@/features/AddAppointmentBlock';

export default async function Page() {
    return (
        <>
            <Header title={['Поиск']} />
            <MobileHeader title='Запись' end={false} />
            <AddAppointmentBlock />
        </>
    );
}
