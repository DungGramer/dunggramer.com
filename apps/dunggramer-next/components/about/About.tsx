import Info from './Info';
import styles from './About.module.scss';
import Image from 'next/image';
import clsx from 'clsx';

const About = () => {
  return (
    <section className={clsx(styles['about'], 'section')} id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className={clsx('container grid', styles['about__container'])}>
        <Image
          src="/about.jpeg"
          alt="My photo"
          className={styles['about__img']}
          width={350}
          height={810}
        />

        <div className={styles['about__data']}>
          <Info />

          <p className={styles['about__description']}>
            Frontend developer, with experience in ReactJS, NextJS. I have a
            passion for learning and developing projects using modern
            technologies. I am a fast learner and I am always looking for new
            challenges. I am a team player and I am willing to learn from
            others.
          </p>

          <a href="https://cv.dunggramer.com/" className="button button--flex">
            Download CV
            <i className="dg-files" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
