import Link from 'next/link';
import logo from '/public/assets/logo.svg';

import Image from 'next/image';

export default function Logo() {
    return (
        <Link className='flex items-center gap-[10px] text-[20px] font-semibold' href='/'>
            <Image src={logo} alt='logo' width={40} height={40} />
            <span className='logo:hidden text-blue'>Pre Recover</span>
        </Link>
    );
}
