'use client';
import BoxWrapper from '@/components/ui/box-wrapper';
import { Param } from './param';
import { cn } from '@/lib/utils';
export default function UnionParams({ title = 'default' }: { title?: string }) {
    return (
        <>
            <BoxWrapper color='white' className='mt-[18px] flex justify-center font-medium border-blue-200'>
                <h1>{title}</h1>
            </BoxWrapper>
            <div className='flex gap-[14px] mt-[11px]'>
                <BoxWrapper color='white' className='w-full flex-center flex-col border-blue-200'>
                    <h1 className='font-medium text-[30px]'>32</h1>
                    <p className='font-medium text-[12px] text-grey-700'>Лечатся</p>
                </BoxWrapper>
                <BoxWrapper color='white' className='w-full flex-center flex-col border-blue-200'>
                    <h1 className='font-medium text-[30px]'>1637</h1>
                    <p className='font-medium text-[12px] text-grey-700'>Лечилось всего</p>
                </BoxWrapper>
            </div>
            <div className={cn('grid grid-cols-2 gap-2 gap-y-[24px] mt-4 py-4 px-0 slider:grid-cols-4')}>
                <Param title='64%' text='Помощь в лечении' />
                <Param title='64%' text='Ответственность' />
                <Param title='64%' text='Точность в расчетах' />
                <Param title='64%' text='Точность в лечении' />
            </div>
        </>
    );
}
