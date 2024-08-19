import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';

export default function LeftParams({
    name,
    setName,
    adminNumber,
    setAdminNumber,
    site,
    setSite,
}: {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    adminNumber: string;
    setAdminNumber: React.Dispatch<React.SetStateAction<string>>;
    site: string;
    setSite: React.Dispatch<React.SetStateAction<string>>;
}) {
    return (
        <div className='flex flex-col w-full'>
            <div className="flex flex-col gap-4">
                <Text className='text-[18px] font-medium'>Общие</Text>
                <Input
                    placeholder='Название*'
                    required={true}
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                />
                <Input
                    placeholder='Номер администратора*'
                    required={true}
                    value={adminNumber}
                    onChange={(e) => setAdminNumber(e.currentTarget.value)}
                />
                <Input
                    placeholder='Введите адрес сайта'
                    value={site}
                    onChange={(e) => setSite(e.currentTarget.value)}
                />
            </div>
        </div>
    );
}
