export const useCookie = () => {
    const cookies = `; ${document.cookie}`;

    const getCookie = (name: string) => {
        const parts = cookies.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()!.split(';').shift();
    };

    const setCookie = (name: string, value: string, days: number) => {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + (value || '') + expires + '; path=/';
    };

    const removeCookie = (name: string) => {
        setCookie(name, '', -1);
    };

    return { getCookie, setCookie, removeCookie };
};

export function setCookie(name: string, val: string, days: number, httpOnly: boolean = false) {
    const date = new Date();
    const value = val;

    // Set it expire in 7 days
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

    // Set it
    document.cookie =
        name +
        '=' +
        value +
        '; expires=' +
        date.toUTCString() +
        `; path=/; SameSite=None; Secure; ${httpOnly && 'HttpOnly;'}`;
}

export function getCookie(name: string) {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + name + '=');
    if (parts.length == 2) {
        // @ts-expect-error "asd"
        return parts.pop().split(';').shift();
    }
}
