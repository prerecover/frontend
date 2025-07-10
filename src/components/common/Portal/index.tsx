'use client';

import { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

const root = document.body as HTMLBodyElement;

export const Portal: FC<PropsWithChildren> = ({ children }) => {
  return createPortal(children, root);
};
