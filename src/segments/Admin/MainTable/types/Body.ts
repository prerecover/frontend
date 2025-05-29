import { ReactNode } from 'react';

export type TBodyItem<ID extends string | number> =
  | {
      id: ID;
      render: { node: ReactNode; cellClassName?: string }[];
    }
  | never;
