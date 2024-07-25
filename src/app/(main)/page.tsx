import DoctorSwiper from "@/components/doctorSwiper";
import MobileHeader from "@/components/layout/mobileHeader";
import { FilterBtn } from "@/components/ui/filter-btn";
import MainPosts from "@/features/MainPosts";
import { getClient } from "@/lib/apollo-client";
import { gql } from "@apollo/client";
import { Suspense } from "react";

interface Country {
    __typename: string;
    slug?: string;
    title?: string;
}

export default async function Home() {
    const NEWS_QUERY = gql(`
        query getNews{
            newsAll{
            _id,
            text,
            title,
        }
    }
    `)
    const DOCTORS_QUERY = gql(`
        query getDoctors{
            doctors{
            _id,
            firstName,
            lastName,
            surname,
            specialization
        }
    }
    `)
    const { data: doctorsData } = await getClient().query({ query: DOCTORS_QUERY })
    const { data: newsData } = await getClient().query({ query: NEWS_QUERY })

    return (
        <>
            <MobileHeader />
            <DoctorSwiper data={doctorsData.doctors} />
            <MainPosts data={newsData.newsAll} />

        </>
    );
}

