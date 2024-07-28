import { FC } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
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
        ctx.font = 'bold 26px sans-serif';
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.fillText('200', x, y);
        ctx.font = '10px sans-serif';
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.fillText('пациентов', x, y + 15);
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
export const DoughnutBlock: FC = () => {
    return (
        <div className='flex-between'>
            <div className='flex-center w-[185px] h-[185px] mt-4'>
                <Doughnut data={data} options={options} plugins={[doughnutLabel]} />
            </div>

            <div className='flex flex-col gap-[20px]'>
                <div className='pl-[18px] relative text-[14px] font-medium flex items-center gap-3'>
                    <div className='rounded-full w-[10px] h-[10px] bg-[#0064FA] '></div>
                    <p>Рассчитная польза 4%</p>
                </div>
                <div className='pl-[18px] relative text-[14px] font-medium flex items-center gap-3'>
                    <div className='rounded-full w-[10px] h-[10px] bg-[#0064fab3]'></div>
                    <p>Полученая польза 10%-15%</p>
                </div>
            </div>
        </div>
    );
};
