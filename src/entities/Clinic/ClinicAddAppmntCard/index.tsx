import BoxWrapper from '@/components/ui/box-wrapper';
import Image from 'next/image';
import { Characteristics } from '@/entities/Common/characteristics';
import { useRouter } from 'next/navigation';
import { IClinic } from '@/shared/types/clinic.interface';

export default function ClinicAddAppmntCard({ clinic }: { clinic: IClinic }) {
    const router = useRouter();
    return (
        <>
            <BoxWrapper color='white' className='w-full border-blue-100 pc:min-h-[180px] flex flex-col'>
                <div
                    className='flex gap-3 cursor-pointer items-center'
                    onClick={() => router.push(`/clinic/${clinic._id}`)}>
                    <Image
                        src={clinic?.avatar || '/assets/clinic.jpg'}
                        width={100}
                        height={70}
                        className='rounded-[10px] w-[100px] h-[70px]'
                        alt='doctor'
                    />
                    <div className='flex flex-col text-[16px] font-semibold gap-3  truncate '>
                        <h4>{clinic.title}</h4>
                    </div>
                </div>
                <Characteristics
                    className='gap-2 mt-2'
                    data={[
                        { key: 'Страна:', value: clinic?.country?.title || '-' },
                        { key: 'Город:', value: clinic.city || '-' },
                        { key: 'Адрес:', value: clinic.address || '-' },
                    ]}
                />
            </BoxWrapper>
        </>
    );
}
