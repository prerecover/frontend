import { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const AdminScreen: FC<Props> = (props) => {
  return <main className="" {...props}></main>;
};

export { AdminScreen };
