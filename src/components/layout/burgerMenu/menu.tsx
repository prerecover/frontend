import { ROUTES } from '@/shared/utils/paths';
import { ReactElement } from 'react';
import styles from './styles.module.scss';
import { AccountIcon, HomeIcon, SearchIcon } from '@/icons';
interface MenuData {
    label: string;
    path: string;
    icon: ReactElement;
    disabled?: boolean;
}

interface MenuDataProps {
    default: MenuData[];
}
export const menuData: MenuDataProps = {
    default: [
        {
            label: ROUTES.account.label,
            path: ROUTES.account.path,
            icon: <AccountIcon width={20} height={20} className={styles.icon} />,
        },
        {
            label: ROUTES.main.label,
            path: ROUTES.main.path,
            icon: <HomeIcon width={20} height={20} className={styles.icon} />,
        },
        {
            label: ROUTES.search.label,
            path: ROUTES.search.path,
            icon: <SearchIcon width={20} height={20} className={styles.icon} />,
        },
        {
            label: ROUTES.history.label,
            path: ROUTES.history.path,
            icon: (
                <svg className={styles.icon} width={20} height={20} viewBox='0 0 20 20' fill='none'>
                    <path
                        d='M18.9166 9.58333L17.2505 11.25L15.5833 9.58333M17.4542 10.8333C17.4845 10.5597 17.5 10.2817 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C12.3561 17.5 14.4584 16.4136 15.8333 14.7144M10 5.83333V10L12.5 11.6667'
                        stroke='#0064FA'
                        strokeWidth='1.25'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                </svg>
            ),
        },
        {
            label: ROUTES.notes.label,
            path: ROUTES.notes.path,
            icon: (
                <svg
                    width={20}
                    height={20}
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className={styles.icon}>
                    <path
                        d='M16.25 10.4168V11.4585C16.25 13.9889 16.25 15.2541 15.7187 16.2028C15.3433 16.8732 14.7897 17.4268 14.1193 17.8022C13.1706 18.3335 11.9054 18.3335 9.375 18.3335V18.3335C6.84459 18.3335 5.57939 18.3335 4.63074 17.8022C3.9603 17.4268 3.40674 16.8732 3.03127 16.2028C2.5 15.2541 2.5 13.9889 2.5 11.4585V10.0002C2.5 7.66661 2.5 6.49983 2.95414 5.60853C3.35361 4.82453 3.99103 4.18711 4.77504 3.78764C5.66634 3.3335 6.83311 3.3335 9.16667 3.3335V3.3335H10'
                        stroke='#0064FA'
                        strokeWidth='1.25'
                        strokeLinecap='round'
                    />
                    <path
                        d='M15.4165 2.08368C15.748 1.75216 16.1977 1.56592 16.6665 1.56592C17.1353 1.56592 17.585 1.75216 17.9165 2.08368C18.248 2.41521 18.4343 2.86484 18.4343 3.33368C18.4343 3.80253 18.248 4.25216 17.9165 4.58368L9.99984 12.5004L6.6665 13.3337L7.49984 10.0004L15.4165 2.08368Z'
                        stroke='#0064FA'
                        strokeWidth='1.25'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                </svg>
            ),
        },
        {
            label: ROUTES.payments.label,
            path: ROUTES.payments.path,
            icon: (
                <svg
                    className={styles.icon}
                    width={20}
                    height={20}
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='11.5' cy='8.5' r='5.875' stroke='#0064FA' strokeWidth='1.25' />
                    <circle cx='8.5' cy='11.5' r='5.875' fill='white' stroke='#0064FA' strokeWidth='1.25' />
                    <path
                        d='M6.5 14.0667H8.5M10.5 8.93333H8.5M8.5 8.93333H7.66667C7.02233 8.93333 6.5 9.45567 6.5 10.1V10.1C6.5 10.7443 7.02233 11.2667 7.66667 11.2667H9.1C9.8732 11.2667 10.5 11.8935 10.5 12.6667V12.6667C10.5 13.4399 9.8732 14.0667 9.1 14.0667H8.5M8.5 8.93333V8M8.5 14.0667V15'
                        stroke='#0064FA'
                        strokeWidth='1.25'
                        strokeMiterlimit='10'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                </svg>
            ),
        },
        {
            label: ROUTES.saved.label,
            path: ROUTES.saved.path,
            icon: (
                <svg width={20} height={20} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M15.8914 18.9577C15.4664 18.9577 14.9997 18.8327 14.5497 18.5743L10.483 16.316C10.2414 16.1827 9.76636 16.1827 9.52469 16.316L5.45802 18.5743C4.63302 19.0327 3.79136 19.0827 3.14969 18.6993C2.50802 18.3243 2.14136 17.566 2.14136 16.6243V4.88268C2.14136 2.76602 3.86636 1.04102 5.98302 1.04102H14.0247C16.1414 1.04102 17.8664 2.76602 17.8664 4.88268V16.6243C17.8664 17.566 17.4997 18.3243 16.858 18.6993C16.5664 18.8743 16.233 18.9577 15.8914 18.9577ZM9.99969 14.966C10.3914 14.966 10.7747 15.0493 11.083 15.2243L15.1497 17.4827C15.5747 17.7243 15.9664 17.7743 16.2164 17.6243C16.4664 17.4743 16.608 17.116 16.608 16.6243V4.88268C16.608 3.45768 15.4414 2.29102 14.0164 2.29102H5.98302C4.55802 2.29102 3.39136 3.45768 3.39136 4.88268V16.6243C3.39136 17.116 3.53302 17.4827 3.78302 17.6243C4.03302 17.766 4.42469 17.7243 4.84969 17.4827L8.91636 15.2243C9.22469 15.0493 9.60802 14.966 9.99969 14.966Z'
                        fill='#0064FA'
                    />
                </svg>
            ),
        },
    ],
};
