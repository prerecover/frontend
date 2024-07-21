import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={montserrat.className}>{children}</body>
        </html>
    );
}
