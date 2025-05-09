'use client';

import { useState, useEffect } from 'react';

type ScreenType = 'desktop' | 'laptop' | 'mobile';

export default function useScreenType(): ScreenType {
  const [screenType, setScreenType] = useState<ScreenType>('desktop');

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;

      if (width >= 1200) {
        setScreenType('desktop');
      } else if (width >= 768) {
        setScreenType('laptop');
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
