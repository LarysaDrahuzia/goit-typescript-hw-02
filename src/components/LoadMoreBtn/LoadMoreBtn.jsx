import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick, disabled }) => {
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
