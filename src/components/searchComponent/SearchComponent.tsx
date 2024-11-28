import { NavLink } from 'react-router-dom';
import s from './SearchComponent.module.css';
import searchIcon from '../../../public/img/icons/searchIcon.svg';
import { useState } from 'react';

export const SearchComponent: React.FC = () => {
  const [query, setQuery] = useState('');

  return (
    <section className={s.section}>
      <h1 className={s.section__title}>Explore the Best of Amsterdam Living</h1>

      <div className={s.section__toggleBtn}>
        <NavLink to="/" className={s.buy}>
          Buy
        </NavLink>
        <NavLink to="/" className={s.rent}>
          Rent
        </NavLink>
      </div>

      <div className={s.search__container}>
        <form className={s.searchForm} action="/">
          <label className="searchForm__left">
            <img src={searchIcon} alt="Search Icon" className={s.searchIcon} />
            <input
              type="text"
              placeholder="Area, Neighborhood..."
              className={s.searchForm__input}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>

          <button className={s.searchButton}>Search</button>
        </form>
      </div>
    </section>
  );
};
