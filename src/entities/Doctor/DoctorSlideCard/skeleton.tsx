import { IDoctor } from '@/shared/types/doctor.interface';
import Image from 'next/image';

export default function DoctorCardSkeleton({ data }: { data: IDoctor[] }) {
    return (
        <div className='flex gap-2'>
            {data.map((e) => (
                <div
                    key={e._id}
                    className='w-[140px] h-[163px] p-3 flex flex-col rounded-[16px] items-center bg-white text-center cursor-pointer extra_desktop:p-4 extra_desktop:border-[1px] extra_desktop:border-blue-100 extra_desktop:border-solid extra_desktop:gap-[10px] extra_desktop:rounded-[12px]'>
                    <Image
                        src='/assets/doctor.svg'
                        alt='avatar'
                        className='w-[55px] h-[55px] rounded-full'
                        width={55}
                        height={55}
                    />
                    <div className='hidden text-[14px] font-semibold mt-[10px] overflow-hidden whitespace-normal text-ellipsis max-w-full extra_desktop:block'>
                        <div className='text-[10px] font-medium text-grey-500 mt-[10px] extra_desktop:mt-[5px] extra_desktop:text-[12px]'>
                            {e.specialization}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
