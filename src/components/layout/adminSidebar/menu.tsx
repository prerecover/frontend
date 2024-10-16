import { ROUTES } from '@/shared/utils/paths';
import { MenuItem } from '../sidebar/menuItem';
import { SiteWorkIcon } from '@/icons/SiteWorkIcon';
import { useLogout } from '@/shared/lib/hooks/useLogout';
import { AdminRegistrationIcon } from '@/icons/AdminRegistrationsIcon';
import { AppointmentIcon } from '@/icons/AppointmentIcon';
import { SurveyIcon } from '@/icons/SurveyIcon';

export const AdminMenu = () => {
    const { logout } = useLogout();
    return (
        <>
            <MenuItem icon={<SiteWorkIcon />} title={ROUTES.admin_dashboard.label} href={ROUTES.admin_dashboard.path} />
            <MenuItem
                icon={<AdminRegistrationIcon />}
                title={ROUTES.admin_registration.label}
                href={ROUTES.admin_registration.path}
            />
            <MenuItem
                icon={<AppointmentIcon />}
                title={ROUTES.admin_appointments.label}
                href={ROUTES.admin_appointments.path}
            />
            <MenuItem icon={<SurveyIcon />} title={ROUTES.admin_surveys.label} href={ROUTES.admin_surveys.path} />
            <MenuItem
                onClick={() => logout()}
                icon={
                    <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
                        <g clipPath='url(#clip0_5460_28865)'>
                            <path
                                d='M12.6991 18.559H12.5908C8.89078 18.559 7.10745 17.1007 6.79912 13.8341C6.76578 13.4924 7.01578 13.184 7.36578 13.1507C7.69912 13.1174 8.01578 13.3757 8.04912 13.7174C8.29078 16.334 9.52412 17.309 12.5991 17.309H12.7075C16.0991 17.309 17.2991 16.109 17.2991 12.7174V7.28405C17.2991 3.89238 16.0991 2.69238 12.7075 2.69238H12.5991C9.50745 2.69238 8.27412 3.68405 8.04912 6.35072C8.00745 6.69238 7.71578 6.95072 7.36578 6.91738C7.01578 6.89238 6.76578 6.58405 6.79078 6.24238C7.07412 2.92572 8.86578 1.44238 12.5908 1.44238H12.6991C16.7908 1.44238 18.5408 3.19238 18.5408 7.28405V12.7174C18.5408 16.809 16.7908 18.559 12.6991 18.559Z'
                                fill='#0064FA'
                            />
                            <path
                                d='M12.5009 10.625H3.01758C2.67591 10.625 2.39258 10.3417 2.39258 10C2.39258 9.65833 2.67591 9.375 3.01758 9.375H12.5009C12.8426 9.375 13.1259 9.65833 13.1259 10C13.1259 10.3417 12.8426 10.625 12.5009 10.625Z'
                                fill='#0064FA'
                            />
                            <path
                                d='M4.87552 13.4162C4.71719 13.4162 4.55885 13.3579 4.43385 13.2329L1.64219 10.4412C1.40052 10.1995 1.40052 9.79954 1.64219 9.55788L4.43385 6.76621C4.67552 6.52454 5.07552 6.52454 5.31719 6.76621C5.55885 7.00788 5.55885 7.40788 5.31719 7.64954L2.96719 9.99954L5.31719 12.3495C5.55885 12.5912 5.55885 12.9912 5.31719 13.2329C5.20052 13.3579 5.03385 13.4162 4.87552 13.4162Z'
                                fill='#0064FA'
                            />
                        </g>
                        <defs>
                            <clipPath id='clip0_5460_28865'>
                                <rect width='24' height='24' fill='white' />
                            </clipPath>
                        </defs>
                    </svg>
                }
                title={'Выход'}
                href={'/logout'}
            />
        </>
    );
};
