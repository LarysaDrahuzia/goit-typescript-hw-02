import css from './Grid.module.css';
import { ReactNode } from 'react';

type GridProps = {
  children: ReactNode,
};

const Grid = ({ children }: GridProps) => {
  return <ul className={css.list}>{children}</ul>;
};

export default Grid;
