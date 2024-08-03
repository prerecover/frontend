import { MenuItem } from './menuItem';

import { ROUTES } from '@/shared/utils/paths';
import { HomeIcon, PaymentsIcon, SearchIcon } from '@/icons';

export const UserMenu = () => {
    return (
        <>
            <MenuItem icon={<HomeIcon />} title={ROUTES.main.label} href={ROUTES.main.path} />

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
                href={ROUTES.notes.path}
            />
            <MenuItem
                icon={<PaymentsIcon width={20} height={20} />}
                title={ROUTES.payments.label}
                href={ROUTES.payments.path}
            />

            {/* <MenuItem */}
            {/*     icon={ */}
            {/*         <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'> */}
            {/*             <path */}
            {/*                 d='M12.6991 18.5581H12.5908C8.89078 18.5581 7.10745 17.0997 6.79912 13.8331C6.76578 13.4914 7.01578 13.1831 7.36578 13.1497C7.69912 13.1164 8.01578 13.3747 8.04912 13.7164C8.29078 16.3331 9.52412 17.3081 12.5991 17.3081H12.7075C16.0991 17.3081 17.2991 16.1081 17.2991 12.7164V7.28307C17.2991 3.89141 16.0991 2.69141 12.7075 2.69141H12.5991C9.50745 2.69141 8.27412 3.68307 8.04912 6.34974C8.00745 6.69141 7.71578 6.94974 7.36578 6.91641C7.01578 6.89141 6.76578 6.58307 6.79078 6.24141C7.07412 2.92474 8.86578 1.44141 12.5908 1.44141H12.6991C16.7908 1.44141 18.5408 3.19141 18.5408 7.28307V12.7164C18.5408 16.8081 16.7908 18.5581 12.6991 18.5581Z' */}
            {/*                 fill='#B1B2B4' */}
            {/*             /> */}
            {/*             <path */}
            {/*                 d='M12.499 10.625H3.01562C2.67396 10.625 2.39062 10.3417 2.39062 10C2.39062 9.65833 2.67396 9.375 3.01562 9.375H12.499C12.8406 9.375 13.124 9.65833 13.124 10C13.124 10.3417 12.8406 10.625 12.499 10.625Z' */}
            {/*                 fill='#B1B2B4' */}
            {/*             /> */}
            {/*             <path */}
            {/*                 d='M4.87552 13.4152C4.71719 13.4152 4.55885 13.3569 4.43385 13.2319L1.64219 10.4402C1.40052 10.1986 1.40052 9.79857 1.64219 9.5569L4.43385 6.76523C4.67552 6.52357 5.07552 6.52357 5.31719 6.76523C5.55885 7.0069 5.55885 7.4069 5.31719 7.64857L2.96719 9.99857L5.31719 12.3486C5.55885 12.5902 5.55885 12.9902 5.31719 13.2319C5.20052 13.3569 5.03385 13.4152 4.87552 13.4152Z' */}
            {/*                 fill='#B1B2B4' */}
            {/*             /> */}
            {/*         </svg> */}
            {/*     } */}
            {/*     title='Выход' */}
            {/*     href={ROUTES.login.path} */}
            {/*     onClick={() => logout()} */}
            {/* /> */}
        </>
    );
};
