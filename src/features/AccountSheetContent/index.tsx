import React, { useState } from 'react';
import { Avatar } from './avatar';
import { Text } from '@/components/ui/text';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLogout } from '@/shared/lib/hooks/useLogout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { MainInfoForm } from './MainInfoForm';
import { MedForm } from './MedForm';

export const AccountSheetContent = () => {
  const [language, setLanguage] = useState('Русский');
  const { logout } = useLogout();

  return (
    <div>
      <div className="flex-between relative mt-4">
        <Avatar />
      </div>
      <div className="w-full h-[1px] bg-[#C8DBF6] mt-3 tablet:hidden mobile:hidden mb-3"></div>
      <Accordion className="w-full" type="single" collapsible>
        <AccordionItem className="border-b-0" value="main-info">
          <AccordionTrigger className="text-sm font-normal">
            Основная информация
          </AccordionTrigger>
          <AccordionContent>
            <MainInfoForm />
          </AccordionContent>
        </AccordionItem>

        <div className="flex justify-between items-center gap-4">
          <Text className="text-sm font-normal">Язык</Text>
          <Select defaultValue={language} onValueChange={(e) => setLanguage(e)}>
            <SelectTrigger className="w-full border-blue-200 rounded-lg bg-white h-8 text-sm max-w-40">
              <SelectValue
                placeholder="Select a verified email to display"
                defaultValue={'Русский'}
              />
            </SelectTrigger>
            <SelectContent className="border-blue bg-white rounded-[12px] flex flex-col gap-10 absolute z-[550]">
              <SelectGroup>
                <SelectItem value="Русский" className="cursor-pointer z-[550]">
                  Русский
                </SelectItem>
                <SelectItem value="Ozbek tili" className="cursor-pointer">
                  Ozbek tili
                </SelectItem>
                <SelectItem value="English" className="cursor-pointer">
                  English
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <AccordionItem className="border-b-0" value="main-med-info">
          <AccordionTrigger className="text-sm font-normal">
            Основные медицинские показатели
          </AccordionTrigger>
          <AccordionContent>
            <MedForm />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button
        className="mt-8 text-[16px] font-medium cursor-pointer mx-auto"
        variant="error"
        onClick={() => logout()}
      >
        Выход
      </Button>
      <Link
        className="flex text-center justify-center mt-8 text-sm font-normal cursor-pointer ease-linear duration-200 hover:opacity-80 hover:underline"
        href="#"
      >
        Политика конфиденциальности
      </Link>
    </div>
  );
};
