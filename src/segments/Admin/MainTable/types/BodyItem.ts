import { ReactNode } from 'react';

export enum EnBodyType {
  inline = 'inline',
  has = 'has',
  dropdown = 'dropdown',
  checkDropdown = 'check-dropdown',
  searchCheckDropdown = 'search-check-dropdown',
}

export type TBodyItem = {
  data: ReactNode;
  type: EnBodyType;
};
