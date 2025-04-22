import { ClockLoader } from 'react-spinners';
import { FC } from 'react';
import css from './Loader.module.css';

const Loader: FC = () => {
  return (
    <div className={css.loader}>
      <ClockLoader color="#ff4d00" size={50} />
    </div>
  );
};

export default Loader;
