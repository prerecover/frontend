interface IHeaderItem {
    icon: string;
    title: string;
    link: string;
    isActive: boolean;
}

export const headerList: IHeaderItem[] = [
    {
        icon: '/assets/clinic.svg',
        link: '/admin',
        title: 'Клиники',
        isActive: false
    },
    {
        icon: '/assets/appointment-blue.svg',
        link: '/admin/appointments',
        title: 'Записи',
        isActive: false
    },
    {
        icon: '/assets/mail.svg',
        link: '',
        title: 'СМС',
        isActive: false
    },
]