interface IStatisticValueProps {
  value: number;
}

export default function StatisticValue({ value }: IStatisticValueProps) {
  return <p className="text-[#262626] font-medium text-lg">{value}%</p>;
}
