import clsx from 'clsx';
import { ReactComponent as ScrollMouse } from 'public/scroll.svg';
import styles from './ScrollDown.module.scss';

const ScrollDown = () => {
  return (
    <div className={styles['home__scroll']}>
      <a href="#about" className={clsx('button--flex', styles['home__scroll-button'])}>
        <ScrollMouse />
        <span className={styles['home__scroll-name']}>Scroll Down</span>
        <i className={clsx(styles['home__scroll-arrow'], 'dg-arrow-down')} />
      </a>
    </div>
  );
};

export default ScrollDown;
