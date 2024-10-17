'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Text } from '@/components/ui/text';
import { useState } from 'react';
import UsersStats from './users-stats';
import AppointmentStats from './appointment-stats';
import ClinicStats from './clinic-stats';
import SearchBlock from './search-block';
import { gql, useQuery } from '@apollo/client';
import Loader from '@/components/ui/loader';
import { Search } from '../SearchBlock';
import LinkStats from './links-stats';
import CalendarStats from './calendar-stats';
import AdminStats from './admin-stats';

const STATS_QUERY = gql(`
query Stats($chunk: Int!){
    stats(chunk: $chunk) {
        appointments {
            acceptedAppointments
            completedAppointments
            rejectedAppointments
            totalAppointments
        }
        clinics {
            totalClinics
            totalCreated
            totalDeleted
        }
        users {
            completedSurvey
            createdSurvey
            totalCreatedUsers
            totalDeletedUsers
        }
        admin {
            approovedAppointments
            inProcessAppointments
            pendingAppointments
        }
        calendar {
            changeByClinic
            changeByCompany
            inProcessAppointments
            noVisitCalendar
            visitCalendar
        }
        links {
            totalGenerated
            totalUsed
        }
    }
}
`);

export default function AdminDasboard({ data: searchData }: { data: Search }) {
    const [chunkStats, setChunkStats] = useState(1);
    const { data, loading } = useQuery(STATS_QUERY, { variables: { chunk: chunkStats } });
    if (loading) {
        return <Loader />;
    }

    return (
        <div className='flex'>
            <div className='flex flex-col w-full'>
                <div className='flex-between '>
                    <Text className='text-[28px] font-medium'>Статистика</Text>
                    <Select onValueChange={(e) => setChunkStats(parseInt(e))} value={chunkStats.toString()}>
                        <SelectTrigger className='max-w-fit h-[48px] py-7 pr-5 pl-6 border-[1px] border-blue-200 rounded-[8px] bg-[#fff] font-semibold'>
                            <SelectValue
                                placeholder='Select a verified email to display'
                                className='font-semibold'
                                defaultValue={`За ${chunkStats} дней`}
                            />
                        </SelectTrigger>
                        <SelectContent className='border-blue-200 fixed bg-white rounded-[12px] flex flex-col gap-10 font-semibold'>
                            <SelectItem value={'1'} className='cursor-pointer'>
                                За 1 день
                            </SelectItem>
                            <SelectItem value={'7'} className='cursor-pointer'>
                                За 7 дней
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className='flex flex-col gap-4 mt-4'>
                    <UsersStats usersStats={data.stats.users} />
                    <AppointmentStats appointmentStats={data.stats.appointments} />
                    <div className='flex gap-4'>
                        <ClinicStats clinicStats={data.stats.clinics} />
                        <LinkStats linkStats={data.stats.links} />
                    </div>
                    <CalendarStats calendarStats={data.stats.calendar} />
                    <AdminStats adminStats={data.stats.admin} />
                </div>
            </div>
            <SearchBlock searchData={searchData} />
        </div>
    );
}
