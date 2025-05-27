import { EnMode } from '..';

export type TConsultationType = 'online' | 'offline';

export enum EnBodyType {
  inline = 'inline',
  inlineArea = 'inlineArea',
  has = 'has',
  dropdownActions = 'dropdown-actions',
  consultationType = 'consultation-type',
  multiselect = 'multiselect',
  multiselectSearch = 'multiselect-search',
  multiselectSearchAdd = 'multiselect-search-add',
  action = 'action',
  editAction = 'edit-action',
  addAction = 'add-action',
  link = 'link',
}

export type TViewBodyItem<M extends EnMode> = (
  | {
      type: EnBodyType.inline | EnBodyType.inlineArea;
      data: M extends EnMode.view | EnMode.edit
        ? string | number
        : M extends EnMode.add
          ? null
          : never;
    }
  | {
      type: EnBodyType.has;
      data: M extends EnMode.view | EnMode.edit ? boolean : null;
    }
  | {
      type: EnBodyType.link;
      data: M extends EnMode.add
        ? { href: string; content: null; placeholder?: string }
        : { href: string; content: string | number; placeholder?: string };
    }
  | {
      type: EnBodyType.action;
      data: null;
    }
  | {
      type: EnBodyType.consultationType;
      data: M extends EnMode.view | EnMode.edit ? TConsultationType : null;
    }
  | {
      type:
        | EnBodyType.multiselect
        | EnBodyType.multiselectSearch
        | EnBodyType.multiselectSearchAdd;
      data: M extends EnMode.view
        ? unknown
        : M extends EnMode.edit
          ? {
              content: unknown;
              value: unknown;
              isChecked?: boolean;
            }[]
          : null;
    }
) & {
  description?: string;
};
