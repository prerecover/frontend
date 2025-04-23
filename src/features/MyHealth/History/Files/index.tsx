import { IAppointment } from '@/shared/types/appointment.interface';
import { IFile } from '../../types/files.types';
import CardFile from './CardFile';

const fileData: IFile[] = [
  {
    id: '1',
    url: 'https://i.pinimg.com/736x/4a/ad/a7/4aada7610c2007931039b3c6a26e63fd.jpg',
    fileName: 'file_003.img',
    weight: '124 КБ',
  },
  {
    id: '1',
    url: 'https://i.pinimg.com/736x/4a/ad/a7/4aada7610c2007931039b3c6a26e63fd.jpg',
    fileName: 'file_003.img',
    weight: '124 КБ',
  },
  {
    id: '1',
    url: 'https://i.pinimg.com/736x/4a/ad/a7/4aada7610c2007931039b3c6a26e63fd.jpg',
    fileName: 'file_003.img',
    weight: '124 КБ',
  },
  {
    id: '1',
    url: 'https://i.pinimg.com/736x/4a/ad/a7/4aada7610c2007931039b3c6a26e63fd.jpg',
    fileName: 'file_003.img',
    weight: '124 КБ',
  },
  {
    id: '1',
    url: 'https://i.pinimg.com/736x/4a/ad/a7/4aada7610c2007931039b3c6a26e63fd.jpg',
    fileName: 'file_003.img',
    weight: '124 КБ',
  },
];

interface IFilesProps {
  appointments: IAppointment[]
}


export default function Files({appointments}: IFilesProps) {
  return (
    <div className="grid grid-cols-3 gap-4 min-h-0 h-ful">
      {fileData && fileData.map((item) => <CardFile file={item} />)}
    </div>
  );
}
