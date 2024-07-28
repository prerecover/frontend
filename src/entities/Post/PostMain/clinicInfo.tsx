import { Text } from '@/components/ui/text';
import { IClinic } from '@/shared/types/clinic.interface';
import Image from 'next/image';

export default function ClinicInfo({ clinic }: { clinic?: IClinic }) {
    return (
        <>
            <div className='flex gap-3 items-center'>
                <Image
                    src={clinic?.avatar || '/assets/clinic.jpg'}
                    width={50}
                    height={50}
                    className='w-[32px] h-[32px] rounded-full'
                    alt='clinic'
                />
                <div className='flex flex-col'>
                    <Text type='p' className='text-[14px] font-medium'>
                        {clinic?.title}
                    </Text>
                    <Text type='p' className='text-[12px] font-medium text-grey-700'>
                        Клиника
                    </Text>
                </div>
            </div>
        </>
    );
}
