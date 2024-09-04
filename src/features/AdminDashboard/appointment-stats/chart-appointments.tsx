import { ChartConfig, ChartContainer } from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

const chartData = [
    { month: 'Пройдено записей', desktop: 186 },
    { month: 'Подтвержденных записей', desktop: 305 },
    { month: 'Отклоненных записей', desktop: 237 },
];

const chartConfig = {
    desktop: {
        label: 'Desktop',
        color: '#D6E7FF',
    },
} satisfies ChartConfig;
export default function AppointmentChart() {
    return (
        <ChartContainer config={chartConfig} className='h-[400px] max-w-[500px]'>
            <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} height={10} />
                <XAxis
                    dataKey='month'
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    width={50}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <Bar dataKey='desktop' fill='var(--color-desktop)' radius={4} />
            </BarChart>
        </ChartContainer>
    );
}
