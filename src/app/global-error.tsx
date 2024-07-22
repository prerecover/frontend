"use client";

import { Button } from "@/components/ui/button";
import * as Sentry from "@sentry/nextjs";
import NextError from "next/error";
import Image from "next/image";
import { useRouter } from "next/navigation";
import errorImg from '/public/assets/500.svg'
import { useEffect } from "react";

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
    const router = useRouter()
    useEffect(() => {
        Sentry.captureException(error);
    }, [error]);

    return (
        <html>
            <body>
                <div className="flex-center w-dvw h-dvh gap-9 flex-col">

                    <Image src={errorImg} alt="Internal Server Error" width={500} height={373} priority />
                    <Button width="436px" onClick={() => router.push("/home")}>Вернуться</Button>
                </div>
            </body>
        </html>
    );
}
