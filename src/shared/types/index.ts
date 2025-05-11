export * from './user.interface';
export type PropsWithClassName<P = unknown> = P & {
  className?: string;
};

export type PropsWithSize<P = unknown> = P & {
  width?: number;
  height?: number;
};

export type ModalProps<T = unknown> = T & {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};
