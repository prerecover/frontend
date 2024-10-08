import AuthProvider from '../(auth)/auth-wrapper';
import Sidebar from '@/components/layout/sidebar';
import BurgerMenu from '@/components/layout/burgerMenu';
import NotificationModal from '@/entities/Notification/NotificationModal';

export default async function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <AuthProvider>
                <section>
                    <div className='w-full overflow-y-auto flex flex-col flex-grow pt-[64px] overflow-x-hidden mobile:pb-[70px] layout-1024:pl-[100px] closed_sidebar:pl-[258px]'>
                        <NotificationModal />
                        {children}
                    </div>
                    <Sidebar />
                    <BurgerMenu />
                </section>
            </AuthProvider>
        </>
    );
}
