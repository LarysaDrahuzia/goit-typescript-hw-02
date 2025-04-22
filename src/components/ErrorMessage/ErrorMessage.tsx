import css from './ErrorMessage.module.css';
import { FC } from 'react';

const ErrorMessage: FC = () => {
  return (
    <div className={css.container}>
      <p className={css.text}>Something went wrong, please reload you page!</p>
    </div>
  );
};

export default ErrorMessage;
