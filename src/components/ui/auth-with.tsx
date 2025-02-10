import Image from 'next/image';
import BlueBox from './blue-box';

import { Text } from './text';

export default function AuthWith({ img, text }: { img: string; text: string }) {
  return (
    <>
      <BlueBox className="flex-center reverse_slider:hidden">
        <div className="flex gap-[10px]">
          <Image src={img} alt="auth icon" width={24} height={24} priority />
          <Text type="p">{text}</Text>
        </div>
      </BlueBox>

      <div className="flex-center slider:hidden">
        <Image
          src={img}
          alt="auth icon"
          width={24}
          height={24}
          priority
          className=""
        />
      </div>
    </>
  );
}
