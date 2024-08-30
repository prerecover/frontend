import BurgerMenu from '@/components/layout/burgerMenu';
import AdminSidebar from '@/components/layout/adminSidebar';

export default async function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <section>
                <div className='w-full overflow-y-auto flex flex-col flex-grow pt-[64px] overflow-x-hidden mobile:pb-[70px] layout-1024:pl-[100px] closed_sidebar:pl-[258px]'>
                    {children}
                </div>
                <AdminSidebar />
                <BurgerMenu />
            </section>
        </>
    );
}
