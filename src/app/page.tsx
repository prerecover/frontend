'use client'

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        throw new Error('erroboundary')
    }, [])
    return (
        <>


            <h1 className="">asdads</h1>
        </>
    );
}
