import { ROUTES } from '@/shared/utils/paths';
import { MenuItem } from '../sidebar/menuItem';
import { SiteWorkIcon } from '@/icons/SiteWorkIcon';
import { CallIcon } from '@/icons/CallIcon';

export const AdminMenu = () => {
    return (
        <>
            <MenuItem icon={<SiteWorkIcon />} title={ROUTES.admin_dashboard.label} href={ROUTES.admin_dashboard.path} />
            <MenuItem
                icon={<CallIcon />}
                title={ROUTES.admin_administrator.label}
                href={ROUTES.admin_administrator.path}
            />
        </>
    );
};
