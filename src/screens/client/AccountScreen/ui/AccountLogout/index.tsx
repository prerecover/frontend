import { useLogout } from '@/shared/lib/hooks/useLogout';
import Image from 'next/image';
import { Text } from '@/components/ui/text';

export default function AccountLogout() {
  const { logout } = useLogout();

  return (
    <div>
      <div className="hidden max-md:block">
        <div
          className="w-full flex justify-start items-center p-4 border border-blue-100 rounded-xl bg-white mt-3.5 gap-4 text-dark font-medium text-base cursor-pointer"
          onClick={() => logout()}
        >
          <Image src="/assets/logout.svg" width={20} height={20} alt="logout" />
          <p>Выход</p>
        </div>
      </div>

      <Text
        position="center"
        className="mt-8 text-[16px] font-medium cursor-pointer block max-md:hidden px-7"
        onClick={() => logout()}
      >
        Выход
      </Text>
    </div>
  );
}
