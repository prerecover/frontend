
import Header from "@/components/layout/header";
import AuthProvider from "../(auth)/auth-wrapper";
import Sidebar from "@/components/layout/sidebar";

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

                    <div className="w-full p-4 overflow-y-auto flex flex-col flex-grow pt-[81px] overflow-x-hidden mobile:pb-[81px] layout-1024:pl-[116px] closed_sidebar:pl-[272px]">



                        {children}
                    </div>
                    <Sidebar className="mobile:hidden" />
                </section >
            </AuthProvider>
        </>

    )
}
