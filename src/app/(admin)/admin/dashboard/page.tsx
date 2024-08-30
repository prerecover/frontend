import Header from '@/components/layout/header';
import AdminDasboard from '@/features/AdminDashboard';

export default async function Page() {
    return (
        <>
            <Header title={['Работа сайта']} />
            <div className='p-4'>
                <AdminDasboard />
            </div>
        </>
    );
}
