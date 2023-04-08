import styles from './Content.module.scss';
import { ReactComponent as Hand } from 'public/hand.svg';

const Content = () => {
  return (
    <div className={styles['home__data']}>
      <h1 className={styles['home__title']}>
        {Data.title}
        <Hand />
      </h1>
      <h3 className={styles["home__subtitle"]}>{Data.subtitle}</h3>
      <p className={styles["home__description"]}>{Data.description}</p>

      <a href="#contact" className="button button--flex">
        {Data.button}
        <i className="dg-send" />
      </a>
    </div>
  );
};

const Data = {
  title: 'DungGramer',
  subtitle: 'Front-end Developer',
  description: `I am a highly motivated software engineer interested in front-end with a passion to learn and develop projects using modern tech.`,
  button: 'Say Hello',
};

export default Content;
