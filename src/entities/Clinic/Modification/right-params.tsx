import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Text } from '@/components/ui/text';
import { useClinicRegStore } from '@/shared/store/clinicRegistration';
import { useEffect } from 'react';

export default function RightParams({
    ageClinic: ageClinicEdit,
    square: squareEdit,
    numbers: numbersEdit,
    language: languageEdit,
}: {
    ageClinic: number;
    square: number;
    numbers: string[];
    language: string;
}) {
    const { ageClinic, setAgeClinic, square, setSquare, numbers, setNumbers, language, setLanguage } =
        useClinicRegStore();
    const changeInputState = (index: number, value: string) => {
        const newState = [...numbers];
        newState[index] = value;
        setNumbers(newState);
    };
    useEffect(() => {
        setAgeClinic(ageClinicEdit);
        setSquare(squareEdit);
        setNumbers(numbersEdit);
        setLanguage(languageEdit);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className='flex flex-col w-full'>
            <div className='flex flex-col gap-4'>
                {/* <Select onValueChange={(e) => setCountry(e)} defaultValue={country}> */}
                {/*     <SelectTrigger className='w-full py-7 pr-5 pl-6 border-[1px] border-blue-100 bg-[#fff] rounded-[12px]'> */}
                {/*         {country === '' && <Text className='text-grey'>Страна*</Text>} */}
                {/**/}
                {/*         <SelectValue className='text-[20px]' /> */}
                {/*     </SelectTrigger> */}
                {/*     <SelectContent className='bg-white rounded-[12px] flex flex-col gap-10 '> */}
                {/*         {countries.map((country: ICountry) => ( */}
                {/*             <SelectItem key={country._id} value={country.title} className='cursor-pointer'> */}
                {/*                 {country.title} */}
                {/*             </SelectItem> */}
                {/*         ))} */}
                {/*     </SelectContent> */}
                {/* </Select> */}
                <Input
                    placeholder='Возраст организации'
                    required={true}
                    value={ageClinic || ''}
                    type='number'
                    onChange={(e) => setAgeClinic(parseInt(e.currentTarget.value))}
                />
                <Input
                    placeholder='Площадь м²'
                    required={true}
                    value={square || ''}
                    type='number'
                    onChange={(e) => setSquare(parseInt(e.currentTarget.value))}
                />
                <Input
                    placeholder='Телефон клиники 1'
                    required={true}
                    value={numbers.at(0)}
                    onChange={(e) => changeInputState(0, e.currentTarget.value)}
                />
                <Input
                    placeholder='Телефон клиники 2'
                    required={true}
                    value={numbers.at(1)}
                    onChange={(e) => changeInputState(1, e.currentTarget.value)}
                />
                <Input
                    placeholder='Телефон клиники 4'
                    required={true}
                    value={numbers.at(3)}
                    onChange={(e) => changeInputState(3, e.currentTarget.value)}
                />
                <Select onValueChange={(e) => setLanguage(e)} defaultValue={''} value={language}>
                    <SelectTrigger className='w-full py-7 pr-5 pl-6 border-[1px] border-blue-100 bg-[#fff] rounded-[12px]'>
                        {language === '' && <Text className='text-grey text-[14px]'>Язык клиники</Text>}

                        <SelectValue className='text-[20px]' />
                    </SelectTrigger>
                    <SelectContent className='bg-white rounded-[12px] flex flex-col gap-10 '>
                        <SelectItem value='Русский' className='cursor-pointer'>
                            Русский
                        </SelectItem>
                        <SelectItem value='Английский' className='cursor-pointer'>
                            Английский
                        </SelectItem>
                        <SelectItem value='Узбекский' className='cursor-pointer'>
                            Узбекский
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
