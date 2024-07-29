import MobileHeader from '@/components/layout/mobileHeader';
import PaymentsBlock from '@/features/PaymentsBlock';
import { Suspense } from 'react';

export default async function Page() {
    return (
        <>
            <MobileHeader title='Платежи' />
            <div className='p-4'>
                <Suspense fallback={<p>Loading...</p>}>
                    <PaymentsBlock />
                </Suspense>
            </div>
        </>
    );
}
