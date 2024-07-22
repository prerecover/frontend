export const useCookie = () => {
    const cookies = `; ${document.cookie}`;

    const getCookie = (name: string) => {
        const parts = cookies.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()!.split(";").shift();
    };

    const setCookie = (name: string, value: string, days: number) => {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    };

    const removeCookie = (name: string) => {
        setCookie(name, "", -1);
    };

    return { getCookie, setCookie, removeCookie };
};
