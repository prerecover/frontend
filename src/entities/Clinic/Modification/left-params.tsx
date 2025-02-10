import { Input } from '@/components/ui/input';
import { useClinicRegStore } from '@/shared/store/clinicRegistration';
import { useEffect } from 'react';

export default function LeftParams({
  title: titleEdit,
  adminNumber: adminNumberEdit,
  typeTitle: typeTitleEdit,
  registryNumber: registryNumberEdit,
  numbers: numbersEdit,
}: {
  title: string;
  adminNumber: string;
  typeTitle: string;
  registryNumber: string;
  numbers: string[];
}) {
  const {
    title,
    setTitle,
    adminNumber,
    setAdminNumber,
    typeTitle,
    setTypeTitle,
    registryNumber,
    setRegistryNumber,
    numbers,
    setNumbers,
  } = useClinicRegStore();
  const changeInputState = (index: number, value: string) => {
    const newState = [...numbers];
    newState[index] = value;
    setNumbers(newState);
  };
  useEffect(() => {
    setTitle(titleEdit);
    setTypeTitle(typeTitleEdit);
    setAdminNumber(adminNumberEdit);
    setNumbers(numbersEdit);
    setRegistryNumber(registryNumberEdit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-4">
        <Input
          placeholder="Название*"
          required={true}
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <Input
          placeholder="Тип учреждения (клиника, стоматология и тд.)"
          value={typeTitle}
          onChange={(e) => setTypeTitle(e.currentTarget.value)}
        />
        <Input
          placeholder="Телефон администратора*"
          required={true}
          value={adminNumber}
          onChange={(e) => setAdminNumber(e.currentTarget.value)}
        />
        <Input
          placeholder="Телефон клиники 3"
          required={true}
          value={numbers.at(2)}
          onChange={(e) => changeInputState(2, e.currentTarget.value)}
        />
        <Input
          placeholder="Телефон клиники 5"
          required={true}
          value={numbers.at(4)}
          onChange={(e) => changeInputState(4, e.currentTarget.value)}
        />
        <Input
          placeholder="Как быстро связываться с регистратурой клиники"
          required={true}
          value={registryNumber}
          onChange={(e) => setRegistryNumber(e.currentTarget.value)}
        />
      </div>
    </div>
  );
}
