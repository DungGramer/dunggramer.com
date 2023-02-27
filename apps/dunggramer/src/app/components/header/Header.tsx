import {
  UilApps,
  UilBriefcaseAlt,
  UilEstate,
  UilFileAlt,
  UilMessage,
  UilScenery,
  UilTimes,
  UilUser,
} from '@iconscout/react-unicons';
import './Header.scss';
import { useCallback, useState, useEffect } from 'react';
import Logo from '-!react-svg-loader!@assets/bold.svg';
import clsx from 'clsx';

const Header = () => {
  const [toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  const watchScroll = useCallback(() => {
    const header = document.querySelector('.header');
    if (header) {
      header.classList.toggle('scroll-header', window.scrollY >= 80);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', watchScroll);
    return () => window.removeEventListener('scroll', watchScroll);
  }, [watchScroll]);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          <Logo />
        </a>

        <div className={toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                className={clsx('nav__link', {
                  'active-link': activeNav === '#home',
                })}
                onClick={() => setActiveNav('#home')}
              >
                <UilEstate className="nav__icon" /> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                className={clsx('nav__link', {
                  'active-link': activeNav === '#about',
                })}
                onClick={() => setActiveNav('#about')}
              >
                <UilUser className="nav__icon" /> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                className={clsx('nav__link', {
                  'active-link': activeNav === '#skills',
                })}
                onClick={() => setActiveNav('#skills')}
              >
                <UilFileAlt className="nav__icon" /> Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#services"
                className={clsx('nav__link', {
                  'active-link': activeNav === '#services',
                })}
                onClick={() => setActiveNav('#services')}
              >
                <UilBriefcaseAlt className="nav__icon" /> Services
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                className={clsx('nav__link', {
                  'active-link': activeNav === '#portfolio',
                })}
                onClick={() => setActiveNav('#portfolio')}
              >
                <UilScenery className="nav__icon" /> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                className={clsx('nav__link', {
                  'active-link': activeNav === '#contact',
                })}
                onClick={() => setActiveNav('#contact')}
              >
                <UilMessage className="nav__icon" /> Contact
              </a>
            </li>
          </ul>

          <UilTimes
            className="nav__close"
            onClick={() => showMenu((prev) => !prev)}
          />
        </div>

        <div className="nav__toggle" onClick={() => showMenu((prev) => !prev)}>
          <UilApps />
        </div>
      </nav>
    </header>
  );
};

export default Header;
