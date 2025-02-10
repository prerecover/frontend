import Logo from '@/components/logo';
import { Text } from '@/components/ui/text';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="relative bottom-0 bg-blue-100 z-[300] h-auto p-12 gap-[20px] flex flex-col ">
      <div className="flex-between mobile:flex mobile:flex-col mobile:items-start">
        <Logo isFooter />
        <div className="flex gap-9 desktop:hidden tablet:hidden mobile:hidden">
          <Text>©2025 Pre-Recover. Все права защищены </Text>
          <Text>Пользовательское соглашение</Text>
        </div>
        <div className="flex items-center gap-5 ">
          <Text className="text-[30px] font-medium mobile:text-[16px]">
            +998500401165
          </Text>
          <Link href={'https://www.instagram.com/pre__recover'}>
            <Image
              src={'/assets/black-instagram.svg'}
              width={40}
              height={40}
              className="mobile:h-[24px] mobile:w-[24px]"
              alt="instagram"
            />
          </Link>
          <Link href={'https://www.facebook.com/profile.php?id=61571721770930'}>
            <Image
              src={'/assets/black-facebook.svg'}
              width={40}
              height={40}
              className="mobile:h-[24px] mobile:w-[24px]"
              alt="facebook"
            />
          </Link>
          <Link href={'https://vk.com/club228874204'}>
            <Image
              src={'/assets/black-vk.svg'}
              width={40}
              height={40}
              className="mobile:h-[24px] mobile:w-[24px]"
              alt="vk"
            />
          </Link>
          <Link href={'https://t.me/prerecover_1'}>
            <Image
              src={'/assets/black-tg.svg'}
              width={40}
              height={40}
              className="mobile:h-[24px] mobile:w-[24px]"
              alt="tg"
            />
          </Link>
          <Link href={'mailto:prerecovergroup@gmail.com'}>
            <Image
              src={'/assets/black-mail.svg'}
              width={40}
              height={40}
              className="mobile:h-[24px] mobile:w-[24px]"
              alt="mail"
            />
          </Link>
        </div>
      </div>
      <div className="flex gap-9 pc:hidden">
        <Text>©2025 Pre-Recover. Все права защищены </Text>
        <Text>Пользовательское соглашение</Text>
      </div>
    </div>
  );
};

export default Footer;
