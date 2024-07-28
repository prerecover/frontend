import { Text } from '@/components/ui/text';
import { IClinic } from '@/shared/types/clinic.interface';

export default function ClinicInfo({ clinic }: { clinic: IClinic }) {
    return (
        <>
            <div className='flex mt-[-10px]'>
                <div className='flex-col flex gap-2'>
                    <Text className='font-normal text-[16px] mt-[20px]' type='h2'>
                        Запись через сайт PreRecover
                    </Text>
                    <div className='flex items-center text-[14px] gap-1 font-normal'>
                        <Text type='h5' className='text-grey-700'>
                            Страна:
                        </Text>
                        <Text type='h5' fz={500}>
                            {clinic.country?.title}
                        </Text>
                    </div>
                    <div className='flex items-center text-[14px] gap-1 font-normal'>
                        <Text type='h5' className='text-grey-700'>
                            Город:
                        </Text>
                        <Text type='h5' fz={500}>
                            {clinic.city}
                        </Text>
                    </div>
                    <div className='flex items-center text-[14px] gap-1 font-normal w-[200px]'>
                        <Text type='h5' className='text-grey-700'>
                            Адрес:
                        </Text>
                        <Text type='h5' fz={500} className='truncate'>
                            {clinic.address}
                        </Text>
                    </div>
                </div>
            </div>
        </>
    );
}
