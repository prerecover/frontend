import Image from 'next/image';
import { useState } from 'react';
import { Text } from './text';
import { Input } from './input';

export default function ArrayInput({
  setArray,
}: {
  setArray?: React.Dispatch<React.SetStateAction<any[]>>;
}) {
  const [newArray, setNewArray] = useState<string[]>([]);
  const changeArrayState = (index: number, value: string) => {
    const newState = [...newArray];
    newState[index] = value;
    setArray(newState);
    setNewArray(newState);
  };
  return (
    <div className="flex-between h-[56px] border-blue-100 border-[1px] rounded-[12px] py-4 pr-5 pl-6">
      {newArray.length == 0 ? (
        <Text className="text-grey text-[14px]">Телефоны клиники</Text>
      ) : (
        <div className="flex gap-4">
          {newArray.map((_, i) => (
            <Input
              key={i}
              className="h-[39px] bg-blue-100 min-w-[128px] max-w-[160px]"
              onChange={(e) => changeArrayState(i, e.currentTarget.value)}
            />
          ))}
        </div>
      )}
      <Image
        src={'/assets/blue-plus.svg'}
        width={24}
        height={24}
        alt="add number"
        className="cursor-pointer"
        onClick={() => setNewArray([...newArray, ''])}
      />
    </div>
  );
}
