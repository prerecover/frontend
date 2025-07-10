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

interface IClinicDoctorsTableProps {
  clinicId: string
}

export default function ClinicDoctorsTable({clinicId}: IClinicDoctorsTableProps) {
  
  const [search, setSearch] = useState<string>('');
  const [clinic, setClinic] = useState('')
  const [doctors, setDoctors] = useState([])

  const findDoctors = async () => {
    const res = await fetch(`/api/doctors?clinicId=${clinicId}`);
    const data = await res.json();
    setDoctors(data);
  }

  const findClinic = async () => {
    const res = await fetch(`/api/clinics?clinicId=${clinicId}`);
    const data = await res.json();
    setClinic(data)
  }

  useEffect(() => {
    findDoctors();
  }, [search])

  useEffect(() => {
    findClinic()
  }, [])

  
  return (
    <>
      <AdminHeader 
        buttonTitle='Добавить врача'
        inputText={search}
        inputAction={setSearch}
        isLink={true}
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
          {doctors.length ?
            doctors.map((doctor, index) =>
              <TableRow>
                <TableCell className="w-[40px] text-center">{index + 1}</TableCell>
                <TableCell className="min-w-[180px] bg-white p-10 text-center">{doctor?.doctor || ''}</TableCell>
                <TableCell className="min-w-[180px] p-10 text-center">{doctor?.specialization?.title || ''}</TableCell>
                <TableCell className="min-w-[180px] bg-white p-10 text-center">{doctor?.online || ''}</TableCell>
                <TableCell className="min-w-[180px] p-10 text-center">{doctor?.workExp || ''}</TableCell>
                <TableCell className="min-w-[180px] bg-white p-10 text-center">{doctor?.dayWork || ''}</TableCell>
                <TableCell className="min-w-[180px] p-10 text-center">{doctor?.timeWork || ''}</TableCell>
                <TableCell className="min-w-[180px] bg-white p-10 text-center">{doctor?.media || ''}</TableCell>
                <TableCell className="min-w-[180px] p-10 text-center text-blue">Выбрать</TableCell>
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
