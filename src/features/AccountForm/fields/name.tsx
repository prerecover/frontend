import { Input } from '@/components/ui/input';

export default function AccountFormNameField({
    field,
    setField,
    placeholder,
}: {
    field: string;
    setField: React.Dispatch<React.SetStateAction<string>>;
    placeholder: string;
}) {
    return (
        <Input
            value={field}
            placeholder={placeholder}
            onChange={(e) => setField(e.currentTarget.value)}
            className='border-blue'
        />
    );
}
