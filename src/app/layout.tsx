import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import './globals.css';
import { ApolloWrapper } from './apollo-wrapper';
import { Toaster } from '@/components/ui/toaster';

import Script from 'next/script';
import { Suspense } from 'react';
import YandexMetrika from '@/components/yandexMetrica';
import Blur from './blur';
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
                <Script id='metrika-counter' strategy='afterInteractive'>
                    {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
              ym(98492264, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
              });`}
                </Script>
                <Suspense fallback={<></>}>
                    <YandexMetrika />
                </Suspense>
                <ApolloWrapper>
                    {children}
                    <Toaster />
                </ApolloWrapper>
                <Blur />
            </body>
            <script src='//code.jivo.ru/widget/PCxtgM4g4J' async></script>
        </html>
    );
}
