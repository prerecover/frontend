import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ApolloWrapper } from "./apollo-wrapper";
import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "./(auth)/auth-wrapper";

const montserrat = Montserrat({
    subsets: ["latin", "cyrillic"],
    weight: ['400', '500', '600', '700'],
    style: ['normal'],
    variable: '--font-montserrat'
});


export const metadata: Metadata = {
    manifest: "/manifest.json",
    title: "Pre Recover",
    description: "Aggregate medical services",
};


// Adds messages only in a dev environment

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <ApolloWrapper>
                    {/* <AuthProvider> */}
                    {children}
                    <Toaster />
                    {/* </AuthProvider> */}
                </ApolloWrapper >
            </body>
        </html>

    );
}
