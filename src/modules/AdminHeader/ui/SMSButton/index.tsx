import { ButtonHTMLAttributes, FC } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SMSButton: FC<Props> = ({ className, ...props }) => {
  return (
    <Button
      variant="outline"
      className={cn(
        'gap-x-3 rounded-md h-auto w-[220px] justify-start',
        className
      )}
      {...props}
    >
      <Image src={'/assets/mail.svg'} width={24} height={24} alt="иконка смс" />
      <p className="font-medium">СМС</p>
    </Button>
  );
};

export { SMSButton };
