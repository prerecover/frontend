'use client';

import React from 'react';
import BlueBox from '@/components/ui/blue-box';
import { FaPlus } from 'react-icons/fa6';
import { CiLogout } from 'react-icons/ci';
import Image from 'next/image';
import { headerList } from './data';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SearchInput } from '@/components/ui/search-input';
import { Button } from '@/components/ui/button';
import SelectAppointments from './SelectAppointments/SelectAppointments';

interface IAdminHeaderProps {
  buttonTitle?: string;
  inputText: string;
  inputAction: React.Dispatch<React.SetStateAction<string>>
  statusAction?: React.Dispatch<React.SetStateAction<string>>
  isLink: boolean
}

export default function AdminHeader({buttonTitle, inputText, inputAction, statusAction, isLink }: IAdminHeaderProps) {

  return (
    <div className="flex items-center justify-between p-4 w-full">
      <div className="flex items-center gap-3">
        <Link 
          href="/admin"
          className="px-5 py-3.5 flex items-center gap-4 border border-blue rounded-md w-56"
        >
          <Image 
            src="/assets/clinic.svg"
            width={24}
            height={24}
            alt="Clinics"
          />
          <p className='text-blue'>Клиники</p>
        </Link>

        <SelectAppointments isLink={isLink} statusAction={statusAction}/>    

        <Link 
          href="/admin"
          className="px-5 py-3.5 flex items-center gap-4 border border-blue rounded-md w-56"
        >
          <Image 
            src="/assets/mail.svg"
            width={24}
            height={24}
            alt="SMS"
          />
          <p className='text-blue'>СМС</p>
        </Link>
      </div>

      <div className="flex items-center gap-3">
      {
        isLink ? (
          <Button 
            variant='outline' 
            className="flex items-center gap-3 text-blue hover:bg-blue/10 cursor-pointer whitespace-nowrap py-6 px-9"
          >
            <span>{buttonTitle}</span>
            <FaPlus />
          </Button>
        ) : null
      }
        <SearchInput
          value={inputText}
          onChange={(e) => inputAction(e.currentTarget.value)}
        />
        <BlueBox className="flex items-center gap-3 text-blue hover:bg-blue/10 cursor-pointer">
          <CiLogout />
        </BlueBox>
      </div>
    </div>
  );
}
