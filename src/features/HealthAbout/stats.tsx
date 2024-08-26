import { Text } from '@/components/ui/text';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import BoxWrapper from '@/components/ui/box-wrapper';

export default function Stats() {
    const data = {
        labels: ['Оценка состояния', 'Эффективность', 'Точность заключения', 'Изучение организма'],
        datasets: [
            {
                data: [12, 22, 14, 22],
                backgroundColor: [
                    'rgba(0, 100, 250, 1)',
                    'rgba(0, 100, 250, 0.8)',
                    'rgba(0, 100, 250, 0.6)',
                    'rgba(0, 100, 250, 0.6)',
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
            <div className='flex flex-col mt-[25px] '>
                <BoxWrapper
                    color='white'
                    className='flex flex-col border-blue-200 w-full pt-[10px] font-medium gap-[14px] pb-[20px] '>
                    <Doughnut data={data} options={options} className='max-w-[150px] max-h-[150px] mx-auto' />
                    <div className='flex flex-col gap-4'>
                        <div className=' text-[14px] font-medium flex items-center gap-3'>
                            <div className='rounded-full w-[10px] h-[10px] bg-[#0064FA] '></div>
                            <div className='flex-between w-full'>
                                <p>Оценка состояния</p>
                                <p className='font-semibold text-[16px]'>12%</p>
                            </div>
                        </div>
                        <div className='text-[14px] font-medium flex items-center gap-3'>
                            <div className='rounded-full w-[10px] h-[10px] bg-[#0064fab3]'></div>
                            <div className='flex-between w-full'>
                                <p>Эффективность</p>
                                <p className='font-semibold text-[16px]'>22%</p>
                            </div>
                        </div>
                        <div className='text-[14px] font-medium flex items-center gap-3'>
                            <div className='rounded-full w-[10px] h-[10px] bg-[#0064fab3]'></div>
                            <div className='flex-between w-full'>
                                <p>Полученная польза</p>
                                <p className='font-semibold text-[16px]'>14%</p>
                            </div>
                        </div>
                        <div className='border border-solid border-blue-100 mt-3 h-[1px]'></div>
                        <div className='flex-between w-full'>
                            <Text className='font-medium text-[16px]'>Изучение организма</Text>
                            <p className='font-semibold text-[16px]'>14%</p>
                        </div>
                    </div>
                </BoxWrapper>
            </div>
            {/* <div className='flex flex-col m-auto w-full px-[10px] gap-2 pc:hidden'> */}
            {/*     <div className='flex flex-col gap-3'> */}
            {/*         <div className='flex-between font-medium'> */}
            {/*             <Text className='text-[12px]'>Оценка состояния</Text> */}
            {/*             <Text className='text-[14px]'>9%</Text> */}
            {/*         </div> */}
            {/*         <Progress value={9} className='rounded-[5px]' /> */}
            {/*     </div> */}
            {/*     <div className='flex flex-col gap-3'> */}
            {/*         <div className='flex-between font-medium'> */}
            {/*             <Text className='text-[12px]'>Точность заключения</Text> */}
            {/*             <Text className='text-[14px]'>15%</Text> */}
            {/*         </div> */}
            {/*         <Progress value={15} className='rounded-[5px]' /> */}
            {/*     </div> */}
            {/*     <div className='flex flex-col gap-3'> */}
            {/*         <div className='flex-between font-medium'> */}
            {/*             <Text className='text-[12px]'>Эффективность</Text> */}
            {/*             <Text className='text-[14px]'>61%</Text> */}
            {/*         </div> */}
            {/*         <Progress value={61} className='rounded-[5px]' /> */}
            {/*     </div> */}
            {/*     <div className='flex flex-col gap-3'> */}
            {/*         <div className='flex-between font-medium'> */}
            {/*             <Text className='text-[12px]'>Изучение организма</Text> */}
            {/*             <Text className='text-[14px]'>80%</Text> */}
            {/*         </div> */}
            {/*         <Progress value={80} className='rounded-[5px]' /> */}
            {/*     </div> */}
            {/* </div> */}
        </>
    );
}
