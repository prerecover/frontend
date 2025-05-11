import { Input } from '@/components/ui/input';
import { UseFormSetValue } from 'react-hook-form';

export default function AccountFormNameField({
  field,
  setField,
  placeholder,
}: {
  field: string;
  setField: UseFormSetValue<{
    firstName?: string;
    lastName?: string;
    number?: string;
    email?: string;
    login?: string;
    address?: string;
    city?: string;
    birthday?: Date;
    sex?: boolean;
    countryTitle?: string;
  }>;
  placeholder: string;
}) {
  return (
    <Input
      value={field}
      placeholder={placeholder}
      onChange={(e) =>
        setField(
          placeholder === 'Имя' ? 'firstName' : 'lastName',
          e.currentTarget.value
        )
      }
      className="border-blue h-12"
    />
  );
}
