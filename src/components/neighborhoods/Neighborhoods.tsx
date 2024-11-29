import { Loader } from '../Loader/Loader';
import s from './Neighborhoods.module.css';

export const Neighborhoods: React.FC = () => {
  return (
    <section className={s.neighborhoods} id="neighborhoods">
      <div className={s.neighborhoods__text}>
        <div className={s.neighborhoods__title}>Neighborhoods</div>
        <div className={s.neighborhoods__description}>
          Explore the vibrant neighborhoods of Amsterdam and find your perfect
          home.
        </div>
      </div>
      <div className="container" style={{ color: 'red', textAlign: 'center' }}>
        In Process...
      </div>

      <Loader />
    </section>
  );
};
