'use client';
import RecomendationSwiper from '@/components/recomendationSwiper';
import { ISearch } from '../SearchBlock';

export default function RecomendationsBlock({
  recomendationsData,
}: {
  recomendationsData: ISearch;
}) {
  return (
    <div className="flex flex-col p-7">
      <RecomendationSwiper data={recomendationsData} />
    </div>
  );
}
