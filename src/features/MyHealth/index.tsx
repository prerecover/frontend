'use client';

import dayjs from 'dayjs';
import 'dayjs/locale/ru';
dayjs.locale('ru');

import DesktopMyHealth from '@/features/MyHealth/Screens/DesktopMyHealth';
import useScreenType from '@/shared/lib/hooks/useScreenType';
import LaptopMyHealth from '@/features/MyHealth/Screens/LaptopMyHealth';
import MobileMyHealth from '@/features/MyHealth/Screens/MobileMyHealth';

export default function MyHealth() {
  const screenType = useScreenType();

  return (
    <>
      {screenType === 'desktop' && <DesktopMyHealth />}
      {screenType === 'laptop' && <LaptopMyHealth />}
      {screenType === 'mobile' && <MobileMyHealth />}
    </>
  );
}
