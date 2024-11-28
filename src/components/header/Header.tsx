import { Link, NavLink } from 'react-router-dom';
import s from './Header.module.css';

export const Header: React.FC = () => {
  const getActiveClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${s.active} ${s.header__navItem}` : s.header__navItem;

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header__row}>
          <div className={s.header__logo}>
            <Link to="/">SmartEstate</Link>
          </div>

          <nav className={s.header__nav}>
            <NavLink to="/about-us" className={getActiveClass}>
              About us
            </NavLink>
            <NavLink to="/neighborhoods" className={getActiveClass}>
              Neighborhoods
            </NavLink>
            <NavLink to="/contact-us" className={getActiveClass}>
              Contact us
            </NavLink>
          </nav>

          <div className={s.header__authorization}>
            <NavLink
              to={'/log-in'}
              className={`${s.header__authentication} ${s.authorization__element} `}
            >
              Log In
            </NavLink>
            <NavLink
              to={'/sign-up'}
              className={`${s.header__registration} ${s.authorization__element}`}
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};
