import clsx from 'clsx';
import { useMemo } from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear = useMemo(() => {
    return new Date().getFullYear();
  }, []);

  return (
    <footer className={styles['footer']}>
      <div className={clsx('container', styles['footer__container'])}>
        <h1 className={styles['footer__title']}>DungGramer</h1>

        <nav>
          <ul className={styles['footer__list']}>
            {NavData.map((item, index) => (
              <li key={index}>
                <a href={item.link} className={styles['footer__link']}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles['footer__social']}>
            {SocialData.map((social, index) => (
              <a
                href={social.link}
                className={styles['footer__social-link']}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                <i className={clsx(styles['social__icon'], social.icon)} />
              </a>
            ))}
          </div>
        </nav>

        <span className={styles['footer__copy']}>
          &copy; {currentYear} DungGramer. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

const NavData = [
  {
    title: 'About',
    link: '#about',
  },
  {
    title: 'Projects',
    link: '#portfolio',
  },
  {
    title: 'Skills',
    link: '#skills',
  },
];

const SocialData = [
  {
    icon: 'dg-facebook',
    link: 'https://facebook.com/DungGramer',
  },
  {
    icon: 'dg-instagram',
    link: 'https://instagram.com/dung.gramer',
  },
  {
    icon: 'dg-tiktok',
    link: 'https://tiktok.com/@dunggramer',
  },
];

export default Footer;
