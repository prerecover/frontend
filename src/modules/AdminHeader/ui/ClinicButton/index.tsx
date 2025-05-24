import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FC } from 'react';

interface Props {}

const ClinicButton: FC<Props> = ({}) => {
  return (
    <Button
      variant="outline"
      className="gap-x-3 rounded-md h-auto  justify-start w-[220px]"
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
