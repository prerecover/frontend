import { Input } from '@/components/ui/input';
import { useClinicRegStore } from '@/shared/store/clinicRegistration';

export default function LeftParams() {
    const {
        title,
        setTitle,
        adminNumber,
        setAdminNumber,
        typeTitle,
        setTypeTitle,
        registryNumber,
        setRegistryNumber,
        setNumbers,
        numbers,
    } = useClinicRegStore();
    const changeInputState = (index: number, value: string) => {
        const newState = [...numbers];
        newState[index] = value;
        setNumbers(newState);
    };
    return (
        <div className='flex flex-col w-full'>
            <div className='flex flex-col gap-4'>
                <Input
                    placeholder='Название*'
                    required={true}
                    value={title}
                    onChange={(e) => setTitle(e.currentTarget.value)}
                />
                <Input
                    placeholder='Тип учреждения (клиника, стоматология и тд.)'
                    value={typeTitle}
                    onChange={(e) => setTypeTitle(e.currentTarget.value)}
                />
                <Input
                    placeholder='Телефон администратора*'
                    required={true}
                    value={adminNumber}
                    onChange={(e) => setAdminNumber(e.currentTarget.value)}
                />
                <Input
                    placeholder='Как быстро связываться с регистратурой клиники'
                    required={true}
                    value={registryNumber}
                    onChange={(e) => setRegistryNumber(e.currentTarget.value)}
                />
            </div>
        </div>
    );
}
