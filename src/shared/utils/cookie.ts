export function setCookie(c_name: string, value: any, exdays: number) {
    const exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    const c_value = escape(value) + (exdays == null ? '' : '; expires=' + exdate.toUTCString());
    document.cookie = c_name + '=' + c_value;
}
