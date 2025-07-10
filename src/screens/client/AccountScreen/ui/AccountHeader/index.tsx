import useScreenType from '@/shared/lib/hooks/useScreenType';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AccountHeader() {
  const router = useRouter();
  const screenType = useScreenType();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    if (screenType === 'laptop' || screenType === 'desktop') {
      router.back();
    }
  }, [screenType, isClient, router]);

  if (!isClient) {
    return null;
  }

  return (
    <div className="block md:hidden !w-screen mt-0">
      <div
        className="invisible pointer-events-none h-16 max-xs:h-32"
        aria-hidden="true"
      ></div>
      <div className="bg-white h-32 sm:h-24 md:h-20 fixed mt-0 box-border top-0 left-0 !w-screen flex items-end text-black z-50 pb-4">
        <div className="flex w-full px-4 items-center justify-center">
          <Image
            src="/assets/arrow-left.svg"
            width={24}
            height={24}
            alt="arrow-left"
            onClick={() => router.back()}
            className="fixed left-2 w-6 h-6 sm:w-7 sm:h-7 cursor-pointer"
          />
          <h2 className="text-lg font-semibold">Аккаунт</h2>
        </div>
      </div>
    </div>
  );
}