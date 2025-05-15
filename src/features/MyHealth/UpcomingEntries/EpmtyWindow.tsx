import { Button } from '@/components/ui/button';

export default function EmptyWindow() {
  return (
    <div
      className="flex flex-col justify-center items-center gap-6 border border-blue h-full px-10 rounded-xl 
        max-xs:px-2 max-xs:h-16 max-sm:flex-row max-sm:justify-between w-80 max-sm:!w-full max-md:w-73 flex-shrink-0 max-sm:shrink
    "
    >
      <h3 className="font-medium text-2xl max-sm:text-base max-sm:font-medium max-sm:w-40 text-center">
        Ближайших записей нет
      </h3>
      <Button className="w-full max-sm:w-40">Записаться</Button>
    </div>
  );
}
// [#0064FA]
