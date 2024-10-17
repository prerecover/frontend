'use client';
import { IClinic } from '@/shared/types/clinic.interface';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { formatDate } from '@/shared/utils/formatDate';
import { SearchInput } from '@/components/ui/search-input';
import { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Text } from '@/components/ui/text';

export default function AdminRegistrationBlock({ clinics }: { clinics: IClinic[] }) {
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
                        <TableHead>Номер администратора</TableHead>
                        <TableHead>Ссылка на сайт</TableHead>
                        <TableHead>Ссылка на эл календарь</TableHead>
                        <TableHead>Местоположение</TableHead>
                        <TableHead>Дни и время работы</TableHead>
                        <TableHead>Платежная карта</TableHead>
                        <TableHead>Количество услуг/врачей</TableHead>
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
                                <TableCell className='bg-white'>{clinic.adminNumber}</TableCell>
                                <TableCell>{clinic.site}</TableCell>
                                <TableCell className='bg-white'>{clinic.calendarLink}</TableCell>
                                <TableCell>{clinic.address}</TableCell>
                                <TableCell className='bg-white'>{clinic.workDays}</TableCell>
                                <TableCell>{clinic.card}</TableCell>
                                <TableCell className='bg-white'>10/15</TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </div>
    );
}
