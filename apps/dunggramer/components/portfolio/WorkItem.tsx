import clsx from 'clsx';
import Image from 'next/image';
import styles from './WorkItem.module.scss';

const WorkItem = ({ item }) => {
  return (
    <div className={styles['work__card']}>
      <div className={styles['work__img-container']}>
        <Image
          src={item.image}
          alt={item?.alt || item?.description}
          className={styles['work__img']}
          width={300}
          height={200}
          unoptimized
        />
      </div>

      <h3 className={styles['work__title']}>{item.title}</h3>
      <a href={item?.link} className={styles['work__button']} rel="noreferrer">
        Explore <i className={clsx('dg-arrow-right', styles['work__button-icon'])} />
      </a>
      {item?.tags && <Tags tags={item.tags} />}
      {item?.npm_tags && <NPMTags tags={item.npm_tags} />}
    </div>
  );
};

const Tags = ({ tags }) => {
  return (
    <div className={styles['work__tags']}>
      {tags.map((tag, index) => (
        <span key={index} className={styles['tag']}>
          {tag}
        </span>
      ))}
    </div>
  );
};

const NPMTags = ({ tags }) => {
  return (
    <div className={styles['npm__tags']}>
      {tags.map((tag, index) => (
        <Image
          src={tag}
          alt="tag"
          key={index}
          className={styles.tag}
          height={20}
          width={120}
          unoptimized
        />
      ))}
    </div>
  );
};

export default WorkItem;
