import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { INotification } from '@/shared/types/notification.interface';
import { formatRelativeDate } from '@/shared/utils/formatDate';
import Image from 'next/image';

export default function NotificationCard({
    notificaion,
    className,
}: {
    notificaion: INotification;
    className?: string;
}) {
    const positiveImage = !notificaion.text.includes('отклонена');
    return (
        <>
            <div className={cn('flex gap-3 items-center my-3', className)}>
                <Image
                    src={positiveImage ? '/assets/notification-success.svg' : '/assets/appointment-negative.svg'}
                    width={52}
                    height={52}
                    alt='notification'
                />
                <div className='flex flex-col gap-[6px]'>
                    <Text className='text-[14px] font-medium'>{notificaion.text}</Text>
                    <Text className='text-[12px] font-medium text-grey-500'>
                        {formatRelativeDate(new Date(notificaion.createdAt))}
                    </Text>
                </div>
            </div>
            <div className='w-full h-[2px] bg-[#EBF3FF] mt-1'></div>
        </>
    );
}
