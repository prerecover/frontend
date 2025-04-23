'use client';

import dayjs from 'dayjs';
import 'dayjs/locale/ru';
dayjs.locale('ru');

import DesktopMyHealth from '@/features/MyHealth/Screens/DesktopMyHealth';
import useScreenType from '@/shared/lib/hooks/useScreenType';
import LaptopMyHealth from '@/features/MyHealth/Screens/LaptopMyHealth';
import MobileMyHealth from '@/features/MyHealth/Screens/MobileMyHealth';
import { IAppointment } from './types/appointment.types';
import usersApi from '@/app/api/users/users.api';
import { useEffect } from 'react';
import { useUserStore } from '@/shared/store/userStore';

interface IMyHealthProps {
  appointments: IAppointment[]
  user: any
}

export default  function MyHealth({appointments, user}: IMyHealthProps) {
  const { setUser } = useUserStore();

  setUser(user)

  const screenType = useScreenType();

  return (
    <>
      {screenType === 'desktop' && <DesktopMyHealth appointments={appointments}/>}
      {screenType === 'laptop' && <LaptopMyHealth />}
      {screenType === 'mobile' && <MobileMyHealth />}
    </>
  );
}
