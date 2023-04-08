import Social from './Social';
import Content from './Content';
import ScrollDown from './ScrollDown';

import styles from './Hero.module.scss';
import clsx from 'clsx';

const Hero = () => {
  return (
    <section className="home section" id="home">
      <div className={clsx(styles['home__container'], 'container grid')}>
        <div className={clsx('grid', styles['home__content'])}>
          <Social />

          <div className={styles['home__img']}></div>
          <Content />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Hero;
