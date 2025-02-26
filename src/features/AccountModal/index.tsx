import { useProfileModal } from '@/shared/store/profileModal';
import React, { useState } from 'react';
import { Avatar } from './avatar';
import Image from 'next/image';
import { MainBlock } from './main-block';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Text } from '@/components/ui/text';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MedBlock } from './med-block';
import { useLogout } from '@/shared/lib/hooks/useLogout';

export const AccountModal = () => {
  const { isOpen, setIsOpen } = useProfileModal();
  const [language, setLanguage] = useState('Русский');
  const { logout } = useLogout();
  const userFormSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    number: z.string(),
    email: z.string(),
    login: z.string(),
    address: z.string(),
    city: z.string(),
    birthday: z.date(),
    sex: z.boolean(),
    countryTitle: z.string(),
  });
  const userForm = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      number: '',
      email: '',
      login: '',
      address: '',
      city: '',
      birthday: new Date(),
      sex: true,
      countryTitle: '',
    } as z.infer<typeof userFormSchema>,
  });

  const medFormSchema = z.object({
    height: z.string(),
    weight: z.string(),
    pressureStart: z.string(),
    pressureEnd: z.string(),
    oxygen: z.string(),
    pulse: z.string(),
    allergy: z.string(),
    sleepTime: z.string(),
    temperature: z.string(),
  });
  const medForm = useForm<z.infer<typeof medFormSchema>>({
    resolver: zodResolver(medFormSchema),
  });
  return (
    isOpen && (
      <div className=" mobile:w-auto mobile:mx-4 tablet:mx-4 tablet:w-auto mobile:h-dvh tablet:h-dvh  tablet:left-0 mobile:left-0 tablet:right-0 mobile:right-0 absolute z-[500] bg-white-background rounded-[12px] w-[540px] h-dvh  desktop:right-7 pc:right-7 flex flex-col desktop:bg-white pc:bg-white desktop:mt-2 pc:mt-2 desktop:px-4 pc:px-4 desktop:overflow-y-auto pc:overflow-y-auto">
        <div className="flex-between relative mt-4">
          <Avatar />
          <Image
            src="/assets/close-i.svg"
            alt="close"
            onClick={() => setIsOpen(false)}
            width={24}
            height={24}
            className="cursor-pointer top-4 absolute right-2"
          />
        </div>
        <div className="w-full h-[1px] bg-[#C8DBF6] mt-3 tablet:hidden mobile:hidden mb-3"></div>
        <MainBlock form={userForm} medForm={medForm} />
        <div className="flex-between mobile:mt-4 mobile:px-4 mobile:bg-white mobile:py-4 tablet:mt-4 tablet:px-4 tablet:bg-white tablet:py-4 mb-4">
          <Text className="text-[16px] font-medium">Язык</Text>
          <Select defaultValue={language} onValueChange={(e) => setLanguage(e)}>
            <SelectTrigger className="w-full pr-5 pl-6 border-[1px] border-blue-200 rounded-[8px] bg-[#fff] h-[42px] max-w-[160px]">
              <SelectValue
                placeholder="Select a verified email to display"
                defaultValue={'Русский'}
              />
            </SelectTrigger>
            <SelectContent className="border-blue bg-white rounded-[12px] flex flex-col gap-10 absolute z-[550]">
              <SelectItem value="Русский" className="cursor-pointer z-[550]">
                Русский
              </SelectItem>
              <SelectItem value="Ozbek tili" className="cursor-pointer">
                Ozbek tili
              </SelectItem>
              <SelectItem value="English" className="cursor-pointer">
                English
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <MedBlock form={medForm} />
        <Text
          position="center"
          className="mt-8 text-[16px] font-medium cursor-pointer"
          onClick={() => logout()}
        >
          Выход
        </Text>
        <Text
          position="center"
          className="mt-8 text-[16px] font-normal cursor-pointer "
        >
          Политика конфиденциальности
        </Text>
      </div>
    )
  );
};
