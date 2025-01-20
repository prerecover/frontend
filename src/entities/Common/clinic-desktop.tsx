'use client';
import { cn } from '@/lib/utils';
import { IClinic } from '@/shared/types/clinic.interface';
import Image from 'next/image';
import ClinicInfo from '@/entities/Clinic/ClinicMain/clinic-info';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import BoxWrapper from '@/components/ui/box-wrapper';
import { formatDate } from '@/shared/utils/formatDate';
import { Text } from '@/components/ui/text';
import { Progress } from '@/components/ui/progress';

export default function ClinicDesktop({ clinic, className }: { clinic?: IClinic; className?: string }) {
    const path = usePathname();
    return (
        <>
            <div
                className={cn(
                    'border-solid border border-blue-100 m-0 relative rounded-[10px] min-w-[554px] bg-white',
                    className,
                )}>
                <Image
                    src={clinic?.avatar || '/assets/clinic.jpg'}
                    width={554}
                    className={cn('h-[200px] w-[554px] object-cover transition-all duration-200 ease-in')}
                    alt='clinic'
                    height={200}
                />
                <div className='p-4 '>
                    <ClinicInfo clinic={clinic} />
                    <div className='flex items-center gap-2 mt-4 py-[16px] px-0'>
                        {path.includes('doctor') && (
                            <Button variant={'default'} className='px-10 h-[46px] w-full'>
                                Записаться
                            </Button>
                        )}
                        <Button variant={'outline'} className='px-10 h-[46px] w-full'>
                            Написать
                        </Button>
                    </div>
                    <div className='flex gap-[14px] flex-col'>
                        <BoxWrapper color='white' className='mt-[18px] flex justify-center font-medium border-blue-200'>
                            <h1>Опыт в лечении: {formatDate(new Date(clinic?.createdAt || 0))}</h1>
                        </BoxWrapper>
                        <BoxWrapper color='white' className='w-full flex-center flex-col border-blue-200'>
                            <h1 className='font-medium text-[30px]'>32</h1>
                            <p className='font-medium text-[12px] text-grey-700'>Лечилось всего</p>
                        </BoxWrapper>
                        <BoxWrapper
                            color='white'
                            className='w-full flex flex-col border-blue-200 gap-6 px-[30px] py-[22px]'>
                            <div className='flex-between'>
                                <Text className='font-medium text-[18px] text-grey-700'>Помощь в лечении</Text>
                                <Text className='font-medium text-[22px]'>64%</Text>
                            </div>
                            <div className='flex-between'>
                                <Text className='font-medium text-[18px] text-grey-700'>Ответственность</Text>
                                <Text className='font-medium text-[22px]'>88%</Text>
                            </div>
                            <div className='flex-between'>
                                <Text className='font-medium text-[18px] text-grey-700'>Точность в рассчетах</Text>
                                <Text className='font-medium text-[22px]'>77%</Text>
                            </div>
                            <div className='flex-between'>
                                <Text className='font-medium text-[18px] text-grey-700'>Точность в лечении</Text>
                                <Text className='font-medium text-[22px]'>90%</Text>
                            </div>
                        </BoxWrapper>
                        <div className='flex flex-col w-full gap-1'>
                            <BoxWrapper
                                color='white'
                                className='rounded-[12px] border-[1px] border-blue-200 p-4 mt-2 gap-4 flex flex-col h-[85px]'>
                                <div className='flex-between'>
                                    <Text>Рассчитанная польза</Text>
                                    <Text>42%</Text>
                                </div>
                                <Progress
                                    value={42}
                                    className='h-[10px]'
                                    color='bg-[#0064FA]'
                                    style={{ backgroundColor: '#C8DBF6' }}
                                />
                            </BoxWrapper>
                            <BoxWrapper
                                color='white'
                                className='rounded-[12px] border-[1px] border-blue-200 p-4 mt-2 gap-4 flex flex-col h-[85px]'>
                                <div className='flex-between'>
                                    <Text>Полученная польза услуги</Text>
                                    <Text>10%</Text>
                                </div>
                                <Progress
                                    value={10}
                                    className='h-[10px]'
                                    color='bg-[#00CC5E]'
                                    style={{ backgroundColor: '#E5FFF1' }}
                                />
                            </BoxWrapper>
                        </div>
                    </div>
                    {/* <h1 className='mt-6 font-medium text-[16px] leading-[20px]'>Польза услуг</h1> */}
                    {/* <DoughnutBlock /> */}
                </div>
            </div>
        </>
    );
}
