import Image from 'next/image';
import { ChangeEventHandler, FC } from 'react';

interface SearchInputProps {
    placeholder: string;
    value: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const SearchInput: FC<SearchInputProps> = ({ placeholder, value, onChange }) => {
    return (
        <div className='bg-white w-full rounded-[12px] border-solid border-[1px] border-blue-100 flex-between relative p-[9px] pl-4'>
            <div className='flex items-center gap-3 w-full pr-4'>
                <Image
                    src={'/assets/search.svg'}
                    alt='search'
                    width={16}
                    height={16}
                    className='w-[20px] h-[20px] min-h-[20px]'
                />
                <input type='text' placeholder={placeholder} value={value} onChange={onChange} className='w-full' />
            </div>
        </div>
    );
};
