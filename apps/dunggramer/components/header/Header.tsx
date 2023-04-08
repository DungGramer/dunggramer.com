import clsx from 'clsx';
import { useCallback, useEffect, useState, useRef } from 'react';
import styles from './Header.module.scss';
import NavItem from './NavItem';

const Header = () => {
  const [toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');
  const focusVisible = useRef<HTMLUListElement>(null);

  const watchScroll = useCallback(() => {
    const header = document.querySelector('.header');
    if (!header) return;

    header.classList.toggle(styles['scroll-header'], window.scrollY >= 80);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', watchScroll);
    return () => window.removeEventListener('scroll', watchScroll);
  }, [watchScroll]);

  useEffect(() => {
    if (!focusVisible.current) return;

    const focusable = focusVisible.current.querySelectorAll('a');
    focusable.forEach((item) => {
      item.addEventListener('focus', () => {
        item.classList.add(styles['focus-visible']);
        showMenu(true);
      });
      item.addEventListener('blur', () => {
        item.classList.remove(styles['focus-visible']);

        if (document.activeElement === focusVisible.current) {
          showMenu(false);
        }
      });
    });
  }, [focusVisible]);

  return (
    <header className={styles['header']}>
      <nav className={clsx(styles.nav, 'container')}>
        <a href="#home" className={styles.logo}>
          <i id={styles.logo} className="dg-logo" />
        </a>

        <div className={clsx(styles.menu, { [styles['show-menu']]: toggle })}>
          <ul ref={focusVisible} className={clsx('grid', styles['list'])}>
            {NavList.map((item) => (
              <NavItem
                activeNav={activeNav}
                href={item.href}
                icon={item.icon}
                key={item.href}
                setActiveNav={setActiveNav}
                title={item.title}
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
          tabIndex={0}
          aria-label="menu"
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
  {
    href: 'https://blog.dunggramer.com',
    icon: 'blog',
    title: 'Blog',
  }
];

export default Header;
