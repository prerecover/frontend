import { Input } from './input';
import { Text } from './text';

export function PriceDiaposonInput({
  setPrice,
}: {
  setPrice?: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex items-center">
      <div className="rounded-[12px] border border-solid border-blue-200 flex items-center h-full">
        <Input
          className="border-none"
          placeholder="00"
          onChange={(e) => setPrice(parseInt(e.currentTarget.value))}
        />
        <Text className="text-[14px] p-5">UZS</Text>
      </div>
    </div>
  );
}
