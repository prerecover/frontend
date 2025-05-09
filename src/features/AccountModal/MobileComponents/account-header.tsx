import { useProfileModal } from '@/shared/store/profileModal';
import Image from 'next/image';

export default function AccountHeader() {
  const { isOpen, setIsOpen } = useProfileModal();

  return (
    <div className="block md:hidden !w-screen">
      <div
        className="invisible pointer-events-none h-16 max-xs:h-32"
        aria-hidden="true"
      ></div>
      <div className="bg-white h-32 sm:h-24 md:h-20 fixed top-0 left-0 !w-screen flex items-end text-black z-50 pb-4">
        <div className="flex w-full px-4 items-center justify-center">
          <Image
            src="/assets/arrow-left.svg"
            width={24}
            height={24}
            alt="arrow-left"
            onClick={() => setIsOpen(!isOpen)}
            className="fixed left-2 w-6 h-6 sm:w-7 sm:h-7"
          />
          <h2 className="text-lg font-semibold">Аккаунт</h2>
        </div>
      </div>
    </div>
  );
}