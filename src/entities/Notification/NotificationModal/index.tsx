'use client';
import { Text } from '@/components/ui/text';
import { client } from '@/lib/apollo';
import { cn } from '@/lib/utils';
import { getCookie } from '@/shared/lib/hooks/useCookie';
import { useNotifyModal } from '@/shared/store/notifyModal';
import { gql, useMutation } from '@apollo/client';
import Image from 'next/image';
import { useEffect } from 'react';
import NotificationCard from '../NotificationCard';
import { useNotifyStore } from '@/shared/store/notifyStore';
import Pusher from 'pusher-js';
import { useAuth } from '@/app/(auth)/auth-wrapper';
import { INotification } from '@/shared/types/notification.interface';

const SET_READ = gql(`

mutation SetAsRead($_id:String!) {
    setAsRead(notificationId: $_id) {
        _id
        isRead
        text
    }
}
`);

const NOTIFICATIONS_BY_USER = gql(`
query NotificationsByUser {
    notificationsByUser {
        _id
        createdAt
        isRead
        text
        updatedAt
    }
}
`);

const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, { cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER! });
Pusher.logToConsole = true;

export default function NotificationModal() {
    const { isOpen, setIsOpen } = useNotifyModal();
    const { user } = useAuth();
    const { notifications, setNotifications } = useNotifyStore();
    const [setRead] = useMutation(SET_READ);
    const haveUnread = notifications.filter((el) => el.isRead === false).length > 0;
    useEffect(() => {
        const channel = pusher.subscribe(user._id);
        console.log('subscribe in', user._id);
        channel.bind('notification', (data: any) => {
            const notification: INotification = JSON.parse(data.chunk);
            setNotifications([...notifications, notification]);
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [notifications, user]);
    useEffect(() => {
        if (isOpen && notifications.length > 0) {
            notifications.map((el, i) => {
                setRead({ variables: { _id: el._id } });
                const notifyList = [...notifications];
                notifyList[i] = { ...el, isRead: true };
                setNotifications(notifyList);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);
    useEffect(() => {
        const token = getCookie('access_token');
        client
            .query({
                query: NOTIFICATIONS_BY_USER,
                context: {
                    headers: {
                        Authorization: token ? `Bearer ${token}` : '',
                    },
                },
            })
            .then((data) => setNotifications(data.data.notificationsByUser));

        if (isOpen && notifications.length > 0) {
            notifications.map((el, i) => {
                setRead({ variables: { _id: el._id } });
                const notifyList = [...notifications];
                notifyList[i] = { ...el, isRead: true };
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div
            className={cn(
                `mobile:w-dvw mobile:h-dvh w-[466px] h-fit bg-white rounded-[12px] absolute z-40 desktop:right-10 desktop`,
                !isOpen && 'hidden',
            )}>
            <div className='flex-between p-[32px]'>
                <Text className='text-[19px] font-semibold bg-yellow-400'>Уведомления</Text>
                <Image
                    src='/assets/close-i.svg'
                    alt='close'
                    onClick={() => setIsOpen(false)}
                    width={20}
                    height={20}
                    className='cursor-pointer'
                />
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-col bg-white-background pl-6'>
                    {haveUnread && <Text className='text-[14px] font-medium text-grey-700 pt-4'>Непрочитанные</Text>}
                    {notifications
                        .filter((el) => el.isRead === false)
                        .reverse()
                        .map((el) => (
                            <NotificationCard notificaion={el} key={el._id} className='pl-1' />
                        ))}
                </div>
                <div className='flex flex-col pl-6'>
                    {notifications
                        .filter((el) => el.isRead)
                        .reverse()
                        .map((el) => (
                            <NotificationCard notificaion={el} key={el._id} className='pl-1' />
                        ))}
                </div>
            </div>
        </div>
    );
}
