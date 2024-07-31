import { FC } from 'react';

interface LeftArrowProps {
    onClick: () => void;
}
export const LeftArrow: FC<LeftArrowProps> = ({ onClick }) => {
    return (
        <div className='cursor-pointer' onClick={onClick} id='prevArrow'>
            <svg width='9' height='14' viewBox='0 0 9 14' fill='none' className='w-3 h-[18px] text-grey-700'>
                <path
                    d='M7.5299 1.34315L1.87305 7L7.5299 12.6569'
                    stroke='#262626'
                    strokeWidth='1'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </svg>
        </div>
    );
};
