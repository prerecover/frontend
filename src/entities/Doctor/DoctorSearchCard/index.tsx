import BoxWrapper from '@/components/ui/box-wrapper';
import { IDoctor } from '@/shared/types/doctor.interface';
import Image from 'next/image';
import { Characteristics } from '@/entities/Common/characteristics';
import { useRouter } from 'next/navigation';

export default function DoctorSearchCard({ doctor }: { doctor: IDoctor }) {
    const router = useRouter();
    return (
        <>
            <BoxWrapper color='white' className='w-full border-blue-100'>
                <div className='flex gap-3 cursor-pointer' onClick={() => router.push(`/doctor/${doctor._id}`)}>
                    <Image
                        src={doctor?.avatar || '/assets/doctor.svg'}
                        width={60}
                        height={60}
                        className='rounded-[50%] h-[60px]'
                        alt='doctor'
                    />
                    <div className='flex flex-col text-[16px] font-semibold gap-3  '>
                        <h4>{`${doctor.firstName} ${doctor.lastName} ${doctor.surname?.charAt(0) + '.'}`}</h4>

                        <Characteristics
                            className='gap-2'
                            data={[
                                { key: 'Страна:', value: doctor?.country?.title || '-' },
                                { key: 'Город:', value: doctor.city || '-' },
                                { key: 'Специальность:', value: doctor.specialization || '-' },
                                {
                                    key: 'Опыт работы:',
                                    value:
                                        (doctor?.workExp?.toString().endsWith('0')
                                            ? doctor?.workExp?.toString().charAt(0)
                                            : doctor?.workExp) + ' лет' || '-',
                                },
                            ]}
                        />
                    </div>
                </div>
            </BoxWrapper>
        </>
    );
}
