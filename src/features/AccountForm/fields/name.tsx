import { Input } from '@/components/ui/input';

export default function AccountFormNameField({
    field,
    setField,
}: {
    field: string;
    setField: React.Dispatch<React.SetStateAction<string>>;
}) {
    return <Input value={field} onChange={(e) => setField(e.currentTarget.value)} className='border-blue' />;
}
