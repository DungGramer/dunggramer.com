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
            Throughout my career, I have worked on various frontend projects, from building
            responsive websites to developing complex web applications. I thrive on building
            innovative solutions that not only meet the business requirements but also improve user
            experience.
          </p>
          <p className={styles['about__description']}>
            I am always looking for new challenges and opportunities to expand my skill set. When
            I'm not coding, you can find me exploring new hobbies, attending tech conferences, or
            volunteering in my local community.
          </p>

          <a
            href="https://cv.dunggramer.com/"
            className={`button button--flex ${styles['download__button']}`}
          >
            Download CV
            <i className="dg-files" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
