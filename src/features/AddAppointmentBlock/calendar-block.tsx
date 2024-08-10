import { Calendar } from '@/components/ui/calendar';
import { Switch } from '@/components/ui/switch/switch';
import { Text } from '@/components/ui/text';
import { TimeCiel } from '@/components/ui/time-ceil';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
export default function CalendarBlock({
    setDate,
    time,
    setTime,
    handleAppointment,
}: {
    time: string;
    setTime: React.Dispatch<React.SetStateAction<string>>;
    setDate: React.Dispatch<React.SetStateAction<Date>>;
    handleAppointment: () => void;
}) {
    return (
        <div className='flex flex-col gap-3 justify-around h-full'>
            <Text type='h2' className='text-[14px] font-semibold'>
                Укажите дату и время
            </Text>
            <Calendar setDate={setDate} />
            <div className='grid grid-cols-4 gap-3'>
                <TimeCiel value='10:30' setTime={setTime} time={time} />
                <TimeCiel value='11:00' setTime={setTime} time={time} />
                <TimeCiel value='12:00' setTime={setTime} time={time} />
                <TimeCiel value='13:00' setTime={setTime} time={time} />
            </div>
            <div className='bg-white w-full h-[62px] flex-between rounded-[12px] p-4'>
                <Text type='h3' className='text-[14px] font-semibold '>
                    Напоминание
                </Text>
                <Switch />
            </div>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button>Далее</Button>
                </AlertDialogTrigger>
                <AlertDialogContent className='bg-white border-blue-100 rounded-[12px]'>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Создать запись?</AlertDialogTitle>
                        <AlertDialogDescription>Убедитесь что все поля правильно заполнены</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Назад</AlertDialogCancel>
                        <AlertDialogAction onClick={handleAppointment}>Продолжить</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
