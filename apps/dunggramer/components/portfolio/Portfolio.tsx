import clsx from 'clsx';
import { useEffect, useState, useCallback } from 'react';
import { projectsData, projectsNav } from './Data';
import styles from './Portfolio.module.scss';
import WorkItem from './WorkItem';

const Portfolio = () => {
  const [item, setItem] = useState({ name: 'All' });
  const [projects, setProjects] = useState<any>([]);

  useEffect(() => {
    if (item.name === 'All') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter(
        (project) => project.category === item.name
        );
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = useCallback((name) => {
    setItem({ name });
  }, []);

  return (
    <section className={clsx('section', styles['work'])} id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">More recent works</span>

      <div className={styles['work__filters']}>
        {projectsNav.map((project, index) => (
          <span
            key={project.name}
            className={clsx(styles['work__item'], {
              [styles['active-work']]: item.name === project.name,
            })}
            onClick={() => handleClick(project.name)}
          >
            {project.name}
          </span>
        ))}
      </div>
      <div className={clsx('container grid', styles['work__container'])}>
        {projects.map((item, index) => (
          <WorkItem item={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
