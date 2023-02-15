import { useCallback, useEffect } from 'react';
import './ScrollUp.scss';

const ScrollUp = () => {
  const watchScroll = useCallback(() => {
    const scrollUp = document.querySelector('.scroll-up');
    if (scrollUp) {
      scrollUp.classList.toggle('show-scroll', window.scrollY >= 560);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', watchScroll);
    return () => window.removeEventListener('scroll', watchScroll);
  }, [watchScroll]);

  return (
    <a href="#" className="scroll-up">
      <i className="uil uil-arrow-up scroll-up__icon"></i>
    </a>
  );
};

export default ScrollUp;
