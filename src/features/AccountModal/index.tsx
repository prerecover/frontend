'use client';

import { useProfileModal } from '@/shared/store/profileModal';
import React, { useState } from 'react';
import { Avatar } from './avatar';
import Image from 'next/image';
import { MainBlock } from './main-block';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Text } from '@/components/ui/text';
import AccountHeader from './MobileComponents/account-header';
import { MainBlockMobile } from './MobileComponents/mobile-main-block';
import useScreenType from '@/shared/lib/hooks/useScreenType';
import { MainBlockTablet } from './TabletComponents/tablet-main-block';
import Logout from './logout';

export const AccountModal = () => {
  const { isOpen, setIsOpen } = useProfileModal();
  const [language, setLanguage] = useState('Русский');
  const screenType = useScreenType();
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
    defaultValues: {
      height: '',
      weight: '',
      pressureStart: '',
      pressureEnd: '',
      oxygen: '',
      pulse: '',
      allergy: '',
      sleepTime: '',
      temperature: '',
    },
  });

  const screenMainBlock = () => {
    if (screenType === 'mobile') {
      return (
        <MainBlockMobile
          form={userForm}
          medForm={medForm}
          language={language}
          setLanguage={setLanguage}
        />
      );
    }
    if (screenType === 'tablet') {
      return (
        <MainBlockTablet
          form={userForm}
          medForm={medForm}
          language={language}
          setLanguage={setLanguage}
        />
      );
    }
    return (
      <MainBlock
        form={userForm}
        medForm={medForm}
        language={language}
        setLanguage={setLanguage}
      />
    );
  };

  return (
    isOpen && (
      <div className="mobile:w-auto mobile:overflow-x-hidden mobile:mx-4 tablet:mx-4 top-2 mobile:h-screen tablet:w-auto tablet:top-2 tablet:h-dvh tablet:left-0 mobile:left-0 tablet:right-0 mobile:right-0 absolute mobile:bottom-0 z-[500] bg-white-background rounded-[12px] w-[540px] desktop:right-0 desktop:top-0 pc:right-7 flex flex-col desktop:bg-white pc:bg-white pc:mt-2 desktop:overflow-y-auto pc:overflow-y-auto py-6 shadow-xl">
        <AccountHeader />
        <div className="flex-between relative mt-4">
          <Avatar />
          <Image
            src="/assets/close-i.svg"
            alt="close"
            onClick={() => setIsOpen(false)}
            width={24}
            height={24}
            className="cursor-pointer top-4 absolute right-2 hidden md:block"
          />
        </div>
        <div className="w-full h-[1px] bg-[#C8DBF6] mt-3 tablet:hidden mobile:hidden mb-3"></div>
        {screenMainBlock()}
        <Logout />
        <Text
          position="center"
          className="mt-8 text-[16px] font-normal cursor-pointer pb-5"
        >
          Политика конфиденциальности
        </Text>
      </div>
    )
  );
};
