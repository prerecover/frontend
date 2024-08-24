import { Progress } from '@/components/ui/progress';
import { Text } from '@/components/ui/text';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

export default function Stats() {
    const data = {
        labels: ['Оценка состояния', 'Точность заключения', 'Эффективность', 'Изучение организма'],
        datasets: [
            {
                data: [9, 15, 61, 80],
                backgroundColor: [
                    'rgba(0, 100, 250, 0.5)',
                    'rgba(0, 100, 250, 0.6)',
                    'rgba(0, 100, 250, 0.8)',
                    'rgba(0, 100, 250, 1)',
                ],
                hoverOffset: 4,
            },
        ],
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
    };
    return (
        <>
            <div className='flex flex-col'>
                <div className='max-w-[180px]'>
                    <Doughnut data={data} options={options} />
                </div>
            </div>
            <div className='flex flex-col mx-auto w-full px-[10px] gap-2 pc:hidden'>
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
        </>
    );
}
