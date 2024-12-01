'use client';
import BoxWrapper from '@/components/ui/box-wrapper';
import { Param } from './param';
import { cn } from '@/lib/utils';
import { formatDate } from '@/shared/utils/formatDate';
export default function UnionParams({
    title = 'default',
    treated = 0,
    createdAt,
}: {
    title?: string;
    treated?: number;
    createdAt?: number;
}) {
    return (
        <>
            <div className='flex gap-[14px] flex-col w-full h-full mt-2'>
                <BoxWrapper
                    color='white'
                    className='w-full flex-center justify-center font-medium border-blue-200 h-[85px]'>
                    <h1>Опыт в лечении: {formatDate(new Date(createdAt || 0))}</h1>
                </BoxWrapper>
                <BoxWrapper color='white' className='w-full flex-center flex-col border-blue-200 h-[85px]'>
                    <h1 className='font-medium text-[30px]'>{treated}</h1>
                    <p className='font-medium text-[12px] text-grey-700'>Лечилось всего</p>
                </BoxWrapper>
            </div>
            {/* <div className={cn('grid grid-cols-2 gap-2 gap-y-[24px] mt-4 py-4 px-0 desktop::grid-cols-4')}> */}
            {/*     <Param title='64%' text='Помощь в лечении' /> */}
            {/*     <Param title='64%' text='Ответственность' /> */}
            {/*     <Param title='64%' text='Точность в расчетах' /> */}
            {/*     <Param title='64%' text='Точность в лечении' /> */}
            {/* </div> */}
        </>
    );
}
