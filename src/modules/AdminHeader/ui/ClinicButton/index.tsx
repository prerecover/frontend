'use client';
import { Button } from '@/components/ui/button';
import { ADMIN_ROUTES } from '@/shared/utils/paths';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

interface Props {}

const ClinicButton: FC<Props> = ({}) => {
  const router = useRouter();

  return (
    <Button
      variant="outline"
      className="gap-x-3 rounded-md h-auto  justify-start w-[220px]"
      onClick={() => {
        router.push(ADMIN_ROUTES.ADMIN.CLINICS.INDEX);
      }}
    >
      <Image
        src={'/assets/clinic.svg'}
        width={24}
        height={24}
        alt="иконка клиники"
      />
      <p className="font-medium">Клиники</p>
    </Button>
  );
};

export { ClinicButton };
