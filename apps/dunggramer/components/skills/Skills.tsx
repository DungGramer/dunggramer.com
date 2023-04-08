import clsx from 'clsx';
import Frontend from './Frontend';
import styles from './Skills.module.scss';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className={clsx('container grid', styles['skills__container'])}>
        <Frontend />
      </div>
    </section>
  );
};

export default Skills;
