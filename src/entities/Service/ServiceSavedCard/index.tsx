import { Text } from '@/components/ui/text';
import { IService } from '@/shared/types/service.interface';
import Image from 'next/image';

export default function ServiceSavedCard({ service }: { service: IService }) {
    return (
        <div className='flex items-center w-[318px] h-[101px] rounded-[12px] border-[1px] border-blue-200 border-solid px-[14px] py-[23px] gap-3'>
            <Image
                src={service.img || '/assets/service.svg'}
                width={90}
                height={63}
                className='rounded-[8px] h-[63px]'
                alt='service'
            />
            <div className='flex flex-col min-w-0'>
                <Text className='text-[16px] font-medium truncate'>{service.title}</Text>
                <div className='flex text-[12px] font-medium gap-1'>
                    <Text className='text-grey-700'>Клиника:</Text>
                    <Text className='truncate text-blue'>{service.clinic?.title}</Text>
                </div>
                <div className='flex text-[12px] font-medium gap-1'>
                    <Text className='text-grey-700'>Цена:</Text>
                    <Text>{service.priceMin} сум</Text>
                </div>
            </div>
        </div>
    );
}
