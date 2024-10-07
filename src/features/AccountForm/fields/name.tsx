import { Input } from '@/components/ui/input';

export default function AccountFormNameField({
    field,
    setField,
    placeholder,
}: {
    field: string | null;
    setField: React.Dispatch<React.SetStateAction<string | null>>;
    placeholder: string;
}) {
    return (
        <Input
            value={field!}
            placeholder={placeholder}
            onChange={(e) => setField(e.currentTarget.value)}
            className='border-blue'
        />
    );
}
