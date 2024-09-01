import BoxWrapper from '@/components/ui/box-wrapper';
import { Text } from '@/components/ui/text';
import ClinicDoughnut from './clinic-doughnut';
import LinksDouhgnut from './links-doughnut';
import { IClinicStats } from '@/shared/types/stats';

export default function ClinicStats({ clinicStats }: { clinicStats: IClinicStats }) {
    return (
        <div className='flex gap-4'>
            <BoxWrapper color='white' className='p-4 border-none w-full'>
                <Text className='text-[22px] font-medium mb-[26px]'>Клиники</Text>
                <ClinicDoughnut clinicStats={clinicStats}/>
            </BoxWrapper>
            <BoxWrapper color='white' className='p-4 border-none w-full'>
                <Text className='text-[22px] font-medium mb-[26px]'>Ссылки на регистрацию</Text>
                <LinksDouhgnut />
            </BoxWrapper>
        </div>
    );
}
