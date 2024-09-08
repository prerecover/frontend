import { MenuItem } from './menuItem';

import { ROUTES } from '@/shared/utils/paths';
import { SearchIcon } from '@/icons';
import { useAuth } from '@/app/(auth)/auth-wrapper';
import { HeartIcon } from '@/icons/HeartIcon';

export const UserMenu = () => {
    const { user } = useAuth();
    return (
        <>
            <MenuItem icon={<HeartIcon />} title={ROUTES.main.label} href={ROUTES.main.path} />

            <MenuItem
                icon={<SearchIcon width={20} height={20} />}
                title={ROUTES.search.label}
                href={ROUTES.search.path}
            />
            <MenuItem
                icon={
                    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M16.25 10.4173V11.459C16.25 13.9894 16.25 15.2546 15.7187 16.2032C15.3433 16.8737 14.7897 17.4272 14.1193 17.8027C13.1706 18.334 11.9054 18.334 9.375 18.334V18.334C6.84459 18.334 5.57939 18.334 4.63074 17.8027C3.9603 17.4272 3.40674 16.8737 3.03127 16.2032C2.5 15.2546 2.5 13.9894 2.5 11.459V10.0007C2.5 7.6671 2.5 6.50032 2.95414 5.60902C3.35361 4.82501 3.99103 4.1876 4.77504 3.78812C5.66634 3.33398 6.83311 3.33398 9.16667 3.33398V3.33398H10'
                            stroke='#0064FA'
                            strokeWidth='1.25'
                            strokeLinecap='round'
                        />
                        <path
                            d='M15.416 2.08417C15.7475 1.75265 16.1972 1.56641 16.666 1.56641C17.1349 1.56641 17.5845 1.75265 17.916 2.08417C18.2475 2.41569 18.4338 2.86533 18.4338 3.33417C18.4338 3.80301 18.2475 4.25265 17.916 4.58417L9.99935 12.5008L6.66602 13.3342L7.49935 10.0008L15.416 2.08417Z'
                            stroke='#0064FA'
                            strokeWidth='1.25'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                }
                title={ROUTES.notes.label}
                href={user._id ? ROUTES.notes.path : '/login'}
            />
            <MenuItem
                icon={
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <circle cx='13.8' cy='10.1984' r='7.175' stroke='#0064FA' strokeWidth='1.25' />
                        <circle cx='10.1984' cy='13.8' r='7.175' fill='white' stroke='#0064FA' strokeWidth='1.25' />
                        <path
                            d='M7.80078 16.8816H10.2008M12.6008 10.7216H10.2008M10.2008 10.7216H9.20078C8.42758 10.7216 7.80078 11.3484 7.80078 12.1216V12.1216C7.80078 12.8948 8.42758 13.5216 9.20078 13.5216H10.9208C11.8486 13.5216 12.6008 14.2737 12.6008 15.2016V15.2016C12.6008 16.1294 11.8486 16.8816 10.9208 16.8816H10.2008M10.2008 10.7216V9.60156M10.2008 16.8816V18.0016'
                            stroke='#0064FA'
                            stroke-width='1.25'
                            stroke-miterlimit='10'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                        />
                    </svg>
                }
                title={ROUTES.payments.label}
                href={user._id ? ROUTES.payments.path : '/login'}
            />
        </>
    );
};
