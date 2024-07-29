import BoxWrapper from '@/components/ui/box-wrapper';
import Image from 'next/image';
import { Characteristics } from '@/entities/Common/characteristics';
import { useRouter } from 'next/navigation';
import { IClinic } from '@/shared/types/clinic.interface';

export default function ClinicSearchCard({ clinic }: { clinic: IClinic }) {
    const router = useRouter();
    return (
        <>
            <BoxWrapper color='white' className='w-full border-blue-100'>
                <div className='flex gap-3 cursor-pointer' onClick={() => router.push(`/clinic/${clinic._id}`)}>
                    <Image
                        src={clinic?.avatar || '/assets/clinic.jpg'}
                        width={60}
                        height={60}
                        className='rounded-[12px] w-[120px] h-[120px]'
                        alt='doctor'
                    />
                    <div className='flex flex-col text-[16px] font-semibold gap-3  truncate'>
                        <h4>{clinic.title}</h4>

                        <Characteristics
                            className='gap-2'
                            data={[
                                { key: 'Страна:', value: clinic?.country?.title || '-' },
                                { key: 'Город:', value: clinic.city || '-' },
                                { key: 'Адрес:', value: clinic.address || '-' },
                            ]}
                        />
                    </div>
                </div>
            </BoxWrapper>
        </>
    );
}
