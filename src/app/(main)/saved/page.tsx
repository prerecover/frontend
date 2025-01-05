import Header from '@/components/layout/header';
import MobileHeader from '@/components/layout/mobileHeader';
import SavedMain from '@/entities/Saved/SavedMain';
import { cookies } from 'next/headers';

export default async function Page() {
    const { get } = cookies();

    return (
        <>
            <Header title={['Сохраненное']} />
            <MobileHeader title='Сохраненное' end={false} />
            <div className='p-4 flex flex-col'>
                <SavedMain token={get('access_token')?.value || ''} />
            </div>
        </>
    );
}
