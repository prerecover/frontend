'use client';

import dayjs from 'dayjs';
import 'dayjs/locale/ru';
dayjs.locale('ru');

import DesktopMyHealth from '@/features/MyHealth/Screens/DesktopMyHealth';
import useScreenType from '@/shared/lib/hooks/useScreenType';
import LaptopMyHealth from '@/features/MyHealth/Screens/LaptopMyHealth';
import MobileMyHealth from '@/features/MyHealth/Screens/MobileMyHealth';
import { IAppointment } from './types/appointment.types';
import { useUserStore } from '@/shared/store/userStore';
import { IUser } from '@/shared/types';
import { useEffect } from 'react';

interface IMyHealthProps {
  appointments: IAppointment[];
  user: IUser;
}

export default function MyHealth({ appointments, user }: IMyHealthProps) {
  const { setUser } = useUserStore();

  useEffect(() => {
    setUser(user);
  }, [setUser, user])

  const screenType = useScreenType();

  if (screenType === 'desktop') {
    return <DesktopMyHealth appointments={appointments} />;
  }

  if (screenType === 'laptop') {
    return <LaptopMyHealth appointments={appointments} />;
  }

  return <MobileMyHealth appointments={appointments} />;
}
