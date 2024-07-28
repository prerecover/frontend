import { Text } from '@/components/ui/text';
import { IDoctor } from '@/shared/types/doctor.interface';
import Image from 'next/image';

export default function ClinicDoctors({ doctors }: { doctors: IDoctor[] }) {
    return (
        <>
            {doctors.map((doctor, i) => (
                <>
                    <div className='flex justify-between items-center ' key={doctor._id}>
                        <div className='flex items-center gap-3'>
                            <Text type='p' className='text-[11px] font-medium text-grey-700'>
                                {i + 1}
                            </Text>
                            <Image
                                src={doctor.avatar || '/assets/doctor.svg'}
                                width={30}
                                height={30}
                                className='w-[40px] h-[40px] rounded-full'
                                alt='doctor'
                            />
                            <div className='flex flex-col'>
                                <div className='flex gap-2'>
                                    <Text type='h4' className='text-[14px] font-semibold text-dark'>
                                        {doctor.firstName}
                                    </Text>
                                    <Text type='h4' className='text-[14px] font-semibold text-dark'>
                                        {doctor.lastName}
                                    </Text>
                                </div>
                                <Text type='p' className='text-[11px] text-grey-700 font-medium'>
                                    {doctor.specialization}
                                </Text>
                            </div>
                        </div>
                        <svg
                            className='4'
                            width='28'
                            height='28'
                            viewBox='0 0 28 28'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M14.0013 3.79102C15.1289 3.79102 16.043 4.7051 16.043 5.83268C16.043 6.96026 15.1289 7.87435 14.0013 7.87435C12.8737 7.87435 11.9596 6.96026 11.9596 5.83268C11.9596 4.7051 12.8737 3.79102 14.0013 3.79102Z'
                                fill='#262626'
                            />
                            <path
                                d='M14.0013 11.9577C15.1289 11.9577 16.043 12.8718 16.043 13.9993C16.043 15.1269 15.1289 16.041 14.0013 16.041C12.8737 16.041 11.9596 15.1269 11.9596 13.9993C11.9596 12.8718 12.8737 11.9577 14.0013 11.9577Z'
                                fill='#262626'
                            />
                            <path
                                d='M14.0013 20.1243C15.1289 20.1243 16.043 21.0384 16.043 22.166C16.043 23.2936 15.1289 24.2077 14.0013 24.2077C12.8737 24.2077 11.9596 23.2936 11.9596 22.166C11.9596 21.0384 12.8737 20.1243 14.0013 20.1243Z'
                                fill='#262626'
                            />
                        </svg>
                    </div>
                    <div className='w-full h-[1px] bg-blue-100 px-5 mt-3 mb-3'></div>
                </>
            ))}
        </>
    );
}
