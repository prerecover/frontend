'use client';
import { IClinic } from '@/shared/types/clinic.interface';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { formatDate } from '@/shared/utils/formatDate';
import { SearchInput } from '@/components/ui/search-input';
import { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Text } from '@/components/ui/text';
import { ICountry } from '@/shared/types/country.interface';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';

export default function AdminClinicsBlock({ clinics, countries }: { clinics: IClinic[]; countries: ICountry[] }) {
    const [search, setSearch] = useState('');
    const [country, setCountry] = useState('');
    const [weekendWork, setWeekendWork] = useState(true);
    const parseWeekDay = (dayWeek: number | undefined) => {
        if (!dayWeek) {
            return '-';
        }
        const startTime = `${dayWeek.toString().slice(0, 2)}:${dayWeek.toString().slice(2, 4)}`;
        const endTime = `${dayWeek.toString().slice(4, 6)}:${dayWeek.toString().slice(6, 8)}`;
        return `${startTime}:${endTime}`;
    };
    return (
        <div className='flex flex-col'>
            <div className='flex-between p-4 gap-40'>
                <div className='flex items-center  gap-3 w-full'>
                    <Select onValueChange={(e) => setCountry(e)} defaultValue={country}>
                        <SelectTrigger className='max-w-[340px] py-7 pr-5 pl-6 border-[1px] border-blue-100 bg-[#fff] rounded-[12px]'>
                            {country === '' && <Text className='text-grey'>Местоположение</Text>}

                            <SelectValue className='text-[20px]' />
                        </SelectTrigger>
                        <SelectContent className='bg-white rounded-[12px] flex flex-col gap-4'>
                            {countries.map((country: ICountry) => (
                                <SelectItem key={country._id} value={country.title} className='cursor-pointer'>
                                    {country.title}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Text className='text-[16px] font-medium min-w-[150px]'>Работает в выходные ?</Text>
                    <div className='flex items-center my-auto'>
                        <RadioGroup
                            defaultValue='option-one'
                            className='flex gap-6'
                            onValueChange={() => setWeekendWork(!weekendWork)}>
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
                </div>

                <SearchInput
                    value={search}
                    placeholder='Название клиники'
                    onChange={(e) => setSearch(e.currentTarget.value)}
                />
            </div>

            <Table>
                <TableCaption>Список всех клиник</TableCaption>
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
                            weekendWork
                                ? clinic.detail.saturdayTime || clinic.detail.sundayTime
                                : !clinic.detail.saturdayTime && !clinic.detail.sundayTime,
                        )
                        .filter((clinic) => clinic.title.toLowerCase().includes(search.toLowerCase()))
                        .filter((clinic) =>
                            country.length > 0 ? clinic.country?.title == country : clinic.country?.title,
                        )
                        .map((clinic, i) => (
                            <TableRow key={i} className='text-center'>
                                <TableCell className='text-[#606368]'>{i + 1}</TableCell>
                                <TableCell className='bg-white'>{clinic.title}</TableCell>
                                <TableCell>{formatDate(new Date(clinic.createdAt))}</TableCell>
                                <TableCell className='bg-white flex-col '>
                                    {clinic.detail?.numbers?.map((num) => (
                                        <Text position='center' key={num}>
                                            {num}
                                        </Text>
                                    ))}
                                </TableCell>
                                <TableCell>{clinic.detail?.adminNumber}</TableCell>
                                <TableCell className='bg-white'>{clinic.address}</TableCell>
                                <TableCell className='flex flex-col'>
                                    <div className='flex-between '>
                                        <Text className='font-semibold'>пн</Text>
                                        {parseWeekDay(clinic.detail.mondayTime)}
                                    </div>
                                    <div className='flex-between '>
                                        <Text className='font-semibold'>вт</Text>
                                        {parseWeekDay(clinic.detail.tuesdayTime)}
                                    </div>
                                    <div className='flex-between '>
                                        <Text className='font-semibold'>ср</Text>
                                        {parseWeekDay(clinic.detail.wednesdayTime)}
                                    </div>
                                    <div className='flex-between '>
                                        <Text className='font-semibold'>чт</Text>
                                        {parseWeekDay(clinic.detail.thursdayTime)}
                                    </div>
                                    <div className='flex-between '>
                                        <Text className='font-semibold'>пт</Text>
                                        {parseWeekDay(clinic.detail.fridayTime)}
                                    </div>
                                    <div className='flex-between '>
                                        <Text className='font-semibold'>сб</Text>
                                        {parseWeekDay(clinic.detail.saturdayTime)}
                                    </div>
                                    <div className='flex-between '>
                                        <Text className='font-semibold'>вс</Text>
                                        {parseWeekDay(clinic.detail.sundayTime)}
                                    </div>
                                </TableCell>
                                <TableCell className='bg-white'>{clinic.detail?.totalDoctors}</TableCell>
                                <TableCell>{clinic.detail?.totalServices}</TableCell>
                                <TableCell className='bg-white'>
                                    <Link className='text-blue' href={`/admin/modification/${clinic._id}`}>
                                        Редактировать
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </div>
    );
}
