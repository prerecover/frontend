import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { useToast } from '@/components/ui/use-toast';
import { IDoctor } from '@/shared/types/doctor.interface';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function DoctorCard({
    pos,
    fetch: fetchDoctors,
    doctorsArray,
    addEl,
}: {
    pos: number;
    fetch: boolean;
    doctorsArray: Partial<IDoctor>[];
    addEl: () => void;
}) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [exp, setExp] = useState('');
    const [show, setShow] = useState(false);
    const [specialization, setSpecialization] = useState('');
    const { toast } = useToast();

    const validate = () => {
        if (typeof parseInt(exp) !== 'number') {
            toast({ variant: 'destructive', title: 'Неправильно указан опыт работы' });
        }

        return true;
    };

    useEffect(() => {
        if (fetchDoctors) {
            if (validate())
                doctorsArray.push({ firstName, lastName, workExp: parseInt(exp), specialization: specialization });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchDoctors]);
    return (
        <div className='flex flex-col w-full bg-blue-100 p-[20px] rounded-[8px]'>
            <div className='flex-between' onClick={() => setShow(!show)}>
                <Text className='text-[18px] font-medium '>Врач {pos}</Text>
                <Image
                    src={'/assets/black-arrow-down.svg'}
                    width={28}
                    height={28}
                    alt='close'
                    className='w-[28px] h-[28px] cursor-pointer'
                    onClick={() => setShow(!show)}
                />
            </div>
            {show && (
                <>
                    <div className='flex gap-[37px]'>
                        <div className='flex flex-col w-full gap-4 mt-4'>
                            <Input
                                placeholder='Имя'
                                required={true}
                                value={firstName}
                                onChange={(e) => setFirstName(e.currentTarget.value)}
                            />
                            <Input
                                placeholder='Фамилия'
                                required={true}
                                value={lastName}
                                onChange={(e) => setLastName(e.currentTarget.value)}
                            />
                            <Input
                                placeholder='Опыт врача (лет)'
                                type='number'
                                required={true}
                                value={exp}
                                onChange={(e) => setExp(e.currentTarget.value)}
                            />
                        </div>
                        <div className='flex flex-col w-full mt-4'>
                            <Input
                                placeholder='Специальность'
                                required={true}
                                value={specialization}
                                onChange={(e) => setSpecialization(e.currentTarget.value)}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col mt-[10px] items-center'>
                        <Image
                            src={'/assets/blue-plus.svg'}
                            width={32}
                            height={32}
                            className='w-[32px] h-[32px] cursor-pointer'
                            alt='add service'
                            onClick={addEl}
                        />
                        <div className='w-full h-[2px] bg-blue-100 my-[10px]'></div>
                    </div>
                </>
            )}
        </div>
    );
}
