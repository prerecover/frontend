import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Text } from '@/components/ui/text';
import { useClinicRegStore } from '@/shared/store/clinicRegistration';
import { ICountry } from '@/shared/types/country.interface';

export default function RightParams({ countries }: { countries: ICountry[] }) {
    const { country, setCountry, city, setCity, address, setAddress } = useClinicRegStore();
    return (
        <div className='flex flex-col w-full'>
            <div className='flex flex-col gap-4'>
                <Text className='text-[18px] font-medium'>Местоположение</Text>

                <Select onValueChange={(e) => setCountry(e)} defaultValue={country}>
                    <SelectTrigger className='w-full py-7 pr-5 pl-6 border-[1px] border-blue-100 bg-[#fff] rounded-[12px]'>
                        {country === '' && <Text className='text-grey'>Страна*</Text>}

                        <SelectValue className='text-[20px]' />
                    </SelectTrigger>
                    <SelectContent className='bg-white rounded-[12px] flex flex-col gap-10 '>
                        {countries.map((country: ICountry) => (
                            <SelectItem key={country._id} value={country.title} className='cursor-pointer'>
                                {country.title}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Input
                    placeholder='Город*'
                    required={true}
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                />
                <Input
                    placeholder='Адрес'
                    required={true}
                    value={address}
                    onChange={(e) => setAddress(e.currentTarget.value)}
                />
            </div>
        </div>
    );
}
