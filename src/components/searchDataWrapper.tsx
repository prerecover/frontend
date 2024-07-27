import { FC } from 'react';

type Props = {
    children: JSX.Element;
    isLoading?: boolean;
    emptyText?: string;
    listIsUndefined: boolean;
    listLength: number;
};

export const SearchDataWrapper: FC<Props> = ({ children, emptyText = 'Список пуст', listIsUndefined, listLength }) => {
    return (
        <div className='flex-grow relative '>
            {!listIsUndefined && listLength > 0 ? (
                children
            ) : (
                <p className='text-[16px] font-medium absolute left-[50%] top-[50%] transform-gpu desktop:text-[20px]'>
                    {emptyText}
                </p>
            )}
        </div>
    );
};
