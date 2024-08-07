import { GraphCol } from '@/components/ui/graph-col';
import { Progress } from '@/components/ui/progress';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';

export default function DoctorStats({ className }: { className?: string }) {
    return (
        <>
            <div className={cn('flex flex-col max-w-[421px]', className)}>
                <Text className='font-semibold text-[16px] mt-[20px]' type='h2'>
                    Лечилось всего:
                </Text>
                <Text className='m-auto mt-[15px] text-[32px] font-medium' type='h4'>
                    3245
                </Text>
                <Progress value={60} className=' h-[6px] mt-4 w-full' color='#FFFFFF' />
                <Text className='font-semibold text-[16px] mt-10' type='h2'>
                    Помогло на:
                </Text>
                <div className='flex justify-around gap-10 desktop:gap-4 mt-6'>
                    <GraphCol />
                    <GraphCol />
                    <GraphCol />
                    <GraphCol />
                </div>
            </div>
        </>
    );
}
