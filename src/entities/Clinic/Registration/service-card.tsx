import { Input } from '@/components/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Text } from '@/components/ui/text';
import { Textarea } from '@/components/ui/textarea';
import { IDoctor } from '@/shared/types/doctor.interface';
import { IService } from '@/shared/types/service.interface';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { useEffect, useState } from 'react';
import DoctorCard from './doctor-card';
import { useToast } from '@/components/ui/use-toast';
import AddDoctorsBlock from './add-doctors';
import { FilterBox } from '@/components/ui/filter-box';

export default function ServiceCard({
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
    const [online, setOnline] = useState('Онлайн');
    const [doctors, setDoctors] = useState<Partial<IDoctor>[]>([]);
    const [duration, setDuration] = useState('');
    const [count, setCount] = useState([new Date()]);
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
                    online: online == 'Онлайн',
                    duration: parseInt(duration),
                    offline: online !== 'Онлайн',
                    doctors: doctors,
                });
            }
        }
        console.log(serviceArray, 'service array');
        console.log(doctors, 'doctors array');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchServices]);
    console.log(doctors);
    return (
        <div className='flex flex-col w-full'>
            {/* <div className='flex-between w-full'> */}
            {/* <Button onClick={() => { */}
            {/*     const newArr = posArr.filter((el) => el !== posArr[pos - 1]) */}
            {/*     setPosArr(newArr) */}
            {/**/}
            {/* }}>delete</Button> */}
            {/* <Image */}
            {/*     src={'/assets/black-arrow-down.svg'} */}
            {/*     width={28} */}
            {/*     height={28} */}
            {/*     alt='close' */}
            {/*     className='w-[28px] h-[28px] cursor-pointer' */}
            {/*     onClick={() => setShow(!show)} */}
            {/* /> */}
            {/* </div> */}
            <div>
                <div className='flex gap-[60px]'>
                    <div className='flex flex-col gap-[18px] w-full'>
                        <Text className='text-[18px] font-medium '>Основные данные</Text>
                        <Input
                            placeholder='Название'
                            required={true}
                            value={title}
                            onChange={(e) => setTitle(e.currentTarget.value)}
                        />
                        <Textarea
                            value={description}
                            placeholder='Описание'
                            onChange={(e) => setDescription(e.currentTarget.value)}
                        />
                        <Input
                            placeholder='Цена'
                            required={true}
                            value={price}
                            onChange={(e) => setPrice(e.currentTarget.value)}
                        />
                        <div className='flex gap-4'>
                            <FilterBox data={['Онлайн', 'Оффлайн']} isSelect={online} setIsSelect={setOnline} />
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
                    <div className='w-[1px] bg-blue-100'></div>
                    <AddDoctorsBlock doctors={doctors} setDoctors={setDoctors} />
                </div>
            </div>
        </div>
    );
}
