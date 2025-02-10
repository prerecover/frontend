'use client';
import Link from 'next/link';
import logo from '/public/assets/logo.svg';

import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function Logo({ isFooter = false }: { isFooter?: boolean }) {
  return (
    <Link
      className="flex items-center gap-[10px] text-[20px] font-semibold"
      href="/"
    >
      <Image src={logo} alt="logo" width={40} height={40} />
      <span className={cn('text-blue', isFooter == false && 'logo:hidden')}>
        Pre Recover
      </span>
    </Link>
  );
}
