import clsx from 'clsx';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import styles from './Header.module.scss';

const NavItem = ({ href, icon, title, activeNav, setActiveNav }) => {
  const handleClick = useCallback(() => {
    setActiveNav(href);
  }, [href, setActiveNav]);
  

  return (
    <li className="nav__item">
      <Link
        href={href}
        className={clsx(styles.nav__link, {
          [styles['active-link']]: activeNav === href,
        })}
        onClick={handleClick}
        scroll={false}
      >
        <i className={clsx(styles['nav-item'], styles['nav__icon'], `dg-${icon}`)} />
        <p>{title}</p>
      </Link>
    </li>
  );
};

export default NavItem;
