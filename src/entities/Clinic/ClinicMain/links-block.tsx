'use client';
import { CooperationIcon, NoWifiIcon, WifiIcon } from '@/icons';
import { LinkItem } from './link-item';
import { DoctorsIcon } from '@/icons/DoctorsIcon';
import { usePathname, useRouter } from 'next/navigation';

export default function LinksBlock({
    onlineServices,
    offlineServices,
    news,
    doctors,
}: {
    onlineServices?: number;
    offlineServices?: number;
    news?: number;
    doctors?: number;
}) {
    const router = useRouter();
    const pathname = usePathname();
    return (
        <div className='grid grid-cols-2 gap-2 slider:gap-3 desktop:grid-cols-4'>
            <LinkItem
                onClick={() => router.push(`${pathname}/online_services`)}
                title='Онлайн услуги'
                count={onlineServices}
                icon={<WifiIcon />}
            />
            <LinkItem
                onClick={() => router.push(`${pathname}/offline_services`)}
                title='Офлайн услуги'
                count={offlineServices}
                icon={<NoWifiIcon />}
            />
            <LinkItem
                onClick={() => router.push(`${pathname}/news`)}
                title='Новости'
                count={news}
                icon={<CooperationIcon />}
            />
            <LinkItem
                onClick={() => router.push(`${pathname}/doctors`)}
                title='Врачи'
                count={doctors}
                icon={<DoctorsIcon />}
            />
        </div>
    );
}
