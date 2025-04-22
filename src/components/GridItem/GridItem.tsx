import { ReactNode } from 'react';

type GridItemProps = {
  children: ReactNode;
};
const GridItem = ({ children }: GridItemProps) => {
  return <li>{children}</li>;
};

export default GridItem;
