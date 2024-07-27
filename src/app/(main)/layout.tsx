import Header from '@/components/layout/header';
import AuthProvider from '../(auth)/auth-wrapper';
import Sidebar from '@/components/layout/sidebar';
import BurgerMenu from '@/components/layout/burgerMenu';
import MobileFooter from '@/components/layout/mobileFooter';
import ChildrenMain from '@/components/layout/childrenMain';

export default async function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <AuthProvider>
                <section>
                    <Header />
                    <ChildrenMain>{children}</ChildrenMain>
                    <Sidebar />
                    <BurgerMenu />
                    <MobileFooter />
                </section>
            </AuthProvider>
        </>
    );
}
