import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { IClinic } from '@/shared/types/clinic.interface';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface LastVisitClinicProps {
    clinic: IClinic;
}
export const LastVisitClinic: FC<LastVisitClinicProps> = ({ clinic }) => {
    return (
        <Link className='flex gap-4  transition-transform hover:scale-110' href={`/clinic/${clinic._id}`}>
            <Image
                src={clinic.avatar || '/assets/clinic.jpg'}
                width={24}
                height={24}
                className='w-6 h-6 object-cover rounded-full'
                alt='clinic'
            />
            <Text className={cn('text-[14px] font-medium text-grey-700 logo:hidden')} type='p'>
                {clinic.title}
            </Text>
        </Link>
    );
};
