'use client';
import { cn } from '@/lib/utils';
import { IClinic } from '@/shared/types/clinic.interface';
import Image from 'next/image';
import ClinicInfo from '@/entities/Clinic/ClinicMain/clinic-info';
import { Button } from '@/components/ui/button';
import UnionParams from '@/entities/Common/UnionParams';
import { DoughnutBlock } from '@/entities/Clinic/ClinicMain/doughnut-block';
import { usePathname } from 'next/navigation';

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
                <div className='p-4'>
                    <ClinicInfo clinic={clinic} />
                    <div className='flex items-center gap-2 mt-4 py-[16px] px-0'>
                        {path.includes('doctor') && (
                            <Button variant={'default'} className='px-10 h-[46px] w-auto'>
                                Записаться
                            </Button>
                        )}
                        <Button variant={'outline'} className='px-10 h-[46px] w-auto'>
                            Написать
                        </Button>
                    </div>
                    <UnionParams title='Опыт в лечении: 3 года' />
                    <h1 className='mt-6 font-medium text-[16px] leading-[20px]'>Польза услуг</h1>
                    <DoughnutBlock />
                </div>
            </div>
        </>
    );
}
