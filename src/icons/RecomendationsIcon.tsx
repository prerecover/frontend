import { PropsWithClassName, PropsWithSize } from '@/shared/types';
import { FC } from 'react';

export const RecomendationsIcon: FC<PropsWithClassName<PropsWithSize>> = ({ className, width = 24, height = 24 }) => {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M8.99115 12.6401C8.82448 12.6401 8.66615 12.5734 8.54948 12.4568L6.53281 10.4401C6.29115 10.1984 6.29115 9.79844 6.53281 9.55677C6.77448 9.3151 7.17448 9.3151 7.41615 9.55677L8.99115 11.1318L12.5745 7.54844C12.8161 7.30677 13.2161 7.30677 13.4578 7.54844C13.6995 7.7901 13.6995 8.1901 13.4578 8.43177L9.43281 12.4568C9.31615 12.5734 9.15781 12.6401 8.99115 12.6401Z'
                fill='#0064FA'
            />
            <path
                d='M10.001 18.9557C9.47604 18.9557 8.95104 18.7807 8.54271 18.4307L7.22604 17.2974C7.09271 17.1807 6.75937 17.0641 6.58437 17.0641H5.15104C3.91771 17.0641 2.91771 16.0641 2.91771 14.8307V13.4057C2.91771 13.2307 2.80104 12.9057 2.68438 12.7724L1.55937 11.4474C0.876042 10.6391 0.876042 9.36406 1.55937 8.55573L2.68438 7.23073C2.80104 7.0974 2.91771 6.7724 2.91771 6.5974V5.16406C2.91771 3.93073 3.91771 2.93073 5.15104 2.93073H6.59271C6.76771 2.93073 7.10104 2.80573 7.23438 2.6974L8.55104 1.56406C9.36771 0.864063 10.6427 0.864063 11.4594 1.56406L12.776 2.6974C12.9094 2.81406 13.2427 2.93073 13.4177 2.93073H14.8344C16.0677 2.93073 17.0677 3.93073 17.0677 5.16406V6.58073C17.0677 6.75573 17.1927 7.08906 17.3094 7.2224L18.4427 8.53906C19.1427 9.35573 19.1427 10.6307 18.4427 11.4474L17.3094 12.7641C17.1927 12.8974 17.0677 13.2307 17.0677 13.4057V14.8224C17.0677 16.0557 16.0677 17.0557 14.8344 17.0557H13.4177C13.2427 17.0557 12.9094 17.1807 12.776 17.2891L11.4594 18.4224C11.051 18.7807 10.526 18.9557 10.001 18.9557ZM5.15104 4.18073C4.60937 4.18073 4.16771 4.6224 4.16771 5.16406V6.58906C4.16771 7.06406 3.94271 7.6724 3.63437 8.03073L2.50937 9.35573C2.21771 9.6974 2.21771 10.2891 2.50937 10.6307L3.63437 11.9557C3.94271 12.3224 4.16771 12.9224 4.16771 13.3974V14.8224C4.16771 15.3641 4.60937 15.8057 5.15104 15.8057H6.59271C7.07604 15.8057 7.68437 16.0307 8.05104 16.3474L9.36771 17.4807C9.70937 17.7724 10.3094 17.7724 10.651 17.4807L11.9677 16.3474C12.3344 16.0391 12.9427 15.8057 13.426 15.8057H14.8427C15.3844 15.8057 15.826 15.3641 15.826 14.8224V13.4057C15.826 12.9224 16.051 12.3141 16.3677 11.9474L17.501 10.6307C17.7927 10.2891 17.7927 9.68906 17.501 9.3474L16.3677 8.03073C16.051 7.66406 15.826 7.05573 15.826 6.5724V5.16406C15.826 4.6224 15.3844 4.18073 14.8427 4.18073H13.426C12.9427 4.18073 12.3344 3.95573 11.9677 3.63906L10.651 2.50573C10.3094 2.21406 9.70937 2.21406 9.36771 2.50573L8.05104 3.6474C7.68437 3.95573 7.06771 4.18073 6.59271 4.18073H5.15104Z'
                fill='#0064FA'
            />
        </svg>
    );
};
