import clsx from 'clsx';
import { useCallback, useEffect } from 'react';
import styles from './ScrollUp.module.scss';

const ScrollUp = () => {
  const watchScroll = useCallback(() => {
    const scrollUp = document.querySelector('.' + styles['scroll-up']);
    if (scrollUp) {
      scrollUp.classList.toggle(styles['show-scroll'], window.scrollY >= 560);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', watchScroll);
    return () => window.removeEventListener('scroll', watchScroll);
  }, [watchScroll]);

  return (
    <a href="#" className={styles['scroll-up']}>
      <i className={clsx('dg-arrow-up', styles['scroll-up__icon'])} />
    </a>
  );
};

export default ScrollUp;
