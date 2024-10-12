import BoxWrapper from '@/components/ui/box-wrapper';
import { Text } from '@/components/ui/text';
import { ILinkStats } from '@/shared/types/stats';
import LinksDouhgnut from './links-doughnut';

export default function LinkStats({ linkStats }: { linkStats: ILinkStats }) {
    return (
        <BoxWrapper color='white' className='p-4 border-none w-full'>
            <Text className='text-[22px] font-medium mb-[26px]'>Ссылки на регистрацию</Text>
            <LinksDouhgnut linkStats={linkStats} />
        </BoxWrapper>
    );
}
