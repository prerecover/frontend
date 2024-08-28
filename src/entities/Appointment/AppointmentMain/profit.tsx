import BoxWrapper from '@/components/ui/box-wrapper';
import { Progress } from '@/components/ui/progress';
import { Text } from '@/components/ui/text';
import { useEffect, useState } from 'react';

export default function Profit({ withTitle = true }: { withTitle?: boolean }) {
    const [mobile, setMobile] = useState(false);
    useEffect(() => {
        setMobile(window.innerWidth <= 1023);
    }, []);
    return (
        <>
            <div className='flex w-full gap-4 h-full '>
                <div className='flex-col w-full min-w-[360px] h-full'>
                    <div
                        className={
                            'flex-between bg-blue-200 gap-2 h-[64px] px-4 rounded-tl-[10px] rounded-tr-[10px] mobile:hidden'
                        }>
                        <div className='flex gap-2 '>
                            <Text type='p'>Польза</Text>
                        </div>
                        <Text type='h1' className='text-[30px] font-medium'>
                            0
                        </Text>
                    </div>
                    <div className='flex flex-col h-full laptop:bg-blue-100 pc:bg-blue-100 laptop:p-4 pc:p-4 '>
                        <BoxWrapper
                            color={!mobile ? 'blue' : 'white'}
                            className='flex flex-col border-blue-200 max-h-[150px] px-[20px] pt-[10px] font-medium gap-[14px] pb-[20px]'>
                            <div className='flex flex-col gap-2'>
                                {withTitle && <Text className='text-[14px] '>Польза</Text>}
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
                                <Progress
                                    value={50}
                                    className='h-[6px]'
                                    color='bg-[#00CC5E]'
                                    style={{ backgroundColor: '#E5FFF1' }}
                                />
                            </div>
                        </BoxWrapper>
                        <BoxWrapper
                            color={!mobile ? 'blue' : 'white'}
                            className='flex-center flex-col border-blue-200 text-[14px] font-medium py-[63px] px-[50px] desktop:justify-center mobile:my-[20px] mt-[20px] h-full max-h-[400px]'>
                            <div className='flex-center gap-1'>
                                <Text type='h1'>Все</Text>
                                <Text className='text-blue '>остальные показатели</Text>
                            </div>
                            <Text>будут доступны после окончания записи</Text>
                        </BoxWrapper>
                    </div>
                </div>
                <div className='flex-col h-full w-full min-w-[360px] reverse_pc:hidden'>
                    <div
                        className={
                            'flex-between bg-blue-200 gap-2 h-[64px] px-4 rounded-tl-[10px] rounded-tr-[10px] mobile:hidden'
                        }>
                        <div className='flex gap-2 '>
                            <Text type='p'>Опрос</Text>
                        </div>
                        <Text type='h1' className='text-[30px] font-medium'>
                            0
                        </Text>
                    </div>
                    <div className='flex flex-col h-full laptop:bg-blue-100 pc:bg-blue-100 laptop:p-4 pc:p-4 '></div>
                </div>
            </div>
        </>
    );
}
