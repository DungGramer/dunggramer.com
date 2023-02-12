import ScrollMouse from '-!react-svg-loader!@assets/scroll.svg';
import { UilArrowDown } from '@iconscout/react-unicons'

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <ScrollMouse />
        <span className="home__scroll-name">
          Scroll Down
        </span>
        <UilArrowDown className='home__scroll-arrow' />
      </a>
    </div>
  );
};

export default ScrollDown;
