import { Text } from '@/components/ui/text';
import { ROUTES } from '@/shared/utils/paths';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

const linkTitles: { [key: string]: string } = {
    '/': ROUTES.main.label,
    '/search': ROUTES.search.label,
};

export const HeaderLink: FC = () => {
    const path = usePathname();
    return (
        <Text type='p' className='text-[14px] text-blue' fz={500}>
            {linkTitles[path]}
        </Text>
    );
};
