'use client';
import { IClinic } from '@/shared/types/clinic.interface';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { formatDate } from '@/shared/utils/formatDate';
import { SearchInput } from '@/components/ui/search-input';
import { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Text } from '@/components/ui/text';

export default function AdminClinicsBlock({ clinics }: { clinics: IClinic[] }) {
    const [search, setSearch] = useState('');
    return (
        <div className='flex flex-col'>
            <div className='flex-between p-4 gap-3'>
                <Text className='text-[16px] font-medium min-w-[250px]'>Работает в выходные ?</Text>
                <div className='flex items-center my-auto'>
                    <RadioGroup defaultValue='option-one' className='flex gap-6'>
                        <div className='flex items-center space-x-2'>
                            <RadioGroupItem value='option-one' id='option-one' />
                            <Label htmlFor='option-one'>Да</Label>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <RadioGroupItem value='option-two' id='option-two' />
                            <Label htmlFor='option-two'>Нет</Label>
                        </div>
                    </RadioGroup>
                </div>
                <SearchInput value={search} onChange={(e) => setSearch(e.currentTarget.value)} />
            </div>

            <Table>
                <TableCaption>A list of your clinics.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className='w-[40px] text-[#606368]'>No</TableHead>
                        <TableHead>Название</TableHead>
                        <TableHead>Дата регистрации</TableHead>
                        <TableHead>Телефон клиники</TableHead>
                        <TableHead>Телефон администратора</TableHead>
                        <TableHead>Местоположение</TableHead>
                        <TableHead>Дни и время работы</TableHead>
                        <TableHead>Всего врачей</TableHead>
                        <TableHead>Всего услуг</TableHead>
                        <TableHead>Ссылка на редактирование</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {clinics
                        .filter((clinic) =>
                            Object.values(clinic).some((value) => {
                                if (typeof value === 'string') {
                                    return value.toLowerCase().includes(search.toLowerCase());
                                }
                            }),
                        )
                        .map((clinic, i) => (
                            <TableRow key={i} className='text-center'>
                                <TableCell className='text-[#606368]'>{i + 1}</TableCell>
                                <TableCell className='bg-white'>{clinic.title}</TableCell>
                                <TableCell>{formatDate(new Date(clinic.createdAt))}</TableCell>
                                <TableCell className='bg-white flex flex-col'>
                                    {clinic.detail?.numbers?.map((num) => <Text key={num}>{num}</Text>)}
                                </TableCell>
                                <TableCell>{clinic.detail?.adminNumber}</TableCell>
                                <TableCell className='bg-white'>{clinic.address}</TableCell>
                                <TableCell>Пока хуй знает</TableCell>
                                <TableCell className='bg-white'>{clinic.detail?.totalDoctors}</TableCell>
                                <TableCell>{clinic.detail?.totalServices}</TableCell>
                                <TableCell className='bg-white'>
                                    <Text className='text-blue' position='center'>
                                        Редактировать
                                    </Text>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </div>
    );
}
