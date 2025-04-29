import Image from 'next/image';
import { IFile } from '../../types/files.types';

interface ICardFileProps {
  file: IFile;
}

export default function CardFile({ file }: ICardFileProps) {
  const { url, fileName, weight } = file;
  return (
    <div className="p-4 relative border border-[#C8DBF6] rounded-xl overflow-hidden">
        <div className="w-16 h-16 overflow-hidden rounded-lg">
        <Image
          src={url}
          alt="card image"
          className="w-full"
          width={64}
          height={64}
        />
      </div>
      <p className="font-semibold text-base text-[#262626] pr-6 overflow-hidden">{fileName}</p>
      <p className="font-bold text-sm text-[#B1B2B4]">{weight}</p>

      <Image
        src="assets/more.svg"
        alt="more"
        className="absolute top-4 right-4"
        width={20}
        height={20}
      />
      <Image
        src="assets/download.svg"
        alt="download"
        className="absolute bottom-4 right-4"
        width={20}
        height={20}
      />
    </div>
  );
}
