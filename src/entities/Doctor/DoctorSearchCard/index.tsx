import BoxWrapper from '@/components/ui/box-wrapper';
import { IDoctor } from '@/shared/types/doctor.interface';
import Image from 'next/image';
import { Characteristics } from '@/entities/Common/characteristics';
import doctorAvatar from '/public/assets/doctor.svg';
import { useRouter } from 'next/navigation';

export default function DoctorSearchCard({ doctor }: { doctor: IDoctor }) {
    const router = useRouter();
    return (
        <>
            <BoxWrapper color='white' className='w-full border-blue-100 desktop:h-[140px] h-full'>
                <div className='flex gap-3 cursor-pointer' onClick={() => router.push(`/doctor/${doctor._id}`)}>
                    <Image
                        src={doctor?.avatar || doctorAvatar}
                        width={100}
                        height={100}
                        className='rounded-[50%] desktop:h-[100px] desktop:w-[100px] h-[60px] w-[60px] object-cover'
                        alt='doctor'
                    />
                    <div className='flex flex-col text-[16px] font-semibold gap-3  '>
                        <h4>{`${doctor.firstName} ${doctor.lastName} ${doctor.surname?.charAt(0) + '.'}`}</h4>

                        <Characteristics
                            className='desktop:grid desktop:grid-cols-2 gap-2'
                            data={[
                                { key: 'Страна:', value: doctor.country?.title || '-' },
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
