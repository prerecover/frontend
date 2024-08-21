import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Text } from '@/components/ui/text';
import { Textarea } from '@/components/ui/textarea';
import { IDoctor } from '@/shared/types/doctor.interface';
import { IService } from '@/shared/types/service.interface';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { useEffect, useState } from 'react';
import DoctorCard from './doctor-card';
import Image from 'next/image';
import { useToast } from '@/components/ui/use-toast';

export default function ServiceCard({
    pos,
    fetch: fetchServices,
    serviceArray,
    setFetch,
}: {
    serviceArray: Partial<IService>[];
    pos: number;
    fetch: boolean;
    setFetch: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [price, setPrice] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isOnline, setIsOnline] = useState(false);
    const [isOffline, setIsfOffline] = useState(false);
    const doctorsArray: IDoctor[] = [];
    const [duration, setDuration] = useState('');
    const [count, setCount] = useState([new Date()]);
    const [show, setShow] = useState(true);
    const { toast } = useToast();

    const validate = () => {
        const data = [title, description];
        data.map((field) => {
            if (field.length < 0) {
                toast({ variant: 'destructive', title: 'Указаны не все поля' });
                return false;
            }
        });
        if (typeof parseInt(price) !== 'number') {
            toast({ variant: 'destructive', title: 'Неправильно указана цена услуги' });
        }
        if (typeof parseInt(duration) !== 'number') {
            toast({ variant: 'destructive', title: 'Неправильно указана длительность услуги' });
        }
        if (isOnline == false && isOffline == false) {
            toast({ variant: 'destructive', title: 'Выберите тип записи, (онлайн/офлайн)' });
        }

        return true;
    };

    const addEl = () => {
        setFetch(false);
        setCount([...count, new Date()]);
    };
    useEffect(() => {
        if (fetchServices) {
            if (validate()) {
                serviceArray.push({
                    title,
                    price: parseInt(price),
                    description,
                    online: isOnline,
                    duration: parseInt(duration),
                    offline: isOffline,
                    doctors: doctorsArray,
                });
            }
        }
        console.log(serviceArray, 'service array');
        console.log(doctorsArray, 'doctors array');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchServices]);
    return (
        <div className='flex flex-col w-full'>
            <div className='flex-between w-full'>
                <Text className='text-[18px] font-medium '>Услуга {pos}</Text>
                {/* <Button onClick={() => { */}
                {/*     const newArr = posArr.filter((el) => el !== posArr[pos - 1]) */}
                {/*     setPosArr(newArr) */}
                {/**/}
                {/* }}>delete</Button> */}
                <Image
                    src={'/assets/black-arrow-down.svg'}
                    width={28}
                    height={28}
                    alt='close'
                    className='w-[28px] h-[28px] cursor-pointer'
                    onClick={() => setShow(!show)}
                />
            </div>
            {show && (
                <div>
                    <div className='flex mt-[35px] gap-[80px]'>
                        <div className='flex flex-col gap-[18px] w-full'>
                            <Input
                                placeholder='Название'
                                required={true}
                                value={title}
                                onChange={(e) => setTitle(e.currentTarget.value)}
                            />
                            <div className='flex gap-4'>
                                <Checkbox
                                    className='w-[24px] h-[24px] rounded-[5px]'
                                    checked={isOnline}
                                    onCheckedChange={() => setIsOnline(!isOnline)}
                                />
                                <Text>Онлайн</Text>
                                <Checkbox
                                    className='w-[24px] h-[24px] rounded-[5px]'
                                    checked={isOffline}
                                    onCheckedChange={() => setIsfOffline(!isOffline)}
                                />
                                <Text>Оффлайн</Text>
                            </div>
                            <Text className='text-[18px] font-medium '>Длительность</Text>
                            <InputOTP
                                maxLength={4}
                                pattern={REGEXP_ONLY_DIGITS}
                                value={duration}
                                onChange={(val) => setDuration(val)}>
                                <InputOTPGroup className='gap-[14px]'>
                                    <InputOTPSlot
                                        index={0}
                                        className='border-blue font-semibold text-[16px] rounded-[12px] h-[47px] w-[43px]'
                                    />
                                    <InputOTPSlot
                                        index={1}
                                        className='border-blue font-semibold text-[16px] rounded-[12px] h-[47px] w-[43px]'
                                    />
                                    <Text className='font-semibold text-[16px]'>:</Text>
                                    <InputOTPSlot
                                        index={2}
                                        className='border-blue font-semibold text-[16px] rounded-[12px] h-[47px] w-[43px]'
                                    />
                                    <InputOTPSlot
                                        index={3}
                                        className='border-blue font-semibold text-[16px] rounded-[12px] h-[47px] w-[43px]'
                                    />
                                </InputOTPGroup>
                            </InputOTP>
                        </div>
                        <div className='flex w-full'>
                            <div className='flex flex-col gap-[18px] w-full'>
                                <Input
                                    placeholder='Цена'
                                    required={true}
                                    value={price}
                                    onChange={(e) => setPrice(e.currentTarget.value)}
                                />
                                <Textarea
                                    value={description}
                                    placeholder='Описание'
                                    onChange={(e) => setDescription(e.currentTarget.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <Text className='text-[18px] font-medium mt-[50px]'>
                        Стоит ли нам ждать отправку анализов после записи?
                    </Text>
                    <div className='flex gap-4 my-[20px]'>
                        <Checkbox className='w-[24px] h-[24px] rounded-[5px]' />
                        <Text>Да</Text>
                        <Checkbox className='w-[24px] h-[24px] rounded-[5px]' />
                        <Text>Нет</Text>
                    </div>
                    {count.map((_, pos) => (
                        <DoctorCard
                            key={pos}
                            pos={pos + 1}
                            fetch={fetchServices}
                            doctorsArray={doctorsArray}
                            addEl={addEl}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
