import css from './LoadMoreBtn.module.css';

type LoadMoreBtnProps = {
  onClick: () => void,
  disabled: boolean,
};

const LoadMoreBtn = ({ onClick, disabled }: LoadMoreBtnProps) => {
  return (
    <button
      className={css.btn}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      Load more
    </button>
  );
};

export default LoadMoreBtn;
