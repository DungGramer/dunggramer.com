import clsx from 'clsx';
import React from 'react';
import styles from './Frontend.module.scss';

const Frontend = () => {
  return (
    <>
      {FrontendData.map((item, index) => (
        <div className={styles['skills__content']} key={index}>
          <h3 className={styles['skills__title']}>{item.title}</h3>

          <div className={styles['skills__box']}>
            {item.data.map((skill, index) => (
              <div className={styles['skills__data']} key={index}>
                <i className={clsx(skill.icon, styles['skills__icon'])} />
                <div className={styles['skills__titles']}>
                  <h3 className={styles['skills__name']}>{skill.title}</h3>
                  <span className={styles['skills__level']}>{skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

const FrontendData = [
  {
    title: 'Frontend developer',
    data: [
      {
        title: 'HTML',
        level: 'Advanced',
        icon: 'dg-badge-check',
      },
      {
        title: 'CSS',
        level: 'Advanced',
        icon: 'dg-badge-check',
      },
      {
        title: 'Javascript',
        level: 'Intermediate',
        icon: 'dg-badge-check',
      },
      {
        title: 'Bootstrap',
        level: 'Intermediate',
        icon: 'dg-badge-check',
      },
      {
        title: 'Git',
        level: 'Intermediate',
        icon: 'dg-badge-check',
      },
      {
        title: 'React.JS',
        level: 'Intermediate',
        icon: 'dg-badge-check',
      },
    ],
  },
  {
    title: 'Other Skills',
    data: [
      {
        title: 'Redux',
        level: 'Intermediate',
        icon: 'dg-badge-check',
      },
      {
        title: 'Webpack',
        level: 'Intermediate',
        icon: 'dg-badge-check',
      },
      {
        title: 'Jest',
        level: 'Basic',
        icon: 'dg-badge-check',
      },
      {
        title: 'Typescript',
        level: 'Intermediate',
        icon: 'dg-badge-check',
      },
      {
        title: 'Accessibility',
        level: 'Intermediate',
        icon: 'dg-badge-check',
      },
      {
        title: 'Monorepo',
        level: 'Intermediate',
        icon: 'dg-badge-check',
      },
    ],
  },
];

export default Frontend;
