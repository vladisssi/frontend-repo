import { Link, NavLink } from 'react-router-dom';
import s from './Header.module.css';

const scrollToSection = (id: string) => {
  const section = document.querySelector(id);
  if (section) {
    section.scrollIntoView();
  }
};

export const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header__row}>
          <div className={s.header__logo}>
            <Link to="/">SmartEstate</Link>
          </div>

          <nav className={s.header__nav}>
            <span
              onClick={() => scrollToSection('#about-us')}
              className={s.header__navLink}
            >
              About us
            </span>
            <span
              onClick={() => scrollToSection('#neighborhoods')}
              className={s.header__navLink}
            >
              Neighborhoods
            </span>
            <span
              onClick={() => scrollToSection('#contact-us')}
              className={s.header__navLink}
            >
              Contact us
            </span>
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
