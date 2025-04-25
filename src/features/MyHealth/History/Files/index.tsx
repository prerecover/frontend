import { IAppointment } from '@/shared/types/appointment.interface';
import { IFile } from '../../types/files.types';
import CardFile from './CardFile';
import { useEffect, useState } from 'react';

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



export default function Files({ appointments }: IFilesProps) {
  const [files, setFiles] = useState<IFile[]>([]);

  const fetchFileInfo = async (file: string) => {
    try {
      const response = await fetch(file, { method: 'HEAD' });
      const size = response.headers.get('content-length');
      const type = response.headers.get('content-type'); 
      
      return {
        size: size ? `${Math.round(Number(size) / 1024)} КБ` : 'Неизвестно',
        extension: type?.split('/')[1] || 'unknown',
      };
    } catch (error) {
      console.error('Ошибка при запросе:', error);
      return { size: 'Неизвестно', extension: 'unknown' };
    }
  };

  const getFileInfo = async (file: string) => {
    const fileName = file.split('/').pop() || 'file';
    const fileInfo = await fetchFileInfo(file); 
    
    return {
      fileName,
      size: fileInfo.size,
      extension: fileInfo.extension,
    };
  };

  const formatFiles = async (appointments: IAppointment[]) => {
    const formattedFiles = await Promise.all(
      appointments.map(async (appointment) => {
        const { fileName, size } = await getFileInfo(appointment.file);
        
        return {
          id: appointment._id,
          url: appointment.file,
          fileName,
          weight: size,
        };
      })
    );
    
    return formattedFiles;
  };

  useEffect(() => {
    const loadFiles = async () => {
      const formattedFiles = await formatFiles(appointments);
      setFiles(formattedFiles);
    };
    
    loadFiles();
  }, [appointments]);

  return (
    <div className="grid grid-cols-3 gap-4 min-h-0 h-ful">
      {files.map((file) => (
        <CardFile 
          key={file.id} 
          file={file} 
        />
      ))}
    </div>
  );
}