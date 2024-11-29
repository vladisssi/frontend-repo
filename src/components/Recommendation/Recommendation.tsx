import s from './Recommendation.module.css';

export const Recommendation: React.FC = () => {
  return (
    <section className={s.recommendation}>
      <div className="container">
        <h2 className={s.recommendation__title}>
          {' '}
          Stay ahead with instant updates and never miss out on your dream home!
        </h2>
        <div className={s.recommendation__description}>
          Sign up now to save and easily access your top property picks.
        </div>

        <button className={s.recommendation__button}>Sign Up</button>
      </div>
    </section>
  );
};
