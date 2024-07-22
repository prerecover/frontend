import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import { ApolloWrapper } from "./apollo-wrapper";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
    subsets: ["latin", "cyrillic"],
    weight: ['400', '500', '600', '700'],
    style: ['normal'],
    variable: '--font-montserrat'
});


export const metadata: Metadata = {
    title: "Pre-recover",
    description: "Aggregate medical services",
};


// Adds messages only in a dev environment

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    loadDevMessages();
    loadErrorMessages();
    return (
        <html lang="en">
            <body className={montserrat.className}>

                <ApolloWrapper>
                    {children}
                </ApolloWrapper>
                <Toaster />

            </body>
        </html >
    );
}
