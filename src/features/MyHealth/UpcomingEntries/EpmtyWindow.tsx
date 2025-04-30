import { Button } from '@/components/ui/button';

export default function EmptyWindow() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 border border-blue aspect-square h-full px-10 rounded-xl">
      <h3 className="font-bold text-2xl">Ближайших записей нет</h3>
      <Button className="w-full">Записаться</Button>
    </div>
  );
}
// [#0064FA]
