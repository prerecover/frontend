'use client';
import BurgerMenu from '@/components/layout/burgerMenu';
import Sidebar from '@/components/layout/sidebar';
import NotificationModal from '@/entities/Notification/NotificationModal';
import AuthProvider from '../(auth)/auth-wrapper';
import { usePathname } from 'next/navigation';
import Footer from '@/components/layout/footer';
import Script from 'next/script';
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const noLayoutRoutes = ['/add-appointment', '/create-appointment'];
  return (
    <>
      <AuthProvider>
        <section>
          <div
            className={
              noLayoutRoutes.includes(pathname)
                ? 'h-screen'
                : 'w-full overflow-y-auto flex flex-col flex-grow mt-[64px] overflow-x-hidden mobile:pb-[70px] layout-1024:pl-[100px] closed_sidebar:pl-[258px] h-screen '
            }
          >
            <NotificationModal />
            {children}
          </div>
          <Sidebar />
          <Footer />
          <BurgerMenu />
        </section>
        <Script
          src="//code.jivo.ru/widget/PCxtgM4g4J"
          strategy="afterInteractive"
        />
      </AuthProvider>
    </>
  );
}
