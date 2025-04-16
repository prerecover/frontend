export interface IPeriod {
  id: string;
  value: string;
  title: string;
}

export interface IRecordCompleted {
  id: string;
  name: string;
  effectiveness: number;
  successInTreatment: number;
}

export interface IStatisticRecord {
  id: string;
  name: string;
  value: number;
}
