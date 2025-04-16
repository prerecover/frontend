import type { IRecordCompleted } from '../types/statistic.types';

interface ICardProps {
  record: IRecordCompleted;
}

export default function Card({ record }: ICardProps) {
  const { name, successInTreatment, effectiveness } = record;

  return (
    <div className="border border-[#EBF3FF] py-3 px-[14px] rounded-xl text-black font-medium text-sm">
      <h2 className="truncate mb-3">{name}</h2>
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <div className="rounded-full bg-[#0064FA] w-[10px] h-[10px]"></div>
          <p>+ {successInTreatment}%</p>
        </div>
        <div className="flex items-center">
          <div className="rounded-full bg-[#009BFF] w-[10px] h-[10px]"></div>
          <p>+ {effectiveness}%</p>
        </div>
      </div>
    </div>
  );
}
