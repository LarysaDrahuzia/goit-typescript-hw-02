import { ClockLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <ClockLoader color="#ff4d00" size={50} />
    </div>
  );
};

export default Loader;
