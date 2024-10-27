import RecentSlider from '@/components/recentSwiper';
import { Search } from '../SearchBlock';

export default function RecomendationsBlock({ data }: { data: Search }) {
    return (
        <div className='flex flex-col p-7'>
            <RecentSlider data={data} />
        </div>
    );
}
