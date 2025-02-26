import Image from 'next/image';
import notifyImg from '/public/assets/notification.svg';
import { useNotifyModal } from '@/shared/store/notifyModal';
import { useNotifyStore } from '@/shared/store/notifyStore';
import { useProfileModal } from '@/shared/store/profileModal';

export const NotificationsLink = () => {
  const { setIsOpen, isOpen } = useNotifyModal();
  const { notifications } = useNotifyStore();
  const { setIsOpen: setProfileOpen } = useProfileModal();
  const haveUnread =
    notifications.filter((el) => el.isRead === false).length > 0;

  const handleNotify = () => {
    setProfileOpen(false);
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative ">
      <Image
        src={notifyImg}
        alt="notifications"
        style={{ cursor: 'pointer' }}
        onClick={() => handleNotify()}
        width={20}
        height={20}
        priority
      />

      {haveUnread && (
        <div className="absolute bg-red-400 top-[2px] right-[3px] rounded-[50%] w-[5px] h-[5px]"></div>
      )}

      {/* <NotificationsModal isOpen={isOpenNotifications} setOpen={setOpenNotifications} /> */}
    </div>
  );
};
