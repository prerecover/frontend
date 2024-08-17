import { Progress } from '@/components/ui/progress';
import { Text } from '@/components/ui/text';

export default function Stats() {
    return (
        <div className='flex flex-col mx-auto w-full px-[10px] gap-2'>
            <div className='flex flex-col gap-3'>
                <div className='flex-between font-medium'>
                    <Text className='text-[12px]'>Оценка состояния</Text>
                    <Text className='text-[14px]'>9%</Text>
                </div>
                <Progress value={9} className='rounded-[5px]' />
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex-between font-medium'>
                    <Text className='text-[12px]'>Точность заключения</Text>
                    <Text className='text-[14px]'>15%</Text>
                </div>
                <Progress value={15} className='rounded-[5px]' />
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex-between font-medium'>
                    <Text className='text-[12px]'>Эффективность</Text>
                    <Text className='text-[14px]'>61%</Text>
                </div>
                <Progress value={61} className='rounded-[5px]' />
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex-between font-medium'>
                    <Text className='text-[12px]'>Изучение организма</Text>
                    <Text className='text-[14px]'>80%</Text>
                </div>
                <Progress value={80} className='rounded-[5px]' />
            </div>
        </div>
    );
}
