import Frontend from './Frontend';
import styles from './Skills.module.scss';
import Backend from './Backend';
import clsx from 'clsx';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className={clsx('container grid', styles['skills__container'])}>
        <Frontend />
        {/* <Backend /> */}
      </div>
    </section>
  );
};

export default Skills;
