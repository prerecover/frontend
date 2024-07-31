import { cn } from '@/lib/utils';
import { FC, ReactNode, TouchEvent, useEffect, useState } from 'react';
import { Text } from './text';

type Props = {
    children: ReactNode;
    isOpen: boolean;
    closeHandler: () => void;
    title: string;
};

export const AccountPopup: FC<Props> = ({ children, isOpen, closeHandler, title }) => {
    const [touchStart, setTouchStart] = useState(0);
    const [bottomPosition, setBottomPosition] = useState(0);

    const handleTouchStart = (e: TouchEvent) => {
        setTouchStart(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
        const currentTouch = e.touches[0].clientY;
        const touchDelta = currentTouch - touchStart;

        if (touchDelta > 0) {
            setBottomPosition(-touchDelta);
        }
    };

    const handleTouchEnd = () => {
        if (-bottomPosition > 150) {
            closeHandler();
            setBottomPosition(-2000);
        } else {
            setBottomPosition(0);
        }
    };

    useEffect(() => {
        document.addEventListener('touchmove', (e) => {
            e.preventDefault();
        });
    }, []);

    useEffect(() => {
        if (!isOpen) {
            setBottomPosition(0);
            document.body.style.overflowY = 'auto';
        } else {
            document.body.style.overflowY = 'hidden';
        }
    }, [isOpen]);

    const popupStyle = {
        bottom: !isOpen ? '-200vh' : `${bottomPosition}px`,
        transition: bottomPosition === -2000 ? 'bottom 0.3s ease-in-out' : 'bottom 0.2s ease-in-out',
    };

    return (
        <>
            <div
                className={cn(
                    'fixed top-0 bottom-0 left-0 right-0 w-full h-dvh bg-dark opacity-0 z-30 pointer-events-none transition',
                    isOpen && 'opacity-50 pointer-events-auto',
                )}
                onClick={() => closeHandler()}></div>
            <div
                className={cn(
                    'fixed bottom-[-200vh] left-0 right-0 max-h-[91vh] h-full bg-white p-4 pt-2 rounded-t-[24px] z-40 select-none',
                    isOpen && 'bottom-0',
                )}
                style={popupStyle}>
                <div className='flex flex-col h-full'>
                    <div
                        className='relative top-0 w-[64px] h-[5px] cursor-pointer bg-grey-200 m-auto rounded-full'
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        onClick={() => closeHandler()}></div>

                    <Text
                        type='h4'
                        position='center'
                        className='tet-[24px] font-medium text-center flex justify-center text-[#000] pt-[26px] pb-[16px]'>
                        {title}
                    </Text>

                    <Text type='p' className='overflow-y-auto m-4 flex-grow'>
                        {children}
                    </Text>
                </div>
            </div>
        </>
    );
};
