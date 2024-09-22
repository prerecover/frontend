import Image from 'next/image';
import notifyImg from '/public/assets/notification.svg';
import { useNotifyModal } from '@/shared/store/notifyModal';
import { useNotifyStore } from '@/shared/store/notifyStore';

export const NotificationsLink = () => {
    const { setIsOpen, isOpen } = useNotifyModal();
    const { notifications } = useNotifyStore();
    const haveUnread = notifications.filter((el) => el.isRead === false).length > 0;

    return (
        <div className='relative '>
            <Image
                src={notifyImg}
                alt='notifications'
                style={{ cursor: 'pointer' }}
                onClick={() => setIsOpen(!isOpen)}
                width={20}
                height={20}
                priority
            />

            {haveUnread && (
                <div className='absolute bg-red-400 top-[2px] right-[3px] rounded-[50%] w-[5px] h-[5px]'></div>
            )}

            {/* <NotificationsModal isOpen={isOpenNotifications} setOpen={setOpenNotifications} /> */}
        </div>
    );
};
