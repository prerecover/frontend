import BoxWrapper from '@/components/ui/box-wrapper';
import { Progress } from '@/components/ui/progress';
import { Text } from '@/components/ui/text';

export default function ProfitStats() {
    return (
        <BoxWrapper
            color='white'
            className='flex flex-col border-blue-200 max-h-[150px] px-[20px] pt-[10px] font-medium gap-[14px] pb-[20px]'>
            <Text className='text-[14px] '>Польза</Text>
            <div className='flex flex-col gap-2'>
                <div className='flex-between'>
                    <Text className='text-[12px]'>Расчитанная</Text>
                    <Text className='text-[14px]'>50%</Text>
                </div>
                <Progress value={20} className='h-[6px]' color='bg-[#75ABFC]' />
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex-between'>
                    <Text className='text-[12px]'>Полученная</Text>
                    <Text className='text-[14px]'>20%</Text>
                </div>
                <Progress value={50} className='h-[6px]' color='bg-[#00CC5E]' style={{ backgroundColor: '#E5FFF1' }} />
            </div>
        </BoxWrapper>
    );
}
