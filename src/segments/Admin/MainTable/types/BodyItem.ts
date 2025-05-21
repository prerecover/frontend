export enum EnBodyType {
  inline = 'inline',
  has = 'has',
  dropdown = 'dropdown',
  checkDropdown = 'check-dropdown',
  searchCheckDropdown = 'search-check-dropdown',
  viewAction = 'view-action',
  editAction = 'edit-action',
  link = 'link',
}

export type TViewBodyItem = (
  | {
      type: EnBodyType.inline;
      data: string;
    }
  | {
      type: EnBodyType.has;
      data: boolean;
    }
  | {
      type: EnBodyType.link;
      data: { href: string; content: string };
    }
  | {
      type: EnBodyType.viewAction;
      data: null;
    }
) & {
  description?: string;
};
