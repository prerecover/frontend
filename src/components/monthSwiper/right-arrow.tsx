import { FC } from 'react';

interface RightArrowProps {
    onClick: () => void;
}
export const RightArrow: FC<RightArrowProps> = ({ onClick }) => {
    return (
        <div className='cursor-pointer' onClick={onClick} id='nextArrow'>
            <svg width='20' height='20' viewBox='0 0 9 14' fill='none' className='w-3 h-[18px] text-grey-700'>
                <path
                    d='M1.84315 1.34315L7.5 7L1.84315 12.6569'
                    stroke='#262626'
                    strokeWidth='1'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </svg>
        </div>
    );
};
