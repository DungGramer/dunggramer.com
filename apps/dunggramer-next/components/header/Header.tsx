import clsx from 'clsx';
import { useCallback, useEffect, useMemo, useState } from 'react';
import styles from './Header.module.scss';
import NavItem from './NavItem';

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
    <header className={styles['header']}>
      <nav className={styles.nav}>
        <a href="#home" className={styles.logo}>
          <i id={styles.logo} className="dg-logo" />
        </a>

        <div className={clsx(styles.menu, { [styles['show-menu']]: toggle })}>
          <ul className={clsx('grid', styles['list'])}>
            {NavList.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                icon={item.icon}
                title={item.title}
                activeNav={activeNav}
                setActiveNav={setActiveNav}
              />
            ))}
          </ul>

          <i
            className={clsx(styles['nav__close'], 'dg-times')}
            onClick={() => showMenu((prev) => !prev)}
          />
        </div>

        <div
          className={styles['nav__toggle']}
          onClick={() => showMenu((prev) => !prev)}
        >
          <i className="dg-apps" />
        </div>
      </nav>
    </header>
  );
};

const NavList = [
  {
    href: '#home',
    icon: 'estate',
    title: 'Home',
  },
  {
    href: '#about',
    icon: 'user',
    title: 'About',
  },
  {
    href: '#skills',
    icon: 'file-alt',
    title: 'Skills',
  },
  {
    href: '#services',
    icon: 'briefcase-alt',
    title: 'Services',
  },
  {
    href: '#portfolio',
    icon: 'scenery',
    title: 'Portfolio',
  },
  {
    href: '#contact',
    icon: 'message',
    title: 'Contact',
  },
];

export default Header;
