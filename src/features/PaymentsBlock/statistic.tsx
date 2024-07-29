import { ChartConfig, ChartContainer } from '@/components/ui/chart';
import { Text } from '@/components/ui/text';
import { FC } from 'react';
import { Bar, BarChart, XAxis } from 'recharts';

const chartData = [
    { month: 'Январь', mobile: 10 },
    { month: 'Февраль', mobile: 5 },
    { month: 'Март', mobile: 15 },
    { month: 'Апрель', mobile: 20 },
    { month: 'Май', mobile: 7 },
    { month: 'Июнь', mobile: 8 },
];

const chartConfig = {
    mobile: {
        label: 'Mobile',
        color: '#60a5fa',
    },
} satisfies ChartConfig;
export const Statistic: FC = () => {
    return (
        <div className='flex flex-col bg-white p-4 max-h-[146px] rounded-[12px]'>
            <Text type='h3' className='text-[16px] font-semibold '>
                Статистика
            </Text>
            <ChartContainer config={chartConfig} className='min-h-[10px] w-full'>
                <BarChart accessibilityLayer data={chartData}>
                    <XAxis
                        dataKey='month'
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <Bar dataKey='mobile' fill='var(--color-mobile)' radius={12} className='hover:bg-blue-200' />
                </BarChart>
            </ChartContainer>
        </div>
    );
};
