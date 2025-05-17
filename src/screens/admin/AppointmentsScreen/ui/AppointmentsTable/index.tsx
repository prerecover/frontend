'use client';

import {
  Table,
  TableCaption,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { tableTitles } from './data';
import AdminHeader from '@/features/AdminBlock/AdminHeader';
import { useEffect, useState } from 'react';
import { IAppointment } from '@/shared/types/appointment.interface';

export default function AppoitmentsTable() {
  
  const [search, setSearch] = useState<string>('');
  const [status, setStatus] = useState('')
  const [appointments, setAppointments] = useState<IAppointment[]>([])


  const findAppointments = async () => {
    const res = await fetch(`/api/appointments?status=${status}`);
    const text = await res.text();
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = text ? JSON.parse(text) : null;
    setAppointments(data)
  }

  useEffect(() => {
    findAppointments();
  }, [search, status])


  
  return (
    <>
      <AdminHeader 
        inputText={search}
        inputAction={setSearch}
        statusAction={setStatus}
        isLink={false}
      />
      <h1></h1>
      <Table className="overflow-x-scroll w-screen">
        <TableCaption className="mt-40">Список всех врачей</TableCaption>

        <TableHeader>
          <TableRow>
              <TableHead className="w-[40px] text-[#606368]">No</TableHead>
              {tableTitles.map(title =>
                  <TableHead>{title}</TableHead>
              )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {appointments.length ?
            appointments.map((appointment, index) =>
              <TableRow>
                <TableCell className="w-[40px] text-center">{index + 1}</TableCell>
                <TableCell className="min-w-[180px] bg-white p-10 text-center">{appointment?.createdAt || ''}</TableCell>
                <TableCell className="min-w-[180px] p-10 text-center">{appointment?.title || ''}</TableCell>
                <TableCell className="min-w-[180px] bg-white p-10 text-center">{appointment?.timeStart || ''}</TableCell>
                <TableCell className="min-w-[180px] p-10 text-center">{appointment?.clinic?.title || ''}</TableCell>
                <TableCell className="min-w-[180px] bg-white p-10 text-center">{appointment?.user?.number || ''}</TableCell>
                <TableCell className="min-w-[180px] p-10 text-center">{appointment?.doctor?.lastName || ''}</TableCell>
                <TableCell className="min-w-[180px] bg-white p-10 text-center">{appointment?.clinic?.city || ''}</TableCell>
                <TableCell className="min-w-[180px] p-10 text-center">{appointment?.clinic?.address || ''}</TableCell>
                <TableCell className="min-w-[180px] bg-white p-10 text-center">{appointment?.user?._id || ''}</TableCell>
                <TableCell className="min-w-[180px] p-10 text-center">{appointment?.user?.number || ''}</TableCell>
                <TableCell className="min-w-[180px] bg-white p-10 text-center">{appointment?.user?.city || ''}</TableCell>
                <TableCell className="min-w-[180px] p-10 text-center">{appointment?.user?.address || ''}</TableCell>
                <TableCell className="min-w-[180px] bg-white p-10 text-center">{appointment?.status || ''}</TableCell>
                <TableCell className="min-w-[180px] p-10 text-center">{appointment?.notify || ''}</TableCell>
                <TableCell className="min-w-[180px] bg-white p-10 text-center">{appointment?.notify || ''}</TableCell>
                <TableCell className="min-w-[180px] bg-white p-10 text-center text-blue">Выбрать</TableCell>
              </TableRow>
            )
            : null
          }
        </TableBody>
      </Table>
    </>
  );
}
