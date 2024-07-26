import { Checkbox } from '@/components/ui/checkbox';
import { Text } from '@/components/ui/text';
import Link from 'next/link';
import { FC, SetStateAction } from 'react';

interface PolicyProps {
    isChecked: boolean;
    setIsChecked: React.Dispatch<SetStateAction<boolean>>;
}
export const Policy: FC<PolicyProps> = ({ isChecked, setIsChecked }) => {
    return (
        <div className='flex-center gap-2'>
            <Checkbox
                checked={isChecked}
                onCheckedChange={() => setIsChecked((prev) => !prev)}
                className='w-[20px] h-[20px] rounded-[5px] border-grey-400'
            />
            <div className='flex gap-2'>
                <Text type='p' className='text-[14px] text-grey '>
                    Я согласен со
                </Text>
                <Link href={'/'}>
                    <Text type='p' className='text-[14px] text-blue'>
                        всеми условиями сайта
                    </Text>
                </Link>
            </div>
        </div>
    );
};
