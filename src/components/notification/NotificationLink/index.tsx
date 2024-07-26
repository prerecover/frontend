import Image from 'next/image';
import { useState } from 'react';
import notifyImg from '/public/assets/notification.svg';

export const NotificationsLink = () => {
    const [isOpenNotifications, setOpenNotifications] = useState(false);

    return (
        <div className='relative '>
            <Image
                src={notifyImg}
                alt='notifications'
                style={{ cursor: 'pointer' }}
                onClick={() => setOpenNotifications((prev) => !prev)}
                width={20}
                height={20}
                priority
            />

            <div className='absolute bg-red-400 top-[2px] right-[3px] rounded-[50%] w-[5px] h-[5px]'></div>

            {/* <NotificationsModal isOpen={isOpenNotifications} setOpen={setOpenNotifications} /> */}
        </div>
    );
};
