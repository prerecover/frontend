import Image from 'next/image';
import eyeClose from '/public/assets/eye-close.svg';
import eyeOpen from '/public/assets/eye-open.svg';

export default function ShowPassword({ isShow, onClick }: { isShow: boolean; onClick: () => void }) {
    return <Image src={isShow ? eyeOpen : eyeClose} alt='eye' onClick={onClick} width={24} height={24} priority />;
}
