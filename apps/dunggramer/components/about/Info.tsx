import clsx from 'clsx';
import styles from './Info.module.scss';

const Info = () => {
  return (
    <div className={clsx('grid', styles['about__info'])}>
      {InfoData.map((info, index) => (
        <InfoChild key={index} {...info} />
      ))}
    </div>
  );
};

const InfoData = [
  {
    title: 'Experience',
    subtitle: '2+ Years Working',
    icon: 'dg-award',
  },
  {
    title: 'Completed',
    subtitle: '86+ Repositories',
    icon: 'dg-briefcase-alt',
  },
  {
    title: 'Support',
    subtitle: 'Online 24/7',
    icon: 'dg-support',
  },
];

const InfoChild = ({ title, subtitle, icon }) => {
  return (
    <div className={styles['about__box']}>
      <i className={clsx(icon, styles['about__icon'])} />
      <h3 className={styles['about__title']}>{title}</h3>
      <span className={styles['about__subtitle']}>{subtitle}</span>
    </div>
  );
};

export default Info;
