'use client';
import RecomendationSwiper from '@/components/recomendationSwiper';
import { Search } from '../SearchBlock';

export default function RecomendationsBlock({ recomendationsData }: { recomendationsData: Search }) {
    return (
        <div className='flex flex-col p-7'>
            <RecomendationSwiper data={recomendationsData} />
        </div>
    );
}
