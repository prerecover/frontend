'use client';
import BoxWrapper from '@/components/ui/box-wrapper';
import Image from 'next/image';
import { Characteristics } from '@/entities/Common/characteristics';
import { useRouter } from 'next/navigation';
import { IClinic } from '@/shared/types/clinic.interface';
import yellowStar from '/public/assets/yellow-star.svg';
import greyStar from '/public/assets/grey-star.svg';
import clinicAvatar from '/public/assets/clinic.jpg';

export default function ClinicSearchCard({ clinic }: { clinic: IClinic }) {
    const router = useRouter();
    const stars: string[] = [];
    for (let i = 0; i < 5; i++) {
        if (i < clinic.rating) {
            stars.push('yellow');
        } else {
            stars.push('grey');
        }
    }
    return (
        <>
            <BoxWrapper color='white' className='w-full border-blue-100'>
                <div className='flex gap-3 cursor-pointer' onClick={() => router.push(`/clinic/${clinic._id}`)}>
                    <Image
                        src={clinic?.avatar || clinicAvatar}
                        width={200}
                        height={143}
                        className='rounded-[12px] mobile:w-[120px] mobile:h-[120px] w-[200px] h-[143px]'
                        alt='doctor'
                    />
                    <div className='flex flex-col text-[16px] font-semibold gap-3  truncate'>
                        <div className='mobile:hidden flex gap-1'>
                            {stars.map((star, i) => (
                                <Image
                                    key={i}
                                    src={star == 'yellow' ? yellowStar : greyStar}
                                    width={19}
                                    height={19}
                                    className='w-[19px] h-[19px]'
                                    alt='star-active'
                                />
                            ))}
                        </div>
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
