import { Slider } from '@/components/ui/slider';
import { Text } from '@/components/ui/text';
import { FC, useState } from 'react';

interface MultiRangeProps {
    title: string;
}

export const MultiRange: FC<MultiRangeProps> = ({ title }) => {
    const [value, setValue] = useState<number[]>([20, 80]);
    return (
        <div className='text-[16px] font-medium'>
            <div className='flex flex-col gap-[18px]'>
                <div className='flex-between'>
                    <Text type='h2'>{title}</Text>
                    <Text type='h2'>
                        {value[0]}-{value[1]}%
                    </Text>
                </div>
                <Slider value={value} min={0} max={100} onValueChange={(value) => setValue(value)} />
            </div>
        </div>
    );
};
