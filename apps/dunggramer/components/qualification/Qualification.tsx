import { useCallback, useState } from 'react';
import styles from './Qualification.module.scss';
import clsx from 'clsx';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = useCallback((index: number) => {
    setToggleState(index);
  }, []);

  return (
    <section
      className={clsx('section', styles['qualification'])}
      id="qualification"
    >
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className={clsx('container', styles['qualification__container'])}>
        <div className={styles['qualification__tabs']}>
          {QualificationData.map((item, index) => (
            <div
              className={clsx('button--flex', styles['qualification__button'], {
                [styles['qualification__active']]: toggleState === index,
              })}
              onClick={() => toggleTab(index)}
              key={index}
            >
              <div
                className={clsx(
                  'button--flex',
                  styles['qualification__button'],
                  {
                    [styles['qualification__active']]: toggleState === index,
                  }
                )}
              >
                <i className={clsx(item.icon, styles['qualification__icon'])} />
                {item.title}
              </div>
            </div>
          ))}
        </div>

        <div className={styles['qualification__sections']}>
          {QualificationData.map((item, index) => (
            <div
              className={clsx(styles['qualification__content'], {
                [styles['qualification__content-active']]:
                  toggleState === index,
              })}
              key={index}
            >
              {item.content.map((content, index) => (
                <QualificationContent
                  key={index}
                  title={content.title}
                  subtitle={content.subtitle}
                  calendar={content.calendar}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const QualificationData = [
  {
    title: 'Experience',
    icon: 'dg-briefcase-alt',
    content: [
      {
        title: 'Frontend Software Development Specialist',
        subtitle: 'VinBigData',
        calendar: '2022 - present',
      },
      {
        title: 'Middle Front-End Software Engineer',
        subtitle: 'Cốc Cốc',
        calendar: '2021 - 2022',
      },
      {
        title: 'Fresher Front end Developer',
        subtitle: 'TTC Solutions',
        calendar: '2020 - 2021',
      },
    ],
  },
  {
    title: 'Education',
    icon: 'dg-graduation-cap',
    content: [
      {
        title: 'Information Technology',
        subtitle: 'Hanoi University of Business and Technology',
        calendar: '9/2017 - 2/2022',
      },
      {
        title: 'Javascript',
        subtitle: 'FUNIX',
        calendar: '4/2020 - 5/2021',
      },
      {
        title: 'React Native',
        subtitle: 'Developer Circles Vietnam Innovation Challenge',
        calendar: '6/2020 - 9/2020',
      },
    ],
  },
];

const QualificationContent = ({ title, subtitle, calendar, direction }) => {
  return (
    <div
      className={clsx(styles['qualification__data'], {
        [styles['left']]: direction === 'left',
        [styles['right']]: direction === 'right',
      })}
    >
      <div className={styles['content']}>
        <h3 className={styles['qualification__title']}>{title}</h3>
        <span className={styles['qualification__subtitle']}>{subtitle}</span>
        <div className={styles['qualification__calendar']}>
          <i className="dg-calendar-alt" />
          {calendar}
        </div>
      </div>

      <div className={styles['range']}>
        <span className={styles['qualification__rounder']}></span>
        <span className={styles['qualification__line']}></span>
      </div>
      <div className={styles['blank']}></div>
    </div>
  );
};

export default Qualification;
