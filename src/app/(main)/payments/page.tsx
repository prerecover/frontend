import MobileHeader from '@/components/layout/mobileHeader';
import PaymentsBlock from '@/features/PaymentsBlock';

export default async function Page() {
    return (
        <>
            <MobileHeader title='Платежи' />
            <div className='p-4'>
                <PaymentsBlock />
            </div>
        </>
    );
}
