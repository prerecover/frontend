import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import { Text } from '@/components/ui/text';
import { ILinkStats } from '@/shared/types/stats';

const data = {
    labels: ['Зарегистрировано', 'Удаленно'],
    datasets: [
        {
            data: [5, 7],
            backgroundColor: ['#0064FA', 'rgba(0, 100, 250, 0.7)'],
            borderColor: ['#fff'],
            borderWidth: 5,
            borderRadius: 7,
            cutout: 60,
        },
    ],
};

const doughnutLabel = {
    id: 'doughnutLabel',
    afterDatasetDraw(chart: any) {
        const { ctx } = chart;
        const x = chart.getDatasetMeta(0).data[0].x;
        const y = chart.getDatasetMeta(0).data[0].y;
        ctx.save();
        ctx.font = '16px sans-serif';
        ctx.fillStyle = '#7D7F82';
        ctx.textAlign = 'center';
        ctx.fillText('Ср.Время', x, y - 15);
        ctx.font = 'bold 26px sans';
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.fillText('31 мин', x, y + 15);
    },
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
export default function LinksDouhgnut({ linkStats }: { linkStats: ILinkStats }) {
    return (
        <div className='flex items-center'>
            <div className='flex-center w-[185px] h-[185px]'>
                <Doughnut data={data} options={options} plugins={[doughnutLabel]} />
            </div>
            <div className='flex flex-col gap-[20px]'>
                <div className='pl-[18px] relative text-[14px] font-medium flex items-center gap-3'>
                    <div className='rounded-full w-[10px] h-[10px] bg-[#0064FA] '></div>
                    <Text className='text-grey-700 text-[18px]'>Сгенерированно</Text>
                    <Text className='text-[24px] font-semibold'>{linkStats.totalGenerated}</Text>
                </div>
                <div className='pl-[18px] relative text-[14px] font-medium flex items-center gap-3'>
                    <div className='rounded-full w-[10px] h-[10px] bg-[#0064fab3]'></div>
                    <Text className='text-grey-700 text-[18px]'>Использованно</Text>
                    <Text className='text-green text-[24px] font-semibold'>{linkStats.totalUsed}</Text>
                </div>
            </div>
        </div>
    );
}
