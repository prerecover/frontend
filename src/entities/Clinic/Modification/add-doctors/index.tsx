import { Button } from '@/components/ui/button';
import { SearchInput } from '@/components/ui/search-input';
import { Text } from '@/components/ui/text';
import { IDoctor } from '@/shared/types/doctor.interface';
import { useState } from 'react';
import AddDoctorCard from './add-card';
import Image from 'next/image';

export default function AddDoctorsBlock({
    doctors,
    setDoctors,
}: {
    doctors: Partial<IDoctor>[];
    setDoctors: React.Dispatch<React.SetStateAction<Partial<IDoctor>[]>>;
}) {
    const [search, setSearch] = useState('');
    const [showAddCard, setShowAddCard] = useState(false);
    return (
        <div className='flex flex-col w-full gap-[18px]'>
            <div className='flex-between'>
                <Text className='text-[18px] font-medium '>Добавить врача</Text>
                {showAddCard && (
                    <Text className='cursor-pointer' onClick={() => setShowAddCard(false)}>
                        Назад
                    </Text>
                )}
            </div>
            {showAddCard === true ? (
                <AddDoctorCard doctors={doctors} setShow={setShowAddCard} setDoctors={setDoctors} />
            ) : (
                <div className='flex flex-col h-full'>
                    <div className='flex gap-[10px]'>
                        <SearchInput
                            value={search}
                            onChange={(e) => setSearch(e.currentTarget.value)}
                            placeholder='Поиск врача'
                        />
                        <Button
                            className='w-[250px] text-[14px] h-[47px] rounded-[12px]'
                            onClick={() => setShowAddCard(true)}>
                            + Добавить врача
                        </Button>
                    </div>
                    {doctors.length == 0 && (
                        <Text className='text-grey-700 text-[14px] my-auto self-center'>
                            Найдите уже добавленного врача или добавьте нового
                        </Text>
                    )}
                    {doctors.map((doctor) => (
                        <div className='flex items-center gap-3 mt-3' key={doctor.lastName}>
                            <Image src={'/assets/doctor.svg'} width={55} height={55} alt='doctor image' />
                            <Text key={doctor.lastName} className='text-[18px] font-medium'>
                                {doctor.firstName} {doctor.lastName}
                            </Text>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
