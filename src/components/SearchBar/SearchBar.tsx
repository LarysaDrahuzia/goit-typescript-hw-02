import { FormEvent, ChangeEvent, useState } from 'react';
import { FC } from 'react';
import toast from 'react-hot-toast';
import css from './SearchBar.module.css';

type SearchBarProps = {
  onSubmit: (query: string) => void;
};

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>('');

  const handleInput = (evt: ChangeEvent<HTMLInputElement>): void => {
    setQuery(evt.target.value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    if (!query.trim()) {
      toast('Please enter search term!');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          onChange={handleInput}
          type="text"
          name="search"
          autoComplete="off"
          value={query}
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
