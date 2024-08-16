import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import './globals.css';
import { ApolloWrapper } from './apollo-wrapper';
import { Toaster } from '@/components/ui/toaster';

const montserrat = Montserrat({
    subsets: ['latin', 'cyrillic'],
    weight: ['400', '500', '600', '700'],
    style: ['normal'],
    variable: '--font-montserrat',
});

export const metadata: Metadata = {
    // manifest: "/manifest.json",
    title: 'Pre Recover',
    description: 'Aggregate medical services',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <head>
                <link rel='shortcut icon' href='/assets/favicon.ico' />
            </head>
            <body className={montserrat.className}>
                <ApolloWrapper>
                    {children}
                    <Toaster />
                </ApolloWrapper>
            </body>
            <script src='//code.jivo.ru/widget/PCxtgM4g4J' async></script>
        </html>
    );
}
