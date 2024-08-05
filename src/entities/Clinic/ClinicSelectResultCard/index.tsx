import { Text } from '@/components/ui/text';
import { IClinic } from '@/shared/types/clinic.interface';
import Image from 'next/image';
import Link from 'next/link';

export default function ClinicSelectResultCard({ clinic }: { clinic: IClinic }) {
    return (
        <Link className='bg-white p-4 flex-between h-[56px] w-full rounded-[10px]' href={`/clinic/${clinic._id}`}>
            <Text type='h3' className='text-[16px] font-medium'>
                {clinic.title}
            </Text>
            <Image src={'/assets/arrow-right.svg'} width={24} height={24} className='w-6 h-6' alt='go to' />
        </Link>
    );
}
