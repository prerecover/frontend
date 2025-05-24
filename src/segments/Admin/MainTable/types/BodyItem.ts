export enum EnBodyType {
  inline = 'inline',
  inlineArea = 'inlineArea',
  has = 'has',
  dropdownActions = 'dropdown-actions',
  consultationType = 'consultation-type',
  multiselect = 'multiselect',
  multiselectSearch = 'multiselect-search',
  multiselectSearchAdd = 'multiselect-search-add',
  viewAction = 'view-action',
  editAction = 'edit-action',
  addAction = 'add-action',
  link = 'link',
}

export type TViewBodyItem = (
  | {
      type: EnBodyType.inline | EnBodyType.inlineArea;
      data: number | string;
    }
  | {
      type: EnBodyType.has;
      data: boolean;
    }
  | {
      type: EnBodyType.link;
      data: { href: string; content: string | number };
    }
  | {
      type: EnBodyType.viewAction;
      data: null;
    }
) & {
  description?: string;
};
