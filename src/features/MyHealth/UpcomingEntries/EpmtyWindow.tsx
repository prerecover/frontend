import { Button } from '@/components/ui/button';

export default function EmptyWindow() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 border border-blue aspect-square h-full px-10 rounded-xl max-xs:px-2 max-xs:h-16 max-xs:flex-row">
      <h3 className="font-bold text-2xl max-xs:text-base max-xs:font-medium max-xs:w-40">
        Ближайших записей нет
      </h3>
      <Button className="w-full max-xs:w-40">Записаться</Button>
    </div>
  );
}
// [#0064FA]
