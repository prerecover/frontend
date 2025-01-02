import { Text } from '@/components/ui/text';
import { IClinic } from '@/shared/types/clinic.interface';
import Image from 'next/image';

export default function ClinicSavedCard({
    clinic,
}: {
    clinic: Pick<IClinic, 'avatar' | 'title' | 'country' | 'city'>;
}) {
    return (
        <div className='flex items-center w-[318px] h-[101px] rounded-[12px] border-[1px] border-blue-200 border-solid px-[14px] py-[23px] gap-3'>
            <Image
                src={clinic.avatar || '/assets/clinic.jpg'}
                width={90}
                height={63}
                className='rounded-[8px] h-[63px]'
                alt='clinic'
            />
            <div className='flex flex-col min-w-0'>
                <Text className='text-[16px] font-medium truncate'>{clinic.title}</Text>
                <div className='flex text-[12px] font-medium gap-1'>
                    <Text className='text-grey-700'>Страна:</Text>
                    <Text>{clinic.country?.title}</Text>
                </div>
                <div className='flex text-[12px] font-medium gap-1'>
                    <Text className='text-grey-700'>Город:</Text>
                    <Text>{clinic.city}</Text>
                </div>
            </div>
        </div>
    );
}
