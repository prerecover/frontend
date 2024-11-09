'use client';
import { useAuth } from '@/app/(auth)/auth-wrapper';
import { Text } from '@/components/ui/text';
import Image from 'next/image';
import Link from 'next/link';

export default function AccountDesktopMenuItem({
    text,
    icon,
    href,
    onClick,
}: {
    text: string;
    icon: JSX.Element;
    href: string;
    onClick?: () => void;
}) {
    const { user } = useAuth();
    return (
        <Link className='flex-between mx-4 h-[56px] bg-white rounded-[12px] p-4' href={href} onClick={onClick}>
            <div className='flex gap-4'>
                {icon}
                <Text type='p' className='text-[14px] font-medium'>
                    {text}
                </Text>
            </div>
            <div className='flex gap-4'>

            {href == '/history' && user.historyStudied === true && (
                <Image src='/assets/history-study.svg' width={20} height={20} alt='history studie' />
            )}
            <Image src={'/assets/arrow-right.svg'} width={16} height={16} alt='go to' />
            </div>
        </Link>
    );
}
