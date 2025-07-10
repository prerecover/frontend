export interface IPeriod {
  id: string;
  value: string;
  title: string;
}

export interface IRecordCompleted {
  id: string;
  title: string;
  effectivity: number;
  successInTreatment: number;
}

export interface IStatisticRecord {
  id: string;
  name: string;
  value: number;
}
