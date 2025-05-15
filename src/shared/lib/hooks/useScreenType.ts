'use client';

import { useState, useEffect } from 'react';

type ScreenType = 'desktop' | 'laptop' | 'tablet' | 'mobile';

export default function useScreenType(): ScreenType {
  const [screenType, setScreenType] = useState<ScreenType>('desktop');

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;

      if (width >= 1919) {
        setScreenType('desktop');
      } else if (width >= 1023) {
        setScreenType('laptop');
      } else if (width >= 769) {
        setScreenType('tablet');
      } else {
        setScreenType('mobile');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return screenType;
}
