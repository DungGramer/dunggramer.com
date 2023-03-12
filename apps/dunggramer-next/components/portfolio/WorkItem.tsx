import clsx from 'clsx';
import Image from 'next/image';
import styles from './WorkItem.module.scss';

const WorkItem = ({ item }) => {
  return (
    <div className={styles['work__card']}>
      <Image
        src={item.image}
        alt={item?.alt}
        className={styles['work__img']}
        width={295}
        height={193}
      />
      <h3 className={styles['work__title']}>{item.title}</h3>
      <a href="#" className={styles['work__button']}>
        Explore{' '}
        <i
          className={clsx('dg-right-arrow-alt', styles['work__button-icon'])}
        />
      </a>
    </div>
  );
};

export default WorkItem;
